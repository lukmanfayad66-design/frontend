import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GanttChartSquare,
  Handshake,
  MapPinned,
  Search,
  Tractor,
  Users,
  Wrench,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const featureBlocks = [
  {
    title: 'Equipment Discovery',
    description:
      'Help individuals and businesses discover trucks and heavy machinery available for rent.',
    icon: Search,
    image:
      'https://images.unsplash.com/photo-1686246668933-7425658394b0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Owner Visibility',
    description:
      'Give equipment owners a platform to showcase their equipment and reach potential renters.',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1609867271967-a82f85c48531?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Direct Connections',
    description:
      'Make it easier for renters to connect directly with equipment owners.',
    icon: Handshake,
    image:
      'https://images.unsplash.com/photo-1686246668933-7425658394b0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Rental Opportunities',
    description:
      'Help people find equipment options that match their project requirements.',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1640723559855-c27b649ad231?q=80&w=1200&auto=format&fit=crop',
  },
];

const steps = [
  'Equipment owners create an account and list their equipment.',
  'People looking for equipment browse available listings.',
  'Interested renters contact equipment owners directly.',
  'Owners and renters discuss pricing, availability and rental arrangements.',
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/80 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge className="mb-5 border-accent/30 bg-accent/10 text-accent hover:bg-accent/20">
                About StrongHaul
              </Badge>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Connecting Equipment Owners with People Looking for Equipment.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                StrongHaul makes it easier for equipment owners to showcase their trucks and heavy machinery while helping individuals and businesses discover equipment available for rent.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/browse">
                    Browse Equipment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login?redirect=%2Fdashboard%2Flist-equipment">
                    List Your Equipment
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 to-primary/5 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/5">
                <img
                  src="https://images.unsplash.com/photo-1751054619908-65d27a503ce8?q=80&w=1400&auto=format&fit=crop"
                  alt="Excavator loading dump truck at a construction site"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lg shadow-primary/5">
            <img
              src="https://images.unsplash.com/photo-1609867271967-a82f85c48531?q=80&w=1200&auto=format&fit=crop"
              alt="Construction site with crane"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <Badge variant="secondary" className="mb-4 bg-secondary text-primary">
              Our Story
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Finding suitable trucks and heavy equipment for a project can be challenging. At the same time, equipment owners may have machinery available for rent but limited ways to reach potential customers.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              StrongHaul was created to bridge this gap by providing a marketplace where equipment owners can showcase their equipment and people looking for machinery can discover available options and connect directly with owners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 border-accent/30 bg-accent/10 text-accent hover:bg-accent/20">
              Our Mission
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
              To simplify equipment rental by making it easier for individuals and businesses to discover equipment and connect with the people who own it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary">Our Vision</h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              To build a trusted and accessible marketplace that makes discovering and connecting with equipment owners easier across different markets.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-secondary/60 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPinned className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary">Where It Begins</h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              StrongHaul begins its journey in Ghana. We are building a marketplace with the ambition to make equipment discovery and rental connections easier as the platform develops and reaches more markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-background text-primary">
              What We Do
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What We Do</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featureBlocks.map(({ title, description, icon: Icon, image }) => (
              <div key={title} className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
                <img src={image} alt={title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary">
            How it works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How StrongHaul Works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {index + 1}
              </div>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge className="mb-5 border-accent/30 bg-accent/10 text-accent hover:bg-accent/20">
                Built for clarity
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Find the Equipment You Need. Connect with the Right Owner.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/80">
                Whether you own equipment or are looking for machinery for your next project, StrongHaul makes it easier to connect.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/browse">
                    Browse Equipment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link href="/login?redirect=%2Fdashboard%2Flist-equipment">
                    List Your Equipment
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary-foreground/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <Search className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm font-medium text-primary-foreground/80">Browse listings</p>
                  <p className="mt-2 text-2xl font-bold">Fast</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <Handshake className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm font-medium text-primary-foreground/80">Direct contact</p>
                  <p className="mt-2 text-2xl font-bold">Simple</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <Tractor className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm font-medium text-primary-foreground/80">Owner marketplace</p>
                  <p className="mt-2 text-2xl font-bold">Trusted</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm font-medium text-primary-foreground/80">Rental clarity</p>
                  <p className="mt-2 text-2xl font-bold">Clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
