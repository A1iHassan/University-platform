import { Request } from 'express';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtPayload } from './jwt-payload';
import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: loginDto) {
    return this.authService.login(dto);
  }

  @Get('refresh')
  refresh(@Headers('Authorization') auth: string) {
    const [scheme, refreshToken] = auth?.split(' ') ?? [];

    if (scheme !== 'Bearer' || !refreshToken) {
      throw new UnauthorizedException('no refresh token passed in the headers');
    }
    return this.authService.refresh(refreshToken);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: Request & { user: JwtPayload }) {
    return this.authService.me(req.user.sub);
  }
}
