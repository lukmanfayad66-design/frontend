'use client';

import { useDeferredValue, useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CircleHelp,
  Compass,
  HardHat,
  LifeBuoy,
  LoaderCircle,
  Search,
  ShieldCheck,
  Truck,
  Users,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { helpCategories, helpFaqs } from '@/lib/help-center';

const categoryIcons = [Compass, Search, ClipboardList, CalendarDays, HardHat, Users, ShieldCheck, LifeBuoy];

export function HelpCenter() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const isSearching = deferredQuery !== query.trim().toLowerCase();

  const visibleCategories = helpCategories.filter((category) => {
    if (!deferredQuery) return true;
    return [category.title, category.description, ...category.topics]
      .some((value) => value.toLowerCase().includes(deferredQuery));
  });

  const visibleFaqs = helpFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.categoryId === selectedCategory;
    const matchesQuery = !deferredQuery ||
      `${faq.question} ${faq.answer}`.toLowerCase().includes(deferredQuery);
    return matchesCategory && matchesQuery;
  });

  function chooseCategory(categoryId: string) {
    setSelectedCategory(categoryId);
  }

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div className="absolute -right-20 top-0 h-full w-[55%] border-l border-primary-foreground/70" />
          <div className="absolute right-0 top-1/2 h-px w-[55%] -rotate-12 bg-primary-foreground" />
          <div className="absolute right-0 top-1/2 h-px w-[55%] rotate-12 bg-primary-foreground" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" /> StrongHaul Help Center
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              How can we help you?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
              Find answers, learn how StrongHaul works and get the support you need to make equipment rentals easier.
            </p>
          </div>

          <div className="mt-8 max-w-3xl">
            <label htmlFor="help-search" className="sr-only">Search help topics and frequently asked questions</label>
            <div className="relative flex rounded-lg bg-card p-1.5 shadow-lg">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="help-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search topics, questions or keywords"
                className="h-12 border-0 bg-transparent pl-11 pr-11 text-foreground shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-describedby="help-search-status"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <p id="help-search-status" className="mt-2 min-h-5 text-sm text-primary-foreground/65" aria-live="polite">
              {isSearching ? <><LoaderCircle className="mr-1.5 inline h-3.5 w-3.5 animate-spin" /> Searching help content</> : `${visibleFaqs.length} ${visibleFaqs.length === 1 ? 'answer' : 'answers'}${deferredQuery ? ' match your search' : ' available'}`}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Browse by topic</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Help topics</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground">
            Select a topic to see related answers. You can browse listings without an account; listing equipment requires an owner account.
          </p>
        </div>

        {visibleCategories.length > 0 ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleCategories.map((category) => {
              const Icon = categoryIcons[helpCategories.findIndex((item) => item.id === category.id)];
              const active = selectedCategory === category.id;

              return (
                <a
                  key={category.id}
                  href="#faqs"
                  onClick={() => chooseCategory(category.id)}
                  className={`group flex h-full flex-col border bg-card p-5 transition-colors ${active ? 'border-accent ring-1 ring-accent' : 'border-border hover:border-primary/30'}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-border pt-3">
                    {category.topics.slice(0, 3).map((topic) => (
                      <li key={topic} className="text-xs leading-5 text-muted-foreground">{topic}</li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary group-hover:text-accent">
                    Explore answers <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="mt-7 border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground">
            No help topics match “{query}”. Try another search.
          </div>
        )}
      </section>

      <section id="faqs" className="scroll-mt-20 border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Frequently asked questions</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Clear answers, less guesswork.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              StrongHaul connects renters and equipment owners. They agree directly on availability, price and rental arrangements.
            </p>
            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="mt-5 text-sm font-semibold text-accent hover:underline"
              >
                Show all questions
              </button>
            )}
            <a href="#contact-support" className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
              Still need help? <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                aria-pressed={selectedCategory === 'all'}
                className={`min-h-9 rounded-md border px-3 text-xs font-semibold transition-colors ${selectedCategory === 'all' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:text-primary'}`}
              >
                All questions
              </button>
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={selectedCategory === category.id}
                  className={`min-h-9 rounded-md border px-3 text-xs font-semibold transition-colors ${selectedCategory === category.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:text-primary'}`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {visibleFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="border-t border-border">
                {visibleFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${faq.categoryId}-${index}`} className="border-border">
                    <AccordionTrigger className="gap-4 py-5 text-left text-sm font-semibold text-primary hover:no-underline sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-3xl text-sm leading-7 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="border border-dashed border-border px-6 py-10 text-center">
                <CircleHelp className="mx-auto h-7 w-7 text-muted-foreground" />
                <p className="mt-3 font-semibold text-primary">No matching answers</p>
                <p className="mt-1 text-sm text-muted-foreground">Try a different search or select another topic.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSupport />

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-card text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-primary">Ready to explore the marketplace?</h2>
              <p className="mt-1 text-sm text-muted-foreground">Browse equipment and contact owners directly.</p>
            </div>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/browse">Browse Equipment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ContactSupport() {
  const [status, setStatus] = useState<'idle' | 'invalid' | 'validated'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('invalid');
      return;
    }

    const email = new FormData(form).get('email')?.toString() ?? '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('invalid');
      return;
    }

    setStatus('validated');
    form.reset();
  }

  return (
    <section id="contact-support" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact Support</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Tell us what you need help with.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Share the details below to check your request. Support form delivery is not connected yet, so nothing you enter will be sent or saved.
          </p>
          <div className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">
            <Truck className="mt-1 h-4 w-4 shrink-0 text-accent" />
            For rental price, availability or booking questions, contact the equipment owner directly through the listing.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 border border-border bg-card p-5 sm:p-7" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="support-name">Name</Label>
              <Input id="support-name" name="name" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-email">Email address</Label>
              <Input id="support-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr]">
            <div className="space-y-2">
              <Label htmlFor="support-subject">Subject</Label>
              <Input id="support-subject" name="subject" placeholder="What do you need help with?" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-category">Category</Label>
              <select
                id="support-category"
                name="category"
                defaultValue=""
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>Select a category</option>
                <option value="account">Account and security</option>
                <option value="equipment">Equipment listing</option>
                <option value="rental">Finding or renting equipment</option>
                <option value="technical">Technical issue</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="support-message">Message</Label>
            <textarea
              id="support-message"
              name="message"
              rows={5}
              minLength={10}
              maxLength={2000}
              placeholder="Describe the issue or question. Please do not include passwords or sensitive information."
              required
              className="flex w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm leading-6 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <p className="text-xs text-muted-foreground">10 to 2,000 characters. Do not include passwords or payment details.</p>
          </div>

          {status === 'invalid' && (
            <p role="alert" className="text-sm text-destructive">Check that all required fields are complete and your email address is valid.</p>
          )}
          {status === 'validated' && (
            <p role="status" className="flex items-start gap-2 border border-warning/30 bg-warning/10 p-3 text-sm leading-6 text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              Your details passed browser validation, but no request was sent or saved. Support submission needs a backend integration.
            </p>
          )}

          <Button type="submit" className="h-11 bg-primary text-primary-foreground hover:bg-primary/90">
            Submit Support Request <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}