'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogArticles, blogCategories, featuredArticle } from '@/lib/blog';

const categories = ['All Articles', ...blogCategories] as const;

export function BlogHome() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All Articles');
  const featuredVisible = activeCategory === 'All Articles' || activeCategory === featuredArticle.category;
  const filteredArticles = blogArticles.filter((article) =>
    activeCategory === 'All Articles' || article.category === activeCategory
  );
  const latestArticles = filteredArticles.filter((article) => article.slug !== featuredArticle.slug);

  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Ideas for getting the work done</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">StrongHaul Blog</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Insights, guides and updates from the world of equipment rental, construction and transport.
            </p>
          </div>
        </div>
      </section>

      {featuredVisible && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group grid overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-64 overflow-hidden bg-secondary sm:min-h-80 lg:min-h-[420px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <Badge className="absolute left-5 top-5 bg-accent text-accent-foreground">Featured article</Badge>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-muted-foreground">
                <span className="font-semibold text-accent">{featuredArticle.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featuredArticle.publishedAt}>{formatDate(featuredArticle.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.readingMinutes} min read</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl lg:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{featuredArticle.description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">The latest</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Latest Articles</h2>
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <nav aria-label="Filter articles by category" className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 shrink-0 rounded-md border px-4 text-sm font-medium transition-colors ${active ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary'}`}
              >
                {category}
              </button>
            );
          })}
        </nav>

        {latestArticles.length > 0 ? (
          <div className="mt-7 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <article key={article.slug} className="group flex min-w-0 flex-col">
                <Link href={`/blog/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-lg border border-border bg-secondary">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground">
                  <span className="font-semibold text-accent">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingMinutes} min</span>
                </div>
                <h3 className="mt-2 text-xl font-bold leading-snug text-primary">
                  <Link href={`/blog/${article.slug}`} className="transition-colors hover:text-accent">{article.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
                <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-7 rounded-lg border border-dashed border-border px-5 py-10 text-center text-sm text-muted-foreground">
            {filteredArticles.length > 0
              ? 'The featured article is the only article in this category so far.'
              : 'No articles in this category yet.'}
          </p>
        )}
      </section>

      <NewsletterSection />
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('valid');
  }

  return (
    <section className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent"><Mail className="h-4 w-4" /> StrongHaul newsletter</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">Stay Informed. Stay Ahead.</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Get useful equipment rental insights, industry updates and practical business tips delivered to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(event) => { setEmail(event.target.value); setStatus('idle'); }}
              placeholder="you@example.com"
              aria-label="Email address for newsletter"
              aria-describedby="newsletter-status"
              required
              className="h-12 bg-card"
            />
            <Button type="submit" className="h-12 shrink-0 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p id="newsletter-status" role="status" className={`mt-2 min-h-5 text-sm ${status === 'invalid' ? 'text-destructive' : status === 'valid' ? 'text-success' : 'text-muted-foreground'}`}>
            {status === 'invalid' && 'Enter a valid email address.'}
            {status === 'valid' && <><Check className="mr-1 inline h-4 w-4" /> Email validated. Newsletter sign-up is not connected yet.</>}
            {status === 'idle' && 'Frontend demo only. Your email will not be sent or stored.'}
          </p>
        </form>
      </div>
    </section>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GH', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}