'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Star,
  SlidersHorizontal,
  X,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { EquipmentCategory, Listing } from '@/types';
import { allListings } from '@/lib/listings';
import { fadeInUp, fadeInDown, staggerContainer, transition } from '@/lib/animations';

const allCategories: EquipmentCategory[] = [
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

const statusOptions = [
  { label: 'Available', value: 'available' as const },
  { label: 'Rented', value: 'rented' as const },
];

export default function BrowsePage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<EquipmentCategory[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['available']);
  const [maxDailyRate, setMaxDailyRate] = useState(2500);
  const [sortBy, setSortBy] = useState('distance');

  const filtered = useMemo(() => {
    let results = allListings.filter((l) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !l.title.toLowerCase().includes(q) &&
          !l.manufacturer.toLowerCase().includes(q) &&
          !l.location.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(l.category))
        return false;
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(l.status))
        return false;
      if (l.dailyRate > maxDailyRate) return false;
      return true;
    });

    results = [...results].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.dailyRate - b.dailyRate;
        case 'price-high':
          return b.dailyRate - a.dailyRate;
        case 'rating':
          return b.rating - a.rating;
        case 'distance':
        default:
          return (a.distanceMiles ?? 999) - (b.distanceMiles ?? 999);
      }
    });

    return results;
  }, [searchQuery, selectedCategories, selectedStatuses, maxDailyRate, sortBy]);

  const toggleCategory = (cat: EquipmentCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const clearAll = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedStatuses(['available']);
    setMaxDailyRate(2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Browse Equipment
        </h1>
        <p className="mt-1 text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'listing' : 'listings'} available
        </p>
      </div>

      {/* Search + filter toggle */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, manufacturer, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters((v) => !v)}
          className="h-11 shrink-0"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="h-11 w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distance">Nearest first</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filter panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInDown}
            transition={transition}
            className="mb-6 overflow-hidden rounded-xl border border-border bg-card p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Filter Results</h3>
              <button
                onClick={clearAll}
                className="text-xs font-medium text-accent hover:underline"
              >
                Clear all
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Categories */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Category
                </h4>
                <div className="space-y-2">
                  {allCategories.map((cat) => (
                    <div key={cat} className="flex items-center gap-2">
                      <Checkbox
                        id={`cat-${cat}`}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                      <label
                        htmlFor={`cat-${cat}`}
                        className="cursor-pointer text-sm text-foreground"
                      >
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status
                </h4>
                <div className="space-y-2">
                  {statusOptions.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-2">
                      <Checkbox
                        id={`status-${opt.value}`}
                        checked={selectedStatuses.includes(opt.value)}
                        onCheckedChange={() => toggleStatus(opt.value)}
                      />
                      <label
                        htmlFor={`status-${opt.value}`}
                        className="cursor-pointer text-sm text-foreground"
                      >
                        {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Max daily rate */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Max Daily Rate
                </h4>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">
                    ${maxDailyRate}/day
                  </span>
                  <Slider
                    value={[maxDailyRate]}
                    onValueChange={(v) => setMaxDailyRate(v[0])}
                    min={100}
                    max={2500}
                    step={50}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$100</span>
                    <span>$2,500</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active filter chips */}
      {(selectedCategories.length > 0 || searchQuery) && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              &ldquo;{searchQuery}&rdquo;
              <button onClick={() => setSearchQuery('')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedCategories.map((cat) => (
            <Badge key={cat} variant="secondary" className="gap-1">
              {cat}
              <button onClick={() => toggleCategory(cat)}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Results grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20">
          <p className="text-lg font-medium text-foreground">No results found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your filters or search query.
          </p>
          <Button variant="outline" onClick={clearAll} className="mt-4">
            Clear all filters
          </Button>
        </div>
      ) : (
        <motion.div
          key={`${searchQuery}-${selectedCategories.join()}-${selectedStatuses.join()}-${maxDailyRate}-${sortBy}`}
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((listing) => (
            <BrowseCard key={listing.id} listing={listing} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

function BrowseCard({ listing }: { listing: Listing }) {
  return (
    <motion.article
      variants={fadeInUp}
      transition={transition}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {listing.status === 'available' ? (
          <Badge className="absolute left-3 top-3 bg-success text-success-foreground hover:bg-success/90">
            <span className="mr-1.5 h-2 w-2 rounded-full bg-success-foreground" />
            Available
          </Badge>
        ) : (
          <Badge className="absolute left-3 top-3 bg-muted text-muted-foreground hover:bg-muted/80">
            Rented
          </Badge>
        )}
        {listing.distanceMiles != null && (
          <div className="absolute right-3 top-3 rounded-md bg-primary/80 px-2 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
            {listing.distanceMiles} mi
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="font-medium text-accent">{listing.category}</span>
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
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Details
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
