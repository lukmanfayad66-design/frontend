'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getStoredUser, type AccountType } from '@/lib/auth-demo';

export function AuthGate({
  children,
  allowedAccountType,
}: {
  children: ReactNode;
  allowedAccountType: AccountType;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const user = getStoredUser();

  useEffect(() => {
    if (!user) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (user.accountType !== allowedAccountType) {
      const fallbackPath = user.accountType === 'owner' ? '/dashboard' : '/renter/dashboard';
      router.replace(fallbackPath);
    }
  }, [allowedAccountType, pathname, router, user]);

  if (!user || user.accountType !== allowedAccountType) {
    return null;
  }

  return <>{children}</>;
}
