'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, transition } from '@/lib/animations';

const perks = [
  { icon: ShieldCheck, label: 'Insured bookings' },
  { icon: CheckCircle2, label: 'No listing fees' },
  { icon: CalendarCheck, label: 'Flexible scheduling' },
];

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-success/15 blur-3xl" />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              transition={transition}
              className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
            >
              Have idle equipment? Start earning today.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={transition}
              className="mt-4 text-balance text-lg text-primary-foreground/80"
            >
              List your machinery or trucks in minutes. Set your own rates,
              manage your calendar, and get paid securely. Stronghaul handles
              the rest.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={transition}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90"
              >
                List Your Equipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={transition}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70"
            >
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-center gap-2">
                  <perk.icon className="h-4 w-4 text-accent" />
                  {perk.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
