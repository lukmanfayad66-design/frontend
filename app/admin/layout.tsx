import type { ReactNode } from 'react';
import Link from 'next/link';
import { BadgeCheck, Bell, ClipboardCheck, Headset, LayoutDashboard, ShieldCheck, Truck, Users } from 'lucide-react';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Listing review', icon: ClipboardCheck },
  { label: 'Support requests', icon: Headset, count: 3 },
  { label: 'Users', icon: Users },
  { label: 'Trust & safety', icon: ShieldCheck },
  { label: 'Platform alerts', icon: Bell, count: 3 },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">
      <aside className="border-b border-primary-foreground/10 bg-primary text-primary-foreground lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-64 lg:flex-col lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center gap-3 border-b border-primary-foreground/10 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-primary">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold">StrongHaul</p>
            <p className="text-[11px] font-medium uppercase tracking-wider text-primary-foreground/55">Admin workspace</p>
          </div>
        </div>
        <nav aria-label="Admin navigation" className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/50">Administration</p>
          <div className="space-y-1">
            {navigation.map(({ label, icon: Icon, active, count }) => (
              <span
                key={label}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors ${active ? 'bg-primary-foreground text-primary font-semibold' : 'text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground'}`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{label}</span>
                {count ? <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? 'bg-accent text-accent-foreground' : 'bg-accent/20 text-accent'}`}>{count}</span> : !active && <span className="text-[10px] text-primary-foreground/45">SOON</span>}
              </span>
            ))}
          </div>
        </nav>
        <div className="border-t border-primary-foreground/10 p-3">
          <Link href="/dashboard" className="flex min-h-10 items-center gap-3 rounded-md px-3 text-sm text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <BadgeCheck className="h-4 w-4" />
            Owner workspace
          </Link>
        </div>
      </aside>
      <main className="min-h-screen flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><span>Admin workspace</span><span aria-hidden="true">/</span><span className="font-medium text-primary">Overview</span></div>
          <span className="text-sm font-semibold text-primary sm:hidden">StrongHaul Admin</span>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-primary" aria-label="3 unread support notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent ring-2 ring-card" />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
