import type { Metadata } from 'next';
import { HelpCenter } from '@/components/help/help-center';

export const metadata: Metadata = {
  title: 'Help Center | StrongHaul Equipment Marketplace',
  description:
    'Find answers about browsing equipment, listing machinery, contacting equipment owners and using the StrongHaul marketplace.',
  openGraph: {
    title: 'StrongHaul Help Center',
    description: 'Learn how the equipment rental marketplace works and find answers to common questions.',
    type: 'website',
  },
};

export default function HelpPage() {
  return <HelpCenter />;
}