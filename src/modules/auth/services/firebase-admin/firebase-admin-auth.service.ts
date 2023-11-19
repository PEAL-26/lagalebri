import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { FirebaseAdminService } from './firebase-admin.service';

@Injectable()
export class FirebaseAdminAuthService {
  constructor(private admin: FirebaseAdminService) {}

  async getUser(id: string) {
    return await getAuth(this.admin.app).getUser(id);
  }
}
