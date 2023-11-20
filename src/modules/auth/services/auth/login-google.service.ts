import { JwtService } from '@nestjs/jwt';
import { UserCRUDUseCases } from '@/domain/use-cases/users';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { FirebaseAdminService } from '../firebase-admin';

@Injectable()
export class LoginGoogleService {
  constructor(
    private jwtService: JwtService,
    private admin: FirebaseAdminService,
    private usersService: UserCRUDUseCases,
  ) {}

  async execute(token: string) {
    const decoded = await this.admin.verifyIdToken(token);
    const { user } = await this.usersService.getByEmail(decoded.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        identifier: user.email || user.phone || '',
        name: user.name,
        avatar: user.avatar,
        userType: user.type,
      }),
    };
  }
}
