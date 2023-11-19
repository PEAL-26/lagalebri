import { VerifyError } from '@/helpers/errors';
import { Controller, Post, Query } from '@nestjs/common';

import { Public } from '../constants';
import { LoginGoogleService, LoginPhoneService } from '../services/auth';

@Controller('login')
export class LoginController {
  constructor(
    private loginGoogleServe: LoginGoogleService,
    private loginPhoneService: LoginPhoneService,
  ) {}

  @Post('google')
  @Public()
  async google(@Query('token') token: string) {
    try {
      return this.loginGoogleServe.execute(token);
    } catch (error) {
      VerifyError(error);
    }
  }

  @Post('phone')
  @Public()
  async phone(@Query('token') token: string) {
    try {
      return this.loginPhoneService.execute(token);
    } catch (error) {
      VerifyError(error);
    }
  }
}
