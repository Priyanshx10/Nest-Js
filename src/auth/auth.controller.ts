/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    //Creating Two End Point for Login and Signup. the way to do this is using Decorator.
    //Expecting a Post Request on Signup and Login
  }

  //route will be  POST/auth/signup
  @Post('signup')
  signup() {
    return this.authService.signUp;
  }

  //route will be  POST/auth/signin
  @Post('signin')
  signin() {
    return this.authService.signin;
  }
}

//A Controller is responsible for handling request
//A Service or provider is responsible for handling business Logic
