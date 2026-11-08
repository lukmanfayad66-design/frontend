'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { setStoredUser, type AccountType } from '@/lib/auth-demo';

const accountTypes: { value: AccountType; label: string; description: string }[] = [
  { value: 'owner', label: 'Equipment Owner', description: 'List and manage equipment rentals.' },
  { value: 'renter', label: 'Renter', description: 'Browse, compare and contact owners.' },
];

export default function RegisterPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<AccountType>('owner');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !password || !confirmPassword) {
      setError('Please complete all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Use at least 8 characters for your password.');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const user = {
      id: `${accountType}-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
      accountType,
      marketingConsent: accountType === 'renter' ? marketingConsent : false,
    };

    setStoredUser(user);
    setSubmitted(true);
    setIsSubmitting(false);

    router.push(accountType === 'owner' ? '/dashboard' : '/renter/dashboard');
  }

  return (
    <AuthShell
      eyebrow="Create account"
      title="Join Stronghaul"
      description="Set up your account to browse, list equipment, or manage rentals on the marketplace."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {accountTypes.map(({ value, label, description }) => (
            <label
              key={value}
              className={cn(
                'cursor-pointer rounded-xl border p-3 transition-colors hover:border-accent/60',
                accountType === value ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-border'
              )}
            >
              <input
                type="radio"
                name="accountType"
                value={value}
                checked={accountType === value}
                onChange={(event) => setAccountType(event.target.value as AccountType)}
                className="sr-only"
              />
              <span className="block text-sm font-semibold text-primary">{label}</span>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span>
            </label>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-name">Full name</Label>
          <Input id="register-name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Kwame Asare" required />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="register-email">Email address</Label>
            <Input id="register-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-phone">Phone number</Label>
            <Input id="register-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+233 20 123 4567" required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input id="register-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" minLength={8} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-confirm-password">Confirm password</Label>
            <Input id="register-confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat your password" minLength={8} required />
          </div>
        </div>

        {accountType === 'renter' && (
          <label className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-accent"
            />
            <span>
              I agree to receive marketplace updates and promotional content. This is optional and not selected by default.
            </span>
          </label>
        )}

        {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}

        <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90">
          {isSubmitting ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Creating account...</> : <>Create account <ArrowRight className="ml-2 h-4 w-4" /></>}
        </Button>

        {submitted && (
          <p role="status" className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Demo mode: your account was created successfully.
          </p>
        )}

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <a href="/login" className="font-semibold text-accent hover:underline">Sign in</a>
        </p>
      </form>
    </AuthShell>
  );
}
