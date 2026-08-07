import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from './jwt-payload';
import { config } from 'config';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authorization = request.headers.authorization;
    const [type, token] = authorization?.split(' ') ?? [];

    if (type !== 'Bearer' || !token)
      throw new UnauthorizedException('Missing bearer token');

    try {
      (request as Request & { user: JwtPayload }).user =
        await this.jwt.verifyAsync<JwtPayload>(token, {
          secret: config.jwtAccessSecret,
        });
    } catch (err) {
      console.log(err);

      throw new UnauthorizedException('invalid or expired token');
    }
    return true;
  }
}
