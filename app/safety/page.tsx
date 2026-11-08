import type { Metadata } from 'next';
import { SafetyPage } from '@/components/safety/safety-page';

export const metadata: Metadata = {
  title: 'Equipment Rental Safety | StrongHaul',
  description:
    'Review practical equipment rental safety guidance for owners and renters using the StrongHaul marketplace.',
  openGraph: {
    title: 'Safety Comes First | StrongHaul',
    description: 'Responsible equipment rental guidance for StrongHaul owners and renters.',
    type: 'website',
  },
};

export default function SafetyRoute() {
  return <SafetyPage />;
}