import { AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AdminSectionPage } from '@/components/admin/admin-section-page';

const alerts = ['Three equipment photos need manual review', 'One owner verification is missing a document', 'Search indexing completed successfully'];

export default function PlatformAlertsPage() {
  return <AdminSectionPage eyebrow="System monitoring" title="Platform alerts" description="Review marketplace and operational updates that may require an administrator’s attention.">
    <div className="space-y-3">{alerts.map((alert, index) => <article key={alert} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/10 text-warning"><AlertTriangle className="h-4 w-4" /></div><p className="font-semibold text-primary">{alert}</p></div><Badge className={index === 2 ? 'bg-success/10 text-success hover:bg-success/10' : 'bg-warning/10 text-warning hover:bg-warning/10'}>{index === 2 ? 'Resolved' : 'Open'}</Badge></article>)}</div>
  </AdminSectionPage>;
}
