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
import { useAuthContext } from '@/contexts/auth-context';

export function Login() {
    const { loginGoogle, isLoading, error, user } = useAuthContext();

  const handleLoginGoogle = async () => {
    await loginGoogle();
  };

  if (user) {
    redirect('/dashboard', RedirectType.replace);
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Digite seu e-mail abaixo para entrar
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full">Create account</Button>
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
      {isLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          <Icons.spinner className="h-20 w-20 animate-spin" />
        </div>
      )}
    </>
  );
}
