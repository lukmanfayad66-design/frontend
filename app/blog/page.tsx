import type { Metadata } from 'next';
import { BlogHome } from '@/components/blog/blog-home';

export const metadata: Metadata = {
  title: 'StrongHaul Blog | Equipment Rental, Construction & Transport Guides',
  description:
    'Read practical guides on equipment rental, heavy machinery, construction, transport and equipment ownership from StrongHaul.',
  openGraph: {
    title: 'StrongHaul Blog',
    description: 'Insights, guides and updates from the world of equipment rental, construction and transport.',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogHome />;
}