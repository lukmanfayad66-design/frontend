import { ShieldCheck } from 'lucide-react';
import { AdminSectionPage } from '@/components/admin/admin-section-page';

export default function TrustSafetyPage() {
  return <AdminSectionPage eyebrow="Marketplace protection" title="Trust & safety" description="Track the checks that help keep StrongHaul listings and accounts reliable.">
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success"><ShieldCheck className="h-6 w-6" /></div><h2 className="mt-5 text-xl font-bold text-primary">Safety queue is clear</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Identity, document, and listing-quality checks will appear here as the admin workflow is connected.</p></div>
  </AdminSectionPage>;
}
