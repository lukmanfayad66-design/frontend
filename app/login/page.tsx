'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/auth/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, status, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirectingAfterLogin = useRef(false);

  useEffect(() => {
    if (status !== 'authenticated' || !user || redirectingAfterLogin.current) return;
    router.replace(user.account_type === 'owner' ? '/dashboard' : '/renter/dashboard');
  }, [router, status, user]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your email address and password.');
      return;
    }

    setIsSubmitting(true);
    redirectingAfterLogin.current = true;
    try {
      const signedInUser = await signIn(email.trim(), password);
      const requestedPath = searchParams.get('redirect');
      const isOwnerPath = requestedPath === '/dashboard' || requestedPath?.startsWith('/dashboard/');
      const isRenterPath = requestedPath === '/renter/dashboard' || requestedPath?.startsWith('/renter/dashboard/');
      const destination = signedInUser.account_type === 'owner'
        ? isOwnerPath ? requestedPath! : '/dashboard'
        : isRenterPath ? requestedPath! : '/renter/dashboard';
      router.replace(destination);
    } catch (submitError) {
      redirectingAfterLogin.current = false;
      setError(submitError instanceof Error ? submitError.message : 'Sign in failed. Please try again.');
      setIsSubmitting(false);
      return;
    }
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Stronghaul"
      description="Sign in to continue to your StrongHaul account."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email address</Label>
          <Input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
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
          <div className="relative">
            <Input
              id="login-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-1 top-1 flex h-8 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-primary"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
        {searchParams.get('registered') === '1' && (
          <p role="status" className="rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            Registration request accepted. Sign in with your email and password. If this email was already registered, use its existing password.
          </p>
        )}

        <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          {isSubmitting ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Signing in...</> : <>Sign in <ArrowRight className="ml-2 h-4 w-4" /></>}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-accent hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}
