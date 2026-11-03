'use client';

import { Inbox } from 'lucide-react';

export default function EnquiriesPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Inbox className="h-9 w-9" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-accent">Coming Soon</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">Enquiries</h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        Equipment owners will soon be able to receive and manage rental enquiries through StrongHaul. This page is a frontend placeholder only.
      </p>
    </div>
  );
}
