'use client';

import { useState } from 'react';
import { CheckCheck, Headset, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AdminSectionPage } from '@/components/admin/admin-section-page';

const initialRequests = [
  { id: 'support-1', name: 'Ama Boateng', request: 'Unable to upload equipment photos', time: '6 min ago', priority: 'High' },
  { id: 'support-2', name: 'Joseph Mensah', request: 'Needs help verifying an owner account', time: '24 min ago', priority: 'Normal' },
  { id: 'support-3', name: 'Akosua Logistics', request: 'Question about a rejected listing', time: '42 min ago', priority: 'Normal' },
];

export default function SupportRequestsPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function resolveRequest(id: string) {
    setPendingId(id);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setRequests((current) => current.filter((request) => request.id !== id));
    setPendingId(null);
  }

  return <AdminSectionPage eyebrow="People need help" title="Support requests" description="Review open requests from StrongHaul owners and renters, then mark them resolved when they have been handled.">
    {requests.length === 0 ? <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success"><CheckCheck className="h-6 w-6" /></div><h2 className="mt-4 text-xl font-bold text-primary">All support requests are resolved</h2><p className="mt-2 text-sm text-muted-foreground">There are no people waiting for help right now.</p></div> : <div className="space-y-3">{requests.map((request) => <article key={request.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><Headset className="h-4 w-4" /></div><div><div className="flex flex-wrap items-center gap-2"><p className="font-semibold text-primary">{request.name}</p><Badge className={request.priority === 'High' ? 'bg-warning/10 text-warning hover:bg-warning/10' : 'bg-secondary text-primary hover:bg-secondary'}>{request.priority}</Badge></div><p className="mt-1 text-sm leading-6 text-muted-foreground">{request.request}</p><p className="mt-2 text-xs text-muted-foreground">Received {request.time}</p></div></div><Button onClick={() => resolveRequest(request.id)} disabled={pendingId === request.id} variant="outline" className="h-10 shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">{pendingId === request.id ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Resolving...</> : <><CheckCheck className="mr-2 h-4 w-4" /> Mark resolved</>}</Button></article>)}</div>}
  </AdminSectionPage>;
}
