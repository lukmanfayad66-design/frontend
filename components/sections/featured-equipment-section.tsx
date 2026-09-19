'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Listing } from '@/types';
import { fadeInUp, staggerContainer, transition } from '@/lib/animations';

type Props = {
  listings: Listing[];
};

export function FeaturedEquipmentSection({ listings }: Props) {
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <motion.div variants={fadeInUp} transition={transition}>
            <Badge variant="secondary" className="mb-3 text-accent">
              Featured Equipment
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Available near you right now
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} transition={transition}>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View all listings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {listings.map((listing) => (
            <motion.article
              key={listing.id}
              variants={fadeInUp}
              transition={transition}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3">
                  <Badge className="bg-success text-success-foreground hover:bg-success/90">
                    <span className="mr-1.5 h-2 w-2 rounded-full bg-success-foreground" />
                    Available
                  </Badge>
                </div>
                {listing.distanceMiles != null && (
                  <div className="absolute right-3 top-3 rounded-md bg-primary/80 px-2 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    {listing.distanceMiles} mi
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="font-medium text-accent">
                    {listing.category}
                  </span>
                  <span>&middot;</span>
                  <span>
                    {listing.year} {listing.manufacturer}
                  </span>
                </div>
                <h3 className="line-clamp-1 text-base font-semibold text-foreground">
                  {listing.title}
                </h3>

                <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {listing.location}
                </div>

                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {listing.rating.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({listing.reviewsCount})
                  </span>
                </div>

                <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
                  <div>
                    <span className="text-lg font-bold text-foreground">
                      ${listing.dailyRate}
                    </span>
                    <span className="text-sm text-muted-foreground">/day</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    View
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
