import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { StringValue } from 'ms';
import { JwtService } from '@nestjs/jwt';
import { type Db, DRIZZLE } from 'src/db/db.module';
import { loginDto } from './dto/login.dto';
import { User, users } from 'src/db/schema';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from './jwt-payload';
import { config } from 'config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @Inject(DRIZZLE) private readonly db: Db,
    private readonly jwt: JwtService,
  ) {}

  async login(dto: loginDto) {
    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.username, dto.username))
      .limit(1);

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      this.logger.warn(`Failed login attempt for ${dto.username}`);
      throw new UnauthorizedException('invalid username or password');
    }
    this.logger.log(`User ${user.id} (${user.username}) logged in`);

    const tokens = await this.issueToken(user);
    return { ...tokens, user: this.toPublicUser(user) };
  }

  async refresh(refreshToken: string) {
    let payload: JwtPayload;
    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(refreshToken, {
        secret: config.jwtRefreshSecret,
      });
    } catch {
      throw new UnauthorizedException('invalid refresh token');
    }

    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.id, Number(payload.sub)));
    if (!user) {
      throw new UnauthorizedException('invalid refresh token');
    }
    this.logger.log(`Token refreshed for user ${user.id}`);
    const tokens = await this.issueToken(user);

    return { ...tokens, user: this.toPublicUser(user) };
  }

  async me(userId: string) {
    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.id, Number(userId)))
      .limit(1);

    if (!user) throw new UnauthorizedException('no matches');

    return this.toPublicUser(user);
  }

  private async issueToken(user: User) {
    const payload: JwtPayload = {
      sub: String(user.id),
      username: user.username,
      role: user.role,
    };
    const [access_token, refresh_token] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: config.jwtAccessSecret,
        expiresIn: config.jwtAccessTtl as StringValue,
      }),
      this.jwt.signAsync(payload, {
        secret: config.jwtRefreshSecret,
        expiresIn: config.jwtRefreshTtl as StringValue,
      }),
    ]);
    return { access_token, refresh_token };
  }

  private toPublicUser(user: User) {
    return { id: user.id, username: user.username, role: user.role };
  }
}
