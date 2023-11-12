import { App } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <App>{children}</App>;
}
