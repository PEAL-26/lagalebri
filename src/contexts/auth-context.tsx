'use client';

import { auth } from '@/lib/firebase';
import jwtDecode from 'jwt-decode';
import { getCookie, removeCookie, setCookie } from '@/helpers/cookies';
import { loginGoogleService, loginPhoneService } from '@/services/auth-service';
import {
  ConfirmationResult,
  GoogleAuthProvider,
  RecaptchaVerifier,
  browserLocalPersistence,
  signInWithPhoneNumber,
  signInWithPopup,
} from 'firebase/auth';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { errorCustomToString } from '@/helpers/error';
import { useToast } from '@/components/ui/use-toast';

type UserType = {
  sub: string;
  name: string;
  identifier: string;
  avatar: string | null;
  userType: 'NORMAL' | 'ADMIN';
};

interface AuthContextProps {
  user: UserType | null;
  error: string | null;
  isLoading: boolean;
  loginGoogle(): Promise<void>;
  loginPhone(phone: string, appVerifier: RecaptchaVerifier): Promise<boolean>;
  confirmPhone(code: string): Promise<void>;
  signupGoogle(): Promise<void>;
  signupPhone(): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmCode, setSetConfirmCode] = useState<ConfirmationResult | null>(
    null
  );

  const setToken = (token: string) => {
    const decoded: UserType = jwtDecode(token);
    if (decoded.userType !== 'ADMIN') {
      throw new Error('Não tem permissão para acessar essa página.');
    }

    setUser(decoded);

    const cookieOptions = { expires: 7 /* 7 days */, path: '/' };
    setCookie('token', token, cookieOptions);
  };

  const loginGoogle = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();

      await auth.setPersistence(browserLocalPersistence);
      await signInWithPopup(auth, provider);
      const idToken = await auth.currentUser?.getIdToken();
      const token = await loginGoogleService(idToken || '');
      setToken(token);
    } catch (error: any) {
      let errors = errorCustomToString(error);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const loginPhone = async (
    phone: string,
    appVerifier: RecaptchaVerifier
  ): Promise<boolean> => {
    if (isLoading) return false;
    setIsLoading(true);
    setError(null);

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+244${phone}`,
        appVerifier
      );

      setSetConfirmCode(confirmationResult);
    } catch (error) {
      let errors = errorCustomToString(error);
      setError(errors);
      return false;
    } finally {
      setIsLoading(false);
    }

    return true;
  };

  const confirmPhone = async (code: string) => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await confirmCode?.confirm(code);
      const idToken = await result?.user.getIdToken();

      const token = await loginPhoneService(idToken || '');
      setToken(token);
    } catch (error) {
      let errors = errorCustomToString(error);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const signupGoogle = async () => {};

  const signupPhone = async () => {};

  const logout = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      await auth.signOut();
      setUser(null);
      removeCookie('token');
    } catch (error: any) {
      let errors = errorCustomToString(error);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUser = () => {
    const token = getCookie('token');

    if (token) {
      const decoded: UserType = jwtDecode(token);
      setUser(decoded);
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Erro de autenticação',
        description: error,
      });
    }
  }, [error, toast]);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        loginPhone,
        loginGoogle,
        confirmPhone,
        signupGoogle,
        signupPhone,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
