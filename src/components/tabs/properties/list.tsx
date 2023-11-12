import { z } from 'zod';
import { ColumnDef } from '@tanstack/react-table';

import { TabsContent } from '@/components/ui/tabs';
import { DataTable } from '@/components/data-table';

const dataSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export function List() {
  const data = [
    { id: '1', name: 'Teste 1' },
    { id: '2', name: 'Teste 2' },
    { id: '3', name: 'Teste 3' },
  ];
  const columns: ColumnDef<z.infer<typeof dataSchema>>[] = [];

  return (
    <TabsContent value="list" className="space-y-4">
      <h1>Propriedades</h1>
      <DataTable data={data} columns={columns} />
    </TabsContent>
  );
}
