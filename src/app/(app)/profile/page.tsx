import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfil',
};

export default function PerfilPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Perfil</h2>
      </div>
    </div>
  );
}
