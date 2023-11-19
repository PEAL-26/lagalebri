import { Injectable } from '@nestjs/common';
import { UserCRUDUseCases } from '@/domain/use-cases/users';

import { FirebaseAdminService } from '../firebase-admin';

interface SignupPhoneRequest {
  token: string;
  name: string;
}

@Injectable()
export class SignupPhoneService {
  constructor(
    private admin: FirebaseAdminService,
    private userUseCases: UserCRUDUseCases,
  ) {}

  async execute(request: SignupPhoneRequest) {
    const decoded = await this.admin.verifyIdToken(request.token);

    await this.userUseCases.create({
      name: request.name,
      phone: decoded.phone_number,
    });
  }
}
