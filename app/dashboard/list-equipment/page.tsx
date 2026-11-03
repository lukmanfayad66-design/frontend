'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ListEquipmentPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
        <ClipboardList className="h-7 w-7" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-accent">List Your Equipment</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">Create a new equipment listing</h1>
      <p className="mt-3 text-base leading-7 text-muted-foreground">
        The listing form is a separate feature still being developed. This page is the frontend entry point for the listing workflow for StrongHaul equipment owners.
      </p>
      <div className="mt-6 space-y-3">
        {[
          'Add your equipment details, photos and pricing.',
          'Choose the right category, location and availability.',
          'Submit for review before showing in search results.',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary/40 p-3 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/dashboard/equipment">
            Back to equipment <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-11 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/signup">Continue to account setup</Link>
        </Button>
      </div>
    </div>
  );
}
