'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, CheckCircle2, Wrench, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import type { EquipmentCategory } from '@/types';
import { fadeInUp, staggerContainer, transition } from '@/lib/animations';

const categories: (EquipmentCategory | 'All')[] = [
  'All',
  'Excavators',
  'Dump Trucks',
  'Logistics Trucks',
  'Bulldozers',
  'Wheel Loaders',
  'Cranes',
  'Forklifts',
  'Skid Steers',
  'Telehandlers',
];

const stats = [
  { icon: Wrench, label: 'Listings', value: '12,000+' },
  { icon: Users, label: 'Verified Owners', value: '3,500+' },
  { icon: TrendingUp, label: 'Rental Hours', value: '2.4M+' },
  { icon: MapPin, label: 'Cities Covered', value: '180+' },
];

export function HeroSection() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<string>('All');

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33870733/pexels-photo-33870733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} transition={transition}>
            <Badge
              variant="secondary"
              className="mb-5 border-accent/30 bg-accent/10 text-accent hover:bg-accent/20"
            >
              <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
              Trusted by 3,500+ equipment owners
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={transition}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Find heavy machinery &amp; trucks near you
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={transition}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-primary-foreground/80"
          >
            Rent excavators, dump trucks, semi trucks, bulldozers, and more from
            verified owners. Flexible terms, fair pricing, and insurance on
            every booking.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mx-auto mt-10 max-w-4xl rounded-2xl bg-card p-4 text-left shadow-2xl sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter city or ZIP code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 border-border pl-10 text-base"
                />
              </div>

              <div className="flex-1">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 border-border text-base">
                    <SelectValue placeholder="Equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat === 'All' ? 'All Equipment' : cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                size="lg"
                className="h-12 justify-center bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90 sm:px-10"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 px-1">
              <span className="text-xs font-medium text-muted-foreground">
                Popular:
              </span>
              {['Excavators', 'Dump Trucks', 'Logistics Trucks', 'Skid Steers'].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setCategory(tag as EquipmentCategory)}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0.4)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={transition}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
