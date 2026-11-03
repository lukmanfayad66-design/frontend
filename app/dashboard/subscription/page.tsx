'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  { name: 'Basic', monthly: 0, yearly: 0, limit: '1 active equipment listing', features: ['1 active equipment listing', 'Standard search visibility', 'Direct customer enquiries', 'Basic listing management'] },
  { name: 'Professional', monthly: 99, yearly: 990, limit: 'Up to 5 active listings', features: ['Up to 5 active equipment listings', 'Improved search visibility', 'Direct customer enquiries', 'Listing performance statistics', 'Access to featured promotions'], recommended: true },
  { name: 'Business', monthly: 249, yearly: 2490, limit: 'Up to 20 active listings', features: ['Up to 20 active equipment listings', 'Priority search visibility', 'Business profile', 'Listing performance statistics', 'Multiple equipment management', 'Promotional discounts'] },
];

export default function SubscriptionPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Account</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Subscription & Billing</h1>
        </div>
        <div className="inline-flex rounded-lg border border-border bg-card p-1">
          <button type="button" onClick={() => setBilling('monthly')} className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${billing === 'monthly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </button>
          <button type="button" onClick={() => setBilling('yearly')} className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${billing === 'yearly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
            Yearly
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Current plan</p>
            <p className="mt-1 text-2xl font-bold text-primary">Professional</p>
          </div>
          <Badge className="bg-accent/10 text-accent">Active</Badge>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === 'monthly' ? plan.monthly : plan.yearly;
            const isCurrent = plan.name === 'Professional';

            return (
              <article key={plan.name} className={`rounded-2xl border p-5 ${plan.recommended ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-bold text-primary">{plan.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.limit}</p>
                  </div>
                  {plan.recommended && <Badge className="bg-accent text-accent-foreground">Recommended</Badge>}
                </div>
                <div className="mt-6">
                  <p className="text-3xl font-bold tracking-tight text-primary">GH₵{price.toLocaleString('en-GH')}</p>
                  <p className="mt-1 text-sm text-muted-foreground">/{billing === 'monthly' ? 'month' : 'year'}</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild className={`h-11 w-full ${isCurrent ? 'bg-secondary text-primary hover:bg-secondary/80' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                    <Link href="/dashboard/subscription">{isCurrent ? 'Current Plan' : 'Upgrade'} </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/40 p-6">
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-bold text-primary">Billing notes</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-primary">Professional annual savings</p>
            <p className="mt-1 text-sm text-muted-foreground">GH₵198/year when billed annually.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-primary">Business annual savings</p>
            <p className="mt-1 text-sm text-muted-foreground">GH₵498/year when billed annually.</p>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-success" />
          Subscription checkout is not implemented in this frontend demo. This interface is prepared for future billing integration.
        </p>
      </div>
    </div>
  );
}
