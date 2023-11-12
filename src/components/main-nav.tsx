'use client';

import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/properties', label: 'Propriedades' },
  { href: '/users', label: 'Usuários' },
];

export function MainNav(props: HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const { className, ...rest } = props;

  const activeLink = (url: string) => {
    const className = {
      active: 'text-sm font-medium transition-colors hover:text-primary',
      inative:
        'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
    }[url === pathname ? 'active' : 'inative'];

    return className;
  };

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...rest}
    >
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={activeLink(link.href)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
