import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from '@/database/database.module';

import { jwt } from './constants';
import { AuthGuard } from './guards/auth.guard';
import { LoginController, SignupController } from './controllers';
import {
  LoginGoogleService,
  LoginPhoneService,
  SignupGoogleService,
  SignupPhoneService,
} from './services/auth';
import {
  FirebaseAdminAuthService,
  FirebaseAdminService,
} from './services/firebase-admin';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwt.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    SignupGoogleService,
    SignupPhoneService,
    LoginPhoneService,
    LoginGoogleService,
    FirebaseAdminService,
    FirebaseAdminAuthService,
  ],
  controllers: [LoginController, SignupController],
  exports: [],
})
export class AuthModule {}
