import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stronghaul — Rent Heavy Machinery & Trucks Near You',
  description:
    'Stronghaul is the marketplace for heavy machinery and commercial trucks. Find excavators, dump trucks, bulldozers, and more available for rent near you.',
  openGraph: {
    title: 'Stronghaul — Rent Heavy Machinery & Trucks Near You',
    description:
      'Find and rent heavy machinery and commercial trucks from trusted owners near you.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
