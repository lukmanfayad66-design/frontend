'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BadgeAlert,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Construction,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const renterChecks = [
  'Verify the equipment’s condition before use.',
  'Review the equipment specifications and operating limits.',
  'Request maintenance or inspection records where appropriate.',
  'Confirm the machine is suitable for the intended work and site.',
  'Check operator qualifications and training requirements.',
  'Understand the manufacturer’s operating requirements.',
  'Agree on rental conditions with the owner before proceeding.',
];

const ownerResponsibilities = [
  'Provide accurate equipment descriptions and specifications.',
  'Disclose known defects, damage and mechanical issues.',
  'Maintain equipment in appropriate working condition.',
  'Provide relevant operating instructions and documentation.',
  'Clearly communicate equipment limitations.',
  'Explain specific operating requirements to the renter.',
  'Make required safety equipment available where applicable.',
];

const renterResponsibilities = [
  'Use equipment only for its intended purpose.',
  'Follow manufacturer operating instructions.',
  'Use operators with appropriate training and qualifications.',
  'Wear suitable personal protective equipment (PPE).',
  'Do not operate defective or unsafe machinery.',
  'Follow applicable workplace safety regulations.',
  'Stop work when unsafe conditions arise.',
];

const equipmentGuides = [
  {
    title: 'Excavators and earthmoving machinery',
    icon: Construction,
    points: 'Check the work area for people, underground services and overhead hazards. Keep clear of the swing area and follow the operator manual for slopes and stability.',
  },
  {
    title: 'Cranes and lifting equipment',
    icon: ClipboardCheck,
    points: 'Use a competent lift plan, confirm load weight and working radius, inspect rigging, and keep people outside the suspended-load zone.',
  },
  {
    title: 'Trucks and haulage vehicles',
    icon: Truck,
    points: 'Complete pre-use checks, secure loads correctly, confirm route and site access, and follow applicable road and site rules.',
  },
  {
    title: 'Forklifts and material handling',
    icon: PackageCheck,
    points: 'Check rated capacity and attachment limits, keep loads stable and low while travelling, and maintain clear visibility and pedestrian separation.',
  },
  {
    title: 'Other construction machinery',
    icon: Wrench,
    points: 'Use the equipment for its intended task, check guards and safety devices, and follow the machine-specific instructions and site procedures.',
  },
];

const emergencySteps = [
  'Stop equipment operations when it is safe to do so and keep people clear of immediate hazards.',
  'Contact local emergency services where there is injury, immediate danger or urgent need for assistance.',
  'Notify the equipment owner as soon as the situation allows.',
  'Document what happened, the equipment involved and any relevant details where it is safe and appropriate.',
  'Report the incident to StrongHaul using the safety concern form below. Note: form delivery is not connected yet.',
  'Follow applicable workplace, regulatory and insurance reporting procedures.',
];

export function SafetyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" /> StrongHaul safety
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Safety Comes First.</h1>
            <p className="mt-5 text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              Safe equipment rentals begin with responsible owners, informed renters and proper equipment handling. Explore our safety guidelines to help make every rental experience safer.
            </p>
            <a href="#before-renting" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-accent">
              Review the guidelines <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/5">
            <img
              src="https://images.pexels.com/photos/35846752/pexels-photo-35846752.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Excavator working at an earthmoving site"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-primary/85 px-4 py-3 text-sm text-primary-foreground backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
              <span>Preparation, clear communication and safe operation matter at every stage.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="before-renting" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
              <BookOpenCheck className="h-6 w-6" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-accent">For renters</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Before Renting Equipment</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Take time to check the machine, site conditions and rental terms before accepting equipment.
            </p>
          </div>
          <Checklist items={renterChecks} />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <ResponsibilityPanel
            title="Safety Guidelines for Equipment Owners"
            intro="Owners are responsible for the equipment they list and for giving renters clear, accurate information."
            icon={HardHat}
            items={ownerResponsibilities}
          />
          <ResponsibilityPanel
            title="Safety Guidelines for Renters"
            intro="Renters are responsible for selecting equipment suited to the work and ensuring it is operated safely."
            icon={ShieldCheck}
            items={renterResponsibilities}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Equipment-specific considerations</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Safety depends on the machine and the job.</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            These are general reminders, not a substitute for manufacturer instructions, competent supervision or applicable safety requirements.
          </p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentGuides.map(({ title, icon: Icon, points }) => (
            <article key={title} className="border border-border bg-card p-5 transition-colors hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{points}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-16">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-destructive/10 text-destructive">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-destructive">Accidents and emergencies</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">People first. Get emergency help.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Prioritize human safety and emergency assistance. Do not delay contacting local emergency services to report an incident to StrongHaul.
            </p>
          </div>
          <ol className="space-y-3">
            {emergencySteps.map((step, index) => (
              <li key={step} className="flex gap-4 border border-border bg-card p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                <p className="pt-1 text-sm leading-6 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SafetyReportForm />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our role</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">StrongHaul’s Role and Responsibilities</h2>
          </div>
          <div className="border border-border bg-card p-5 sm:p-7">
            <p className="text-base leading-7 text-muted-foreground">
              StrongHaul is a marketplace that connects equipment owners and renters. StrongHaul does not own or operate equipment listed by independent owners and does not automatically inspect, certify or guarantee every listed machine.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Equipment owners are responsible for the accuracy of their listings and the condition of their equipment. Renters are responsible for deciding whether equipment is appropriate for their intended use and ensuring it is operated safely. Owners and renters arrange rental terms directly.
            </p>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
              This guidance is general information, not a safety certification or legal advice. Follow manufacturer instructions and applicable workplace, transport and safety requirements. The owners and renters involved remain responsible for their respective equipment and rental decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Make Every Rental a Safer Experience.</h2>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/75 sm:text-base">
              Whether you’re listing equipment or looking to rent, responsible decisions help protect everyone.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/browse">Browse Equipment</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/login?redirect=%2Fdashboard%2Flist-equipment">List Your Equipment</Link>
            </Button>
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/help">Help Center <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border border-border bg-card p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          <span className="text-sm leading-6 text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResponsibilityPanel({
  title,
  intro,
  icon: Icon,
  items,
}: {
  title: string;
  intro: string;
  icon: typeof HardHat;
  items: string[];
}) {
  return (
    <article className="border border-border bg-background p-5 sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{intro}</p>
      <ul className="mt-5 space-y-3 border-t border-border pt-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SafetyReportForm() {
  const [status, setStatus] = useState<'idle' | 'invalid' | 'validated'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('invalid');
      return;
    }

    const formData = new FormData(form);
    const email = formData.get('email')?.toString() ?? '';
    const description = formData.get('description')?.toString().trim() ?? '';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || description.length < 10) {
      setStatus('invalid');
      return;
    }

    setStatus('validated');
    form.reset();
  }

  return (
    <section id="report-safety" className="scroll-mt-20 border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-16">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warning/10 text-warning">
            <BadgeAlert className="h-6 w-6" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-accent">Report a Safety Concern</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Help identify a safety issue.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            If someone is in immediate danger, contact local emergency services first. This form is a frontend demonstration and does not send reports to StrongHaul yet.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 border border-border bg-background p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="safety-name">Full name</Label>
              <Input id="safety-name" name="name" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="safety-email">Email address</Label>
              <Input id="safety-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr]">
            <div className="space-y-2">
              <Label htmlFor="safety-type">Type of concern</Label>
              <select
                id="safety-type"
                name="type"
                defaultValue=""
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>Select a concern type</option>
                <option value="unsafe-equipment">Unsafe equipment</option>
                <option value="misleading-information">Misleading equipment information</option>
                <option value="fraudulent-listing">Suspected fraudulent listing</option>
                <option value="unsafe-practices">Unsafe rental practices</option>
                <option value="other">Other safety concern</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="safety-reference">Equipment listing reference or URL <span className="font-normal text-muted-foreground">(optional)</span></Label>
              <Input id="safety-reference" name="reference" type="url" placeholder="https://..." />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="safety-description">Description of the concern</Label>
            <textarea
              id="safety-description"
              name="description"
              rows={5}
              minLength={10}
              maxLength={2000}
              placeholder="Describe the concern and any relevant details. Do not include passwords or sensitive information."
              required
              className="flex w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm leading-6 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <p className="text-xs text-muted-foreground">10 to 2,000 characters. Do not include passwords or sensitive personal information.</p>
          </div>

          {status === 'invalid' && (
            <p role="alert" className="text-sm text-destructive">Check that all required fields are complete and your email and reference URL are valid.</p>
          )}
          {status === 'validated' && (
            <p role="status" className="flex items-start gap-2 border border-warning/30 bg-warning/10 p-3 text-sm leading-6 text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              Your details passed browser validation, but no report was sent or saved. Safety reporting needs a backend integration.
            </p>
          )}

          <Button type="submit" className="h-11 bg-primary text-primary-foreground hover:bg-primary/90">
            Submit Report <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}