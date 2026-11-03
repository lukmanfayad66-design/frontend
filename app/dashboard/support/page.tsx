'use client';

import { LifeBuoy, MessageSquareText, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const supportRequests = [
  { id: 'SR-1024', issue: 'Subscription upgrade question', status: 'Open', updated: '2 hours ago' },
  { id: 'SR-1018', issue: 'Equipment listing approval status', status: 'In Review', updated: '1 day ago' },
  { id: 'SR-1006', issue: 'Featured listing placement enquiry', status: 'Resolved', updated: '3 days ago' },
];

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Help & support</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Support</h1>
        </div>
        <Button asChild className="h-11 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/dashboard/support">
            <Plus className="mr-2 h-4 w-4" /> Submit a Support Request
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
            <LifeBuoy className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-primary">Contact Support</h2>
          <p className="mt-2 text-sm text-muted-foreground">Reach out to the StrongHaul support team for account and marketplace guidance.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
            <MessageSquareText className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-primary">My Support Requests</h2>
          <p className="mt-2 text-sm text-muted-foreground">Review recent help tickets and their current status.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
            <Plus className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-primary">Submit a Support Request</h2>
          <p className="mt-2 text-sm text-muted-foreground">Share your question or an issue with your equipment listing.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-bold text-primary">Recent requests</h2>
        <div className="mt-4 space-y-3">
          {supportRequests.map((request) => (
            <div key={request.id} className="flex flex-col gap-3 rounded-xl border border-border bg-secondary/30 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-primary">{request.issue}</p>
                <p className="mt-1 text-sm text-muted-foreground">{request.id} · Updated {request.updated}</p>
              </div>
              <Badge className={request.status === 'Resolved' ? 'bg-success/10 text-success' : request.status === 'Open' ? 'bg-accent/10 text-accent' : 'bg-warning/10 text-warning'}>{request.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
