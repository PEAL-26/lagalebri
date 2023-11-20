import { useEffect, useState } from 'react';
import { RecaptchaVerifier } from 'firebase/auth';
import { RedirectType, redirect } from 'next/navigation';

import { auth } from '@/lib/firebase';
import { useAuthContext } from '@/contexts/auth-context';

import { useToast } from '../ui/use-toast';

interface RecaptchaType {
  verifier: RecaptchaVerifier;
}

export function useLogin() {
  const { toast } = useToast();
  const { loginGoogle, loginPhone, isLoading, error, user } = useAuthContext();

  const [phone, setPhone] = useState('');
  const [openConfirmCode, setOpenConfirmCode] = useState(false);
  const [recaptcha, setRecaptcha] = useState<RecaptchaType | null>(null);

  const handleLoginGoogle = async () => {
    await loginGoogle();
  };

  const handleLoginPhone = async () => {
    console.log({ phone });
    if (isLoading) return;

    if (phone.trim() === '') {
      toast({
        title: 'Erro',
        description: 'Por favor, digite seu telefone.',
        variant: 'destructive',
      });
      return;
    }

    if (phone.trim().length !== 9 && phone.trim().length !== 11) {
      toast({
        title: 'Erro',
        description: 'Número de telefone inválido.',
        variant: 'destructive',
      });
      return;
    }

    if (!recaptcha?.verifier) return;

    if (await loginPhone(phone, recaptcha.verifier)) {
      setOpenConfirmCode(true);
    } else {
      //   recaptcha?.verifier.render().then(function (widgetId) {
      //     // recaptcha.verifier. .reset(widgetId);
      //   });
    }
  };

  if (user) {
    redirect('/dashboard', RedirectType.replace);
  }

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'sign-in-phone-button',
      {
        size: 'invisible',
        callback: () => {
          handleLoginPhone();
        },
      }
    );

    setRecaptcha({ verifier: recaptchaVerifier });
  }, []);

    useEffect(() => {
    if (error) {
      setOpenConfirmCode(false);
    }
  }, [error]);

  return {
    phone,
    setPhone,
    handleLoginGoogle,
    handleLoginPhone,
    isLoading,
    error,
    openConfirmCode,
    setOpenConfirmCode,
  };
}
