'use client';

import { motion } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  FileText,
  Handshake,
} from 'lucide-react';
import { fadeInUp, staggerContainer, transition } from '@/lib/animations';

const steps = [
  {
    icon: Search,
    title: 'Search Your Area',
    description:
      'Enter your location and the type of equipment you need. Filter by distance, price, and availability.',
  },
  {
    icon: ShieldCheck,
    title: 'Browse Verified Listings',
    description:
      'Every listing comes with verified owner credentials, detailed specs, photos, and honest reviews.',
  },
  {
    icon: FileText,
    title: 'Review & Request',
    description:
      'Choose the right machine for your job, review the terms, and send a rental request directly to the owner.',
  },
  {
    icon: Handshake,
    title: 'Sign & Get to Work',
    description:
      'Finalize your agreement, arrange pickup or delivery, and get your project moving with confidence.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            transition={transition}
            className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Get Equipment on Site in 4 Steps
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={transition}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From search to signed contract, Stronghaul makes heavy equipment rental faster and more transparent than ever.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-5xl gap-x-12 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:mt-20 lg:gap-x-24 lg:gap-y-20"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              transition={transition}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-7 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-primary text-accent shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <step.icon className="h-10 w-10" strokeWidth={2.25} />
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow-sm">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-primary">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
