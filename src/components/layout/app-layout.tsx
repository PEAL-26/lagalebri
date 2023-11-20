import Link from 'next/link';
import { UserNav } from '@/components/user-nav';
import { MainNav } from '@/components/main-nav';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '../ui/scroll-area';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b fixed inset-x-0 top-0 z-40 bg-background">
        <div className="flex h-16 items-center px-4">
          <Link href="/dashboard" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/logo48.png" alt="lagalebri-logo" />
            </Avatar>
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <ScrollArea className="pt-16 w-full h-screen">{children}</ScrollArea>
    </>
  );
}
