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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login with username and password' })
  @ApiBody({ type: loginDto })
  @ApiResponse({ status: 200, description: 'Login successful, returns user and sets tokens in cookies' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
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
  @ApiOperation({ summary: 'Refresh access token using refresh token from cookies' })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  @ApiResponse({ status: 401, description: 'No refresh token in cookies' })
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
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiResponse({ status: 200, description: 'Current user info' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  me(@Req() req: Request & { user: JwtPayload }) {
    return this.authService.me(req.user.sub);
  }
}