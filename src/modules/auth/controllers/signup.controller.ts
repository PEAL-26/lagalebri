import { VerifyError } from '@/helpers/errors';
import {
  Controller,
  Post,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { Public } from '../constants';
import { SignupPhoneBodyDto } from './dtos/signup-phone-dto';
import { SignupGoogleService, SignupPhoneService } from '../services/auth';

@Controller('signup')
export class SignupController {
  constructor(
    private signupGoogle: SignupGoogleService,
    private signupPhone: SignupPhoneService,
  ) {}

  @Post('google')
  @Public()
  @HttpCode(HttpStatus.OK)
  async google(@Query('token') token: string) {
    try {
      await this.signupGoogle.execute(token);
      return { message: 'success' };
    } catch (error) {
      VerifyError(error);
    }
  }

  @Post('phone')
  @Public()
  @HttpCode(HttpStatus.OK)
  async phone(@Query('token') token: string, @Body() body: SignupPhoneBodyDto) {
    try {
      const { name } = body;
      await this.signupPhone.execute({ token, name });
      return { message: 'success' };
    } catch (error) {
      VerifyError(error);
    }
  }
}
