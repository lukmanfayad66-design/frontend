'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getStoredUser, setStoredUser, validateDemoLogin } from '@/lib/auth-demo';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      router.replace(user.accountType === 'owner' ? '/dashboard' : '/renter/dashboard');
    }
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!identifier.trim() || !password) {
      setError('Please enter your email or phone number and password.');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const user = validateDemoLogin(identifier, password);
    if (!user) {
      setError('We could not find a matching account. Please check your details or create a new account.');
      setIsSubmitting(false);
      return;
    }

    setStoredUser(user);
    const redirectTarget = searchParams.get('redirect');
    const nextPath =
      redirectTarget && (redirectTarget.startsWith('/dashboard') || redirectTarget.startsWith('/renter/dashboard'))
        ? redirectTarget
        : user.accountType === 'owner'
          ? '/dashboard'
          : '/renter/dashboard';

    setSubmitted(true);
    setIsSubmitting(false);
    router.push(nextPath);
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Stronghaul"
      description="Access your rentals, messages, and equipment listings in one place."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email or phone number</Label>
          <Input
            id="login-email"
            name="identifier"
            type="text"
            autoComplete="username"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="you@company.com or +233 20 123 4567"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <Link href="/forgot-password" className="text-sm font-medium text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}

        <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          {isSubmitting ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Signing in...</> : <>Sign in <ArrowRight className="ml-2 h-4 w-4" /></>}
        </Button>
        {submitted && (
          <p role="status" className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Demo mode: your sign-in was successful.
          </p>
        )}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-accent hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}
