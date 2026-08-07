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
    const token = request.cookies?.['access_token'] as string;

    if (!token)
      throw new UnauthorizedException('Missing access token in cookies');

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
