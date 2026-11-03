'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Gauge,
  Headset,
  Menu,
  MessageSquare,
  Package,
  Plus,
  Settings,
  Truck,
  X,
  LogOut,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DashboardProvider, useDashboard } from './dashboard-context';

type DashboardNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  soon?: boolean;
};

type DashboardNavSection = {
  title: string;
  items: DashboardNavItem[];
};

const sections: DashboardNavSection[] = [
  {
    title: 'Overview',
    items: [{ label: 'Dashboard Overview', href: '/dashboard', icon: Gauge }],
  },
  {
    title: 'Equipment Management',
    items: [
      { label: 'My Equipment', href: '/dashboard/equipment', icon: Package },
      { label: 'List Equipment', href: '/dashboard/list-equipment', icon: Plus },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Enquiries', href: '/dashboard/enquiries', icon: Headset, soon: true },
      { label: 'Messages', href: '/dashboard/messages', icon: MessageSquare, soon: true },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Notifications', href: '/dashboard/notifications', icon: Bell },
      { label: 'Subscription & Billing', href: '/dashboard/subscription', icon: CreditCard },
      { label: 'Account Settings', href: '/dashboard/settings', icon: Settings },
    ],
  },
  {
    title: 'Help & Support',
    items: [
      { label: 'Support', href: '/dashboard/support', icon: Headset },
      { label: 'Help Center', href: '/dashboard/help', icon: BookOpen },
    ],
  },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <DashboardProvider>
      <DashboardFrame>{children}</DashboardFrame>
    </DashboardProvider>
  );
}

function DashboardFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { unreadCount } = useDashboard();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const sidebar = (
    <div className="flex h-full flex-col bg-primary text-primary-foreground">
      <div className="flex h-16 items-center gap-3 border-b border-primary-foreground/10 px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
          <Truck className="h-5 w-5" />
        </div>
        {!collapsed && <span className="text-lg font-bold">StrongHaul</span>}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-md text-primary-foreground/70 hover:bg-primary-foreground/10 lg:hidden"
          aria-label="Close dashboard navigation"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav aria-label="Dashboard navigation" className="flex-1 overflow-y-auto px-3 py-5">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/50">{section.title}</p>}
            <div className="space-y-1">
              {section.items.map(({ label, href, icon: Icon, soon }) => {
                const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(`${href}/`));
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    title={collapsed ? label : undefined}
                    className={cn(
                      'flex min-h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors',
                      active ? 'bg-primary-foreground text-primary font-semibold' : 'text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground',
                      collapsed && 'justify-center px-0'
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span className="min-w-0 flex-1 truncate">{label}</span>}
                    {!collapsed && soon && <span className="text-[10px] text-primary-foreground/45">SOON</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="border-t border-primary-foreground/10 p-3">
        <Link
          href="/login"
          title={collapsed ? 'Sign Out' : undefined}
          className={cn('flex min-h-10 items-center gap-3 rounded-md px-3 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground', collapsed && 'justify-center px-0')}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && 'Sign Out'}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className={cn('fixed inset-y-0 left-0 z-40 hidden transition-[width] duration-200 lg:block', collapsed ? 'w-[76px]' : 'w-[264px]')}>
        {sidebar}
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          className="absolute -right-3 top-20 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:text-foreground"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </aside>
      {mobileOpen && <button className="fixed inset-0 z-40 bg-primary/40 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay" />}
      <aside className={cn('fixed inset-y-0 left-0 z-50 w-[288px] -translate-x-full transition-transform duration-200 lg:hidden', mobileOpen && 'translate-x-0')}>
        {sidebar}
      </aside>
      <div className={cn('min-h-screen transition-[margin] duration-200', collapsed ? 'lg:ml-[76px]' : 'lg:ml-[264px]')}>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMobileOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-secondary lg:hidden" aria-label="Open dashboard navigation">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
              <span>Owner workspace</span><span aria-hidden="true">/</span><span className="font-medium text-primary">{getCurrentLabel(pathname)}</span>
            </div>
            <span className="text-sm font-semibold text-primary sm:hidden">StrongHaul Owner</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/notifications" className="relative flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-primary" aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ''}`}>
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent ring-2 ring-card" />}
            </Link>
            <div className="flex items-center gap-2 border-l border-border pl-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">KA</div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold leading-4 text-primary">Kofi Asare</p>
                <p className="mt-1 text-xs text-muted-foreground">Equipment owner</p>
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

function getCurrentLabel(pathname: string) {
  for (const section of sections) {
    const item = section.items.find((entry) => entry.href === pathname);
    if (item) return item.label;
  }
  return pathname === '/dashboard' ? 'Dashboard Overview' : 'Owner workspace';
}
