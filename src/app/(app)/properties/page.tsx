import { Metadata } from 'next';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Categories, Compartments, List } from '@/components/tabs/properties';

export const metadata: Metadata = {
  title: 'Propriedades',
};

export default function PropertiesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Propriedades</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
          <TabsTrigger value="compartments">Compartimentos</TabsTrigger>
        </TabsList>
        <List />
        <Categories />
        <Compartments />
      </Tabs>
    </div>
  );
}
