import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">Page not found</h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you are looking for may have moved, or it may not be available in this demo build.
      </p>
      <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
