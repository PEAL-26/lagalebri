import { appConfig } from '@/configs/app-config';
import { ErrorCustom } from '@/helpers/error';

export async function loginGoogleService(token: string) {
  return fetch(`${appConfig.api}/login/google?token=${token}`, {
    method: 'POST',
  }).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      throw new ErrorCustom(result.errors);
    }

    return result.access_token;
  });
}
