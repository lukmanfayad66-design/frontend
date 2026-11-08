import Link from 'next/link';
import { Bell, ClipboardList, Heart, PackageSearch, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Saved listings', value: '12', detail: 'Across 4 categories' },
  { label: 'Upcoming rentals', value: '3', detail: 'Next 30 days' },
  { label: 'Messages', value: '7', detail: 'Unanswered' },
  { label: 'Trust score', value: '96%', detail: 'Verified renter' },
];

const quickActions = [
  { title: 'Browse equipment', description: 'Find available excavators, generators and trailers.', href: '/browse', icon: PackageSearch },
  { title: 'Saved listings', description: 'Review your shortlist and compare pricing.', href: '/browse', icon: Heart },
  { title: 'Rental alerts', description: 'Stay on top of new availability and price drops.', href: '/dashboard/notifications', icon: Bell },
];

export default function RenterDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Renter dashboard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">Welcome back, Kofi</h1>
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/browse">Search equipment</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Quick actions</p>
              <h2 className="mt-2 text-2xl font-bold text-primary">Keep your projects moving</h2>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent sm:flex">
              <ClipboardList className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {quickActions.map(({ title, description, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="flex items-start justify-between gap-4 rounded-xl border border-border bg-secondary/40 p-4 transition-colors hover:border-accent/50 hover:bg-secondary"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Verification</p>
              <h2 className="mt-1 text-xl font-bold text-primary">Account in good standing</h2>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-muted-foreground">
            <p>• Verified phone and company account information.</p>
            <p>• Rental insurance and support documentation uploaded.</p>
            <p>• 2 new equipment matches match your project needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
