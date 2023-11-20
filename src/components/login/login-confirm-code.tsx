'use client';

import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { useAuthContext } from '@/contexts/auth-context';

import { Input } from '../ui/input';

interface LoginConfirmCodeProps {
  open?: boolean;
  onClose?(state: boolean): void;
}

export function LoginConfirmCode({ open, onClose }: LoginConfirmCodeProps) {
  const { confirmPhone } = useAuthContext();

  const [code, setCode] = useState('');

  const handleConfirmCode = async () => {
    await confirmPhone(code);
    onClose?.(false);
  };

  useEffect(() => {
    setCode('');
  }, [open]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Input
            placeholder="000000"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClose?.(false)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmCode}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
