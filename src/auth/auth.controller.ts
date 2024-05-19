import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    //Creating Two End Point for Login and Signup. the way to do this is using Decorator.
    //Expecting a Post Request on Signup and Login

    //route will be  POST/auth/signup
    @Post('signup')
    signup(){
       return 'I am signed up.'
    }
    
    //route will be  POST/auth/login
    @Post('signin')
    signin(){
        return 'I am signed in.'
    }
  }
}
