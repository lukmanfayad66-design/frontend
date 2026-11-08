import Link from 'next/link';
import { ArrowLeft, MailWarning } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Password reset unavailable"
      description="Password reset is not connected yet. StrongHaul does not currently have a password-reset endpoint or email delivery service."
    >
      <div className="space-y-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warning/10">
          <MailWarning className="h-7 w-7 text-warning" />
        </div>
        <p className="rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm leading-6 text-foreground">
          No reset email has been sent. If you cannot access your account, use the Help Center for general guidance; its support form is not connected yet.
        </p>
        <Button asChild variant="outline" className="w-full">
          <Link href="/login"><ArrowLeft className="mr-2 h-4 w-4" /> Back to sign in</Link>
        </Button>
      </div>
    </AuthShell>
  );
}
