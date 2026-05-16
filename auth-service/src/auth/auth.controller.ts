import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import {
  
  Request,
} from '@nestjs/common';

import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';

import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({
  summary: 'Register a new user',
})
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  @ApiOperation({
  summary: 'Login and receive JWT token',
})
  @Post('login')
login(@Body() loginDto: LoginDto) {
  return this.authService.login(loginDto);
}

@Get('profile')
@ApiBearerAuth()

@ApiOperation({
  summary: 'Get authenticated user profile',
})
@UseGuards(AuthGuard('jwt'))
getProfile(@Request() req) {
  return req.user;
}

}