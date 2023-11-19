import { Injectable } from '@nestjs/common';
import {
  FirebaseAdminAuthService,
  FirebaseAdminService,
} from '../firebase-admin';
import { UserCRUDUseCases } from '@/domain/use-cases/users';

@Injectable()
export class SignupGoogleService {
  constructor(
    private admin: FirebaseAdminService,
    private auth: FirebaseAdminAuthService,
    private userUseCases: UserCRUDUseCases,
  ) {}

  async execute(token: string) {
    const decoded = await this.admin.verifyIdToken(token);
    const user = await this.auth.getUser(decoded.uid);

    await this.userUseCases.create({
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      avatar: user.photoURL,
    });
  }
}
