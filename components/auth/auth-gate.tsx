'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';
import { useAuth } from '@/components/auth/auth-provider';
import type { AccountType } from '@/lib/auth-client';

export function AuthGate({
  children,
  allowedAccountType,
}: {
  children: ReactNode;
  allowedAccountType: AccountType;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, status } = useAuth();

  useEffect(() => {
    if (status === 'loading') return;

    if (!user) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (user.account_type !== allowedAccountType) {
      const fallbackPath = user.account_type === 'owner' ? '/dashboard' : '/renter/dashboard';
      router.replace(fallbackPath);
    }
  }, [allowedAccountType, pathname, router, status, user]);

  if (status === 'loading' || !user || user.account_type !== allowedAccountType) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        <LoaderCircle className="h-5 w-5 animate-spin" aria-label="Checking your account" />
      </div>
    );
  }

  return <>{children}</>;
}
