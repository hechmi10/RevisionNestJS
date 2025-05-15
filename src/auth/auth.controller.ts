/* eslint-disable prettier/prettier */
import { Body, Controller, Post, /*UseGuards*/ } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
//import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController{
  constructor(
    private readonly authService: AuthService,
  ) {}

  //@UseGuards(JwtAuthGuard)
  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  //@UseGuards(JwtAuthGuard)
  @Post('signin')
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto)
  }
}
