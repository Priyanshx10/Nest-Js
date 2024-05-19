import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  //Creating Function for Login And Signup
  signin() {
    return {
      mssg: 'I Have signed up.',
    };
  }

  signUp() {
    return {
      mssg: 'I Have signed in.',
    };
  }
}
