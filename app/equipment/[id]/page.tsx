'use client';

import { useState, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Star,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CalendarCheck,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { allListings, galleryImages, getListingById } from '@/lib/listings';
import { fadeInUp, fadeIn, staggerContainer, transition } from '@/lib/animations';

export default function EquipmentDetailPage() {
  const params = useParams<{ id: string }>();
  const listing = getListingById(params.id);

  const [currentImage, setCurrentImage] = useState(0);

  const images = useMemo(() => {
    if (!listing) return [];
    return galleryImages[listing.id] ?? [listing.imageUrl];
  }, [listing]);

  if (!listing) return notFound();

  const nextImage = () => setCurrentImage((i) => (i + 1) % images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + images.length) % images.length);

  const related = allListings
    .filter((l) => l.category === listing.category && l.id !== listing.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground">
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to browse
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={listing.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary/70 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                  {currentImage + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    idx === currentImage
                      ? 'border-accent'
                      : 'border-border hover:border-muted-foreground'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${listing.title} - ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} transition={transition}>
            <div className="mb-2 flex items-center gap-2">
              <Badge className="bg-success text-success-foreground hover:bg-success/90">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-success-foreground" />
                {listing.status === 'available' ? 'Available' : 'Rented'}
              </Badge>
              <span className="text-sm font-medium text-accent">
                {listing.category}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={transition}
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {listing.title}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium text-foreground">
                {listing.rating.toFixed(1)}
              </span>
              <span>({listing.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {listing.location}
              {listing.distanceMiles != null && ` - ${listing.distanceMiles} mi away`}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-5 flex items-baseline gap-2"
          >
            <span className="text-3xl font-bold text-foreground">
              ${listing.dailyRate}
            </span>
            <span className="text-muted-foreground">/day</span>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <span className="text-lg font-semibold text-foreground">
              ${listing.hourlyRate}
            </span>
            <span className="text-muted-foreground">/hr</span>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <span className="text-lg font-semibold text-foreground">
              ${listing.weeklyRate}
            </span>
            <span className="text-muted-foreground">/week</span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            transition={transition}
            className="mt-5 text-sm leading-relaxed text-muted-foreground"
          >
            {listing.description}
          </motion.p>

          {/* Specs */}
          <motion.div variants={fadeInUp} transition={transition} className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Specifications</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(listing.specs).map(([key, value]) => (
                <div key={key} className="rounded-lg border border-border bg-card px-3 py-2">
                  <p className="text-xs text-muted-foreground">{key}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Owner */}
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {listing.ownerName.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {listing.ownerName}
              </p>
              <p className="text-xs text-muted-foreground">Verified owner</p>
            </div>
            <Button variant="outline" size="sm">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Contact
            </Button>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Request Delivery
            </Button>
          </motion.div>

          {/* Trust */}
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-success" />
              Insured booking
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Free cancellation up to 48 hrs
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Related equipment */}
      {related.length > 0 && (
        <div className="mt-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Similar equipment
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {related.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                transition={transition}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        ${item.dailyRate}
                      </span>
                      <span className="text-sm text-muted-foreground">/day</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
