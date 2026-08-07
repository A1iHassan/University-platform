import { CookieOptions, type Request, type Response } from 'express';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtPayload } from './jwt-payload';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() dto: loginDto,
  ) {
    const cookieOpts: CookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    };

    const { access_token, refresh_token, user } =
      await this.authService.login(dto);
    const tokens = { access_token, refresh_token };
    for (const [name, value] of Object.entries(tokens))
      response.cookie(name, value, cookieOpts);

    return { status: 'success', user };
  }

  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refresh_token = request.cookies['refresh_token'] as string;

    if (!refresh_token)
      throw new UnauthorizedException('no refresh token in cookies');

    const {
      refresh_token: new_refresh_token,
      access_token,
      user,
    } = await this.authService.refresh(refresh_token);

    const tokens = { refresh_token: new_refresh_token, access_token };

    const cookieOpts: CookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    };
    for (const [name, value] of Object.entries(tokens))
      response.cookie(name, value, cookieOpts);

    return { status: 'success', user };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: Request & { user: JwtPayload }) {
    return this.authService.me(req.user.sub);
  }
}
