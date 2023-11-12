import Link from 'next/link';
import { UserNav } from '@/components/user-nav';
import { MainNav } from '@/components/main-nav';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b fixed inset-x-0 top-0 z-40">
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
      <div className="mt-16 flex-1">{children}</div>
    </>
  );
}
