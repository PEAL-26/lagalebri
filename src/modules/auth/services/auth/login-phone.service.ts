import { JwtService } from '@nestjs/jwt';
import { UserCRUDUseCases } from '@/domain/use-cases/users';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { FirebaseAdminService } from '../firebase-admin';

@Injectable()
export class LoginPhoneService {
  constructor(
    private jwtService: JwtService,
    private admin: FirebaseAdminService,
    private usersService: UserCRUDUseCases,
  ) {}

  async execute(token: string) {
    const decoded = await this.admin.verifyIdToken(token);
    const { user } = await this.usersService.getByPhone(decoded.phone_number);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      user: {
        identifier: user.email || user.phone || '',
        name: user.name,
        avatar: user.avatar,
        userType: user.type,
      },
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        userType: user.type,
      }),
    };
  }
}
