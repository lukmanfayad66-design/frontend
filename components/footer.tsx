import Link from 'next/link';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'Marketplace',
    links: [
      { label: 'Browse Equipment', href: '/browse' },
      { label: 'List Your Equipment', href: '/list' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Categories', href: '/categories' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety', href: '/safety' },
      { label: 'Insurance', href: '/insurance' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Stronghaul
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              The marketplace for heavy machinery and commercial trucks. Find
              reliable equipment near you, rent with confidence.
            </p>
            <div className="mt-5 space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@stronghaul.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>1-800-HAUL-NOW</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Denver, Colorado</span>
              </div>
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-primary-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Stronghaul. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-accent">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
