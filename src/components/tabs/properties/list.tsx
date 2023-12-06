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

  const columns: ColumnDef<z.infer<typeof dataSchema>>[] = [
    {
      id: 'select',
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
    },
    {
      id: 'actions',
    },
  ];

  console.log({ columns, data });
  return (
    <TabsContent value="list" className="space-y-4">
      <DataTable data={data} columns={columns} />
    </TabsContent>
  );
}
