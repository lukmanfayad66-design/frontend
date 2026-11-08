'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWorkspace = pathname.startsWith('/dashboard') || pathname.startsWith('/admin') || pathname.startsWith('/renter');

  return (
    <div className="flex min-h-screen flex-col">
      {!isWorkspace && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isWorkspace && <Footer />}
    </div>
  );
}
