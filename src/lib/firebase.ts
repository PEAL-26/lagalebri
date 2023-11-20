import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from '@/configs/firebase-config';

const verifyApp = () => {
  const app = getApps();
  if (app.length) {
    return app[0];
  }

  return initializeApp(firebaseConfig);
};

export const app = verifyApp();
export const auth = getAuth(app);
