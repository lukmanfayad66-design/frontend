import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/legal/privacy-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | StrongHaul',
  description:
    'Learn what information the StrongHaul frontend currently handles, how demo account data is stored, and what privacy practices require confirmation before launch.',
  openGraph: {
    title: 'Privacy Policy | StrongHaul',
    description: 'Privacy information for StrongHaul marketplace users.',
    type: 'website',
  },
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}