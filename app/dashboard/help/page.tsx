'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const helpArticles = [
  {
    category: 'Account',
    title: 'How do I reset my password?',
    content: 'Use the sign in screen to choose Reset Password, then follow the secure reset instructions sent to your email.',
  },
  {
    category: 'Equipment listing',
    title: 'What information should I include in my listing?',
    content: 'Add the equipment name, category, availability, location, daily rate, photo, and relevant specifications so renters can evaluate the machine quickly.',
  },
  {
    category: 'Subscription',
    title: 'How many listings can I have on each plan?',
    content: 'Basic allows one active listing, Professional allows up to five, and Business allows up to twenty. You need to upgrade or deactivate listings if you exceed the limit.',
  },
  {
    category: 'General',
    title: 'Is StrongHaul free for renters?',
    content: 'Yes. Browsing listings and contacting equipment owners remains free for renters.',
  },
  {
    category: 'Equipment listing',
    title: 'Can I edit an approved listing?',
    content: 'Yes. Approved listings can be updated in your dashboard before the listing is removed or deactivated.',
  },
  {
    category: 'Account',
    title: 'What happens if my subscription expires?',
    content: 'Your listings are not automatically deleted, but you may need to upgrade or deactivate equipment before adding more beyond your current plan limit.',
  },
];

export default function HelpPage() {
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return helpArticles;
    const q = query.toLowerCase();
    return helpArticles.filter((article) => article.title.toLowerCase().includes(q) || article.content.toLowerCase().includes(q) || article.category.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-muted-foreground">Help center</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Find answers</h1>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the Help Center"
            aria-label="Search help articles"
            className="h-12 pl-11"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground md:col-span-2 xl:col-span-3">
            No help articles match your search yet.
          </div>
        ) : (
          filteredArticles.map((article) => (
            <article key={article.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</p>
              <h2 className="mt-3 text-lg font-bold text-primary">{article.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{article.content}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
