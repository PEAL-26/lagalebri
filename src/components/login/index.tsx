'use client';

import { RedirectType, redirect } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useLogin } from './use-login';
import { LoginConfirmCode } from './login-confirm-code';

export function Login() {
  const {
    phone,
    isLoading,
    setPhone,
    handleLoginPhone,
    handleLoginGoogle,
    openConfirmCode,
    setOpenConfirmCode,
  } = useLogin();

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Digite seu telefone abaixo para entrar
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="900 000 000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            id="sign-in-phone-button"
            className="w-full"
            onClick={handleLoginPhone}
          >
            Entrar
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continua com
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleLoginGoogle}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </CardFooter>
      </Card>
      <LoginConfirmCode open={openConfirmCode} onClose={setOpenConfirmCode} />
      {isLoading && (
        <div className="fixed inset-0 z-[60] flex justify-center items-center bg-black/50">
          <Icons.spinner className="h-20 w-20 animate-spin" />
        </div>
      )}
    </>
  );
}
