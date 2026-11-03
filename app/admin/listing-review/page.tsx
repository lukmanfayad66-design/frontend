'use client';

import { useState } from 'react';
import { Check, ClipboardCheck, LoaderCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AdminSectionPage } from '@/components/admin/admin-section-page';

type ReviewStatus = 'Needs review' | 'Approved' | 'Rejected';

const initialListings: { id: string; equipment: string; owner: string; submitted: string; status: ReviewStatus }[] = [
  { id: 'listing-1', equipment: 'CAT 320 Excavator', owner: 'Kwame Construction', submitted: '1 hour ago', status: 'Needs review' },
  { id: 'listing-2', equipment: 'Volvo FMX Tipper Truck', owner: 'Accra Haulage', submitted: '2 hours ago', status: 'Needs review' },
  { id: 'listing-3', equipment: 'JCB 3CX Backhoe Loader', owner: 'Dapaah Plant Hire', submitted: '3 hours ago', status: 'Needs review' },
];

export default function ListingReviewPage() {
  const [listings, setListings] = useState(initialListings);
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function updateStatus(id: string, status: Extract<ReviewStatus, 'Approved' | 'Rejected'>) {
    setPendingId(id);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setListings((current) => current.map((listing) => listing.id === id ? { ...listing, status } : listing));
    setPendingId(null);
  }

  return <AdminSectionPage eyebrow="Moderation" title="Listing review" description="Review submitted equipment listings before they become visible to renters.">
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      {listings.map((listing) => {
        const isPending = pendingId === listing.id;
        const isReviewed = listing.status !== 'Needs review';
        return <div key={listing.id} className="flex flex-col gap-4 border-b border-border p-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><ClipboardCheck className="h-4 w-4" /></div>
            <div><p className="font-semibold text-primary">{listing.equipment}</p><p className="mt-1 text-sm text-muted-foreground">{listing.owner} · Submitted {listing.submitted}</p></div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={listing.status === 'Approved' ? 'bg-success/10 text-success hover:bg-success/10' : listing.status === 'Rejected' ? 'bg-destructive/10 text-destructive hover:bg-destructive/10' : 'bg-accent/10 text-accent hover:bg-accent/10'}>{listing.status}</Badge>
            {!isReviewed && <><Button onClick={() => updateStatus(listing.id, 'Approved')} disabled={isPending} className="h-9 bg-success text-success-foreground hover:bg-success/90">{isPending ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : <><Check className="mr-2 h-4 w-4" /> Approve</>}</Button><Button onClick={() => updateStatus(listing.id, 'Rejected')} disabled={isPending} variant="outline" className="h-9 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"><X className="mr-2 h-4 w-4" /> Reject</Button></>}
          </div>
        </div>;
      })}
    </div>
  </AdminSectionPage>;
}
