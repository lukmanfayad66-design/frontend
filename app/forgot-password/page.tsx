'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Reset your password"
      description="Enter the email associated with your account and we’ll help you get back in."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
          <Mail className="h-7 w-7 text-accent" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="forgot-email">Email address</Label>
          <Input id="forgot-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
        <Button type="submit" className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          Send reset link <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {submitted && (
          <p role="status" className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Demo mode: if this email exists, reset instructions would be sent.
          </p>
        )}
        <Link href="/login" className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
      </form>
    </AuthShell>
  );
}
