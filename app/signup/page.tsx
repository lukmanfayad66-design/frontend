'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, LoaderCircle, Search, Wrench } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const roles = [
  { value: 'seeker', label: 'I need equipment', description: 'Find and rent machinery for my project.', icon: Search },
  { value: 'owner', label: 'I own equipment', description: 'List equipment and earn from idle time.', icon: Wrench },
];

export default function SignupPage() {
  const [role, setRole] = useState('seeker');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    setSubmitted(true);
    setIsSubmitting(false);
  }

  return (
    <AuthShell
      eyebrow="Get started"
      title="Create your account"
      description="Join the marketplace built to make heavy equipment rental simpler."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <fieldset>
          <legend className="mb-3 text-sm font-medium">What brings you to Stronghaul?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map(({ value, label, description: roleDescription, icon: Icon }) => (
              <label
                key={value}
                className={cn(
                  'relative cursor-pointer rounded-xl border p-4 transition-colors hover:border-accent/60',
                  role === value ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-border'
                )}
              >
                <input
                  type="radio"
                  name="role"
                  value={value}
                  checked={role === value}
                  onChange={(event) => setRole(event.target.value)}
                  className="sr-only"
                />
                <Icon className={cn('mb-3 h-5 w-5', role === value ? 'text-accent' : 'text-muted-foreground')} />
                <span className="block text-sm font-semibold">{label}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">{roleDescription}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="signup-first-name">First name</Label>
            <Input id="signup-first-name" name="firstName" autoComplete="given-name" placeholder="Jordan" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-last-name">Last name</Label>
            <Input id="signup-last-name" name="lastName" autoComplete="family-name" placeholder="Lee" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-email">Work email</Label>
          <Input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-password">Create a password</Label>
          <Input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="At least 8 characters" minLength={8} required />
        </div>
        <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          {isSubmitting ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Creating account...</> : <>Create account <ArrowRight className="ml-2 h-4 w-4" /></>}
        </Button>
        {submitted && (
          <p role="status" className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Demo mode: your account setup form was submitted successfully.
          </p>
        )}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-accent hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
}
