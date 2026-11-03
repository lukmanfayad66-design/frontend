'use client';

import { MessageSquareMore } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
        <MessageSquareMore className="h-9 w-9" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-accent">Coming Soon</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">Messages</h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        Equipment owners will soon be able to communicate with potential renters directly through StrongHaul. This page is a frontend placeholder and does not support sending or storing messages.
      </p>
    </div>
  );
}
