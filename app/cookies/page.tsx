import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/legal/cookie-policy-page';

export const metadata: Metadata = {
  title: 'Cookie Policy | StrongHaul',
  description:
    'Learn about cookies and similar technologies observed on the StrongHaul frontend and how to manage them in your browser.',
  openGraph: {
    title: 'Cookie Policy | StrongHaul',
    description: 'Current cookie information for the StrongHaul equipment rental marketplace.',
    type: 'website',
  },
};

export default function CookiePolicyRoute() {
  return <CookiePolicyPage />;
}