'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, LoaderCircle, PencilLine, PowerOff, Plus, SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const sampleEquipment = [
  {
    id: '1',
    name: 'CAT 336 Hydraulic Excavator',
    category: 'Excavators',
    status: 'Approved',
    submitted: '09 Oct 2026',
    image: 'https://images.pexels.com/photos/35846752/pexels-photo-35846752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: '2',
    name: 'Peterbilt 567 Dump Truck',
    category: 'Dump Trucks',
    status: 'Pending',
    submitted: '15 Oct 2026',
    image: 'https://images.pexels.com/photos/36656998/pexels-photo-36656998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: '3',
    name: 'Komatsu D65PX Dozer',
    category: 'Bulldozers',
    status: 'Rejected',
    submitted: '18 Oct 2026',
    image: 'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const statusStyles: Record<string, string> = {
  Approved: 'bg-success/10 text-success',
  Pending: 'bg-warning/10 text-warning',
  Rejected: 'bg-destructive/10 text-destructive',
};

export default function DashboardEquipmentPage() {
  const emptyState = sampleEquipment.length === 0;
  const [pendingDeactivationId, setPendingDeactivationId] = useState<string | null>(null);

  async function handleDeactivate(id: string) {
    setPendingDeactivationId(id);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setPendingDeactivationId(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Equipment management</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">My Equipment</h1>
        </div>
        <Button asChild className="h-11 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/dashboard/list-equipment">
            <Plus className="mr-2 h-4 w-4" /> List Equipment
          </Link>
        </Button>
      </div>

      {emptyState ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
            <SearchX className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-xl font-bold text-primary">No equipment listed yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Start by listing your first machine. Once approved, it will appear in search results and be available for renter enquiries.
          </p>
          <Button asChild className="mt-5 h-11 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/dashboard/list-equipment">List your equipment</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-5 xl:grid-cols-2">
          {sampleEquipment.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-primary">{item.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <Badge className={statusStyles[item.status] || 'bg-secondary text-primary'}>{item.status}</Badge>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                  <span>Submitted</span>
                  <span className="font-medium text-primary">{item.submitted}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="h-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={`/equipment/${item.id}`}>
                      <Eye className="mr-2 h-4 w-4" /> View Listing
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-10 border-border hover:bg-secondary">
                    <Link href="/dashboard/list-equipment">
                      <PencilLine className="mr-2 h-4 w-4" /> Edit Listing
                    </Link>
                  </Button>
                  <Button onClick={() => handleDeactivate(item.id)} disabled={pendingDeactivationId === item.id} variant="outline" className="h-10 border-border text-muted-foreground hover:bg-secondary">
                    {pendingDeactivationId === item.id ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Deactivating...</> : <><PowerOff className="mr-2 h-4 w-4" /> Deactivate Listing</>}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
