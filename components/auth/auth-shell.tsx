import Link from 'next/link';
import { CheckCircle2, Truck } from 'lucide-react';

const benefits = [
  'Verified owners and reliable equipment',
  'Flexible rental terms that work for you',
  'Support at every step of the journey',
];

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative hidden overflow-hidden bg-primary px-10 py-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-success/20 blur-3xl" />
          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Truck className="h-5 w-5 text-accent-foreground" />
              </span>
              <span className="text-xl font-bold tracking-tight">Stronghaul</span>
            </Link>
            <div className="mt-24 max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Built for the work ahead
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight">
                The right equipment keeps every project moving.
              </h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/75">
                Connect with trusted equipment owners and find the machinery you need,
                exactly when you need it.
              </p>
            </div>
          </div>
          <div className="relative space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm text-primary-foreground/85">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                {benefit}
              </div>
            ))}
          </div>
        </aside>

        <main className="flex items-center justify-center px-4 py-12 sm:px-8 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link href="/" className="inline-flex items-center gap-2 font-bold text-primary">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Truck className="h-5 w-5 text-accent" />
                </span>
                Stronghaul
              </Link>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h1>
            <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
            <div className="mt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
