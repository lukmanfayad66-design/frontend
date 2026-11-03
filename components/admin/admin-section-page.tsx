import type { ReactNode } from 'react';

type AdminSectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function AdminSectionPage({ eyebrow, title, description, children }: AdminSectionPageProps) {
  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="border-b border-border pb-6">
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
      </header>
      {children}
    </div>
  );
}
