import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogArticles, getBlogArticle } from '@/lib/blog';

type ArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getBlogArticle(params.slug);
  if (!article) return { title: 'Article Not Found | StrongHaul Blog' };

  return {
    title: `${article.title} | StrongHaul Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default function BlogArticlePage({ params }: ArticlePageProps) {
  const article = getBlogArticle(params.slug);
  if (!article) notFound();

  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3);
  const articleUrl = `https://stronghaul.com/blog/${article.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@type': 'Organization', name: 'StrongHaul' },
    mainEntityOfPage: articleUrl,
  };

  return (
    <div className="bg-background text-foreground">
      <article>
        <header className="mx-auto max-w-4xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[18rem] truncate text-primary" aria-current="page">{article.title}</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="bg-accent/10 text-accent">{article.category}</Badge>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span className="flex items-center gap-1"><Clock3 className="h-4 w-4" /> {article.readingMinutes} min read</span>
          </div>
          <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{article.introduction}</p>
          <p className="mt-5 text-sm text-muted-foreground">By <span className="font-semibold text-primary">{article.author}</span></p>
        </header>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <figure className="overflow-hidden rounded-xl border border-border bg-secondary">
            <img src={article.image} alt={article.imageAlt} className="max-h-[560px] min-h-64 w-full object-cover" />
          </figure>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_250px] lg:px-8 lg:py-16">
          <div className="min-w-0">
            {article.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`} className="mb-10 scroll-mt-24 last:mb-0">
                <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-8 text-muted-foreground">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <aside className="h-fit rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">In this article</h2>
            <ol className="mt-4 space-y-3">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`} className="text-sm leading-5 text-muted-foreground hover:text-accent">{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </article>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Need equipment for your next project?</h2>
            <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
              Explore equipment owners offering machinery and trucks for rent through StrongHaul.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/browse">Explore Equipment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Keep reading</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Related articles</h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-accent sm:flex">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((related) => (
            <article key={related.slug} className="overflow-hidden rounded-lg border border-border bg-card">
              <Link href={`/blog/${related.slug}`} className="block aspect-[16/10] overflow-hidden bg-secondary">
                <img src={related.image} alt={related.imageAlt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
              </Link>
              <div className="p-5">
                <p className="text-xs font-semibold text-accent">{related.category}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-primary">
                  <Link href={`/blog/${related.slug}`} className="hover:text-accent">{related.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}