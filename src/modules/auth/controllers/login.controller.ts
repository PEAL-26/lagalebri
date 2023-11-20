import { VerifyError } from '@/helpers/errors';
import { Controller, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';

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
  @HttpCode(HttpStatus.OK)
  async google(@Query('token') token: string) {
    try {
      return await this.loginGoogleServe.execute(token);
    } catch (error) {
      VerifyError(error);
    }
  }

  @Post('phone')
  @Public()
  @HttpCode(HttpStatus.OK)
  async phone(@Query('token') token: string) {
    try {
      return await this.loginPhoneService.execute(token);
    } catch (error) {
      VerifyError(error);
    }
  }
}
