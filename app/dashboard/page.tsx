'use client';

import Link from 'next/link';
import { ArrowRight, Bell, Boxes, CircleDollarSign, Gauge, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDashboard } from '@/components/dashboard/dashboard-context';

const stats = [
  { label: 'Total equipment listings', value: '12', icon: Boxes },
  { label: 'Active listings', value: '8', icon: Truck },
  { label: 'Pending listings', value: '2', icon: Gauge },
  { label: 'Rejected listings', value: '1', icon: ShieldCheck },
];

export default function DashboardOverviewPage() {
  const { notifications } = useDashboard();
  const recentNotifications = notifications.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Welcome back</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Kofi, here is your equipment performance</h1>
        </div>
        <Button asChild className="h-11 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/dashboard/list-equipment">
            List Equipment <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{label}</p>
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-5 text-3xl font-bold tracking-tight text-primary">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-primary">Recent notifications</h2>
            <Link href="/dashboard/notifications" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {recentNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-primary">{notification.title}</p>
                    {!notification.read && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{notification.detail}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-card p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Current subscription</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-bold text-primary">Professional</p>
                <p className="mt-1 text-sm text-muted-foreground">GH₵99/month</p>
              </div>
              <Badge variant="secondary" className="bg-accent/10 text-accent">Active</Badge>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <div className="flex items-center gap-2 text-primary">
              <CircleDollarSign className="h-4 w-4 text-accent" />
              <p className="font-medium">Renewal</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Renews on 14 Nov 2026</p>
            <p className="mt-1 text-sm text-muted-foreground">Auto-renewal is not yet enabled in this frontend demo.</p>
          </div>
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/dashboard/subscription">Manage subscription</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
