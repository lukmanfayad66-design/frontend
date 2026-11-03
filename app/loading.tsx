import { LoaderCircle, Truck } from 'lucide-react';

export default function Loading() {
  return (
    <main
      className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent">
          <Truck className="h-7 w-7" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <LoaderCircle className="h-5 w-5 animate-spin text-accent" aria-hidden="true" />
          <span>Loading StrongHaul...</span>
        </div>
      </div>
    </main>
  );
}
