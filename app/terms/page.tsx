import type { Metadata } from 'next';
import { TermsPage } from '@/components/legal/terms-page';

export const metadata: Metadata = {
  title: 'Terms of Service | StrongHaul',
  description:
    'Read the terms governing access to and use of the StrongHaul equipment rental marketplace.',
  openGraph: {
    title: 'Terms of Service | StrongHaul',
    description: 'Marketplace terms for StrongHaul equipment owners and renters.',
    type: 'website',
  },
};

export default function TermsRoute() {
  return <TermsPage />;
}