import type { ReactNode } from 'react';
import { AuthGate } from '@/components/auth/auth-gate';

export default function RenterLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGate allowedAccountType="renter">
      <div className="min-h-screen bg-background text-foreground">{children}</div>
    </AuthGate>
  );
}
