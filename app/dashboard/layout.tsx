import type { ReactNode } from 'react';
import { AuthGate } from '@/components/auth/auth-gate';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGate allowedAccountType="owner">
      <DashboardShell>{children}</DashboardShell>
    </AuthGate>
  );
}