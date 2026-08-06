import { Request } from 'express';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtPayload } from './jwt-payload';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: loginDto) {
    return this.authService.login(dto);
  }

  @Post('refresh')
  refresh(@Body() dto: RefreshDto) {
    return this.authService.refresh(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: Request & { user: JwtPayload }) {
    return this.authService.me(req.user.sub);
  }
}
