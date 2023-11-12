import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Compartments() {
  return (
    <TabsContent value="compartments" className="space-y-4">
      <h1>Compartments</h1>
    </TabsContent>
  );
}
