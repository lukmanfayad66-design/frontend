'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Stronghaul"
      description="Access your rentals, messages, and equipment listings in one place."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email address</Label>
          <Input id="login-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <Link href="/forgot-password" className="text-sm font-medium text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
        </div>
        <Button type="submit" className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          Sign in <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {submitted && (
          <p role="status" className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Demo mode: your sign-in form was submitted successfully.
          </p>
        )}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-accent hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}
