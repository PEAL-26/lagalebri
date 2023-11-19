import { Injectable } from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';
import * as serviceAccount from '@/credentials/firebase-service-account.json';

const firebaseParams = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

@Injectable()
export class FirebaseAdminService {
  private _admin: firebaseAdmin.app.App;

  constructor() {
    this._admin = firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(firebaseParams),
    });
  }

  async verifyIdToken(idToken: string) {
    return await this._admin.auth().verifyIdToken(idToken);
  }

  public get app() {
    return this._admin;
  }
}
