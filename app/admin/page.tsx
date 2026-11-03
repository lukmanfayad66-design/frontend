import { AlertTriangle, ArrowUpRight, Building2, ClipboardCheck, Clock3, Headset, ShieldCheck, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const reviewQueue = [
  { equipment: 'CAT 320 Excavator', owner: 'Kwame Construction', submitted: '12 min ago', status: 'Needs review' },
  { equipment: 'Volvo FMX Tipper Truck', owner: 'Accra Haulage', submitted: '38 min ago', status: 'Needs review' },
  { equipment: 'JCB 3CX Backhoe Loader', owner: 'Dapaah Plant Hire', submitted: '1 hr ago', status: 'Needs documents' },
];

const activity = [
  { label: 'New owner account verified', detail: 'Kwame Construction passed verification.', time: '8 min ago', icon: ShieldCheck },
  { label: 'Listing submitted for review', detail: 'CAT 320 Excavator is awaiting moderation.', time: '12 min ago', icon: ClipboardCheck },
  { label: 'Platform alert resolved', detail: 'Image review queue is processing normally.', time: '1 hr ago', icon: AlertTriangle },
];

const supportRequests = [
  { name: 'Ama Boateng', request: 'Unable to upload equipment photos', time: '6 min ago', priority: 'High' },
  { name: 'Joseph Mensah', request: 'Needs help verifying an owner account', time: '24 min ago', priority: 'Normal' },
  { name: 'Akosua Logistics', request: 'Question about a rejected listing', time: '42 min ago', priority: 'Normal' },
];

export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-7 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Platform administration</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Admin Overview</h1>
          <p className="mt-2 text-sm text-muted-foreground">Monitor marketplace activity and keep listings ready for renters.</p>
        </div>
        <Badge className="w-fit bg-success/10 px-3 py-1.5 text-success hover:bg-success/10">All systems operational</Badge>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Listings awaiting review', value: '14', detail: '4 added today', icon: ClipboardCheck, tone: 'text-accent bg-accent/10' },
          { label: 'Verified equipment owners', value: '486', detail: '12 this week', icon: Building2, tone: 'text-success bg-success/10' },
          { label: 'Active marketplace listings', value: '1,248', detail: '93% currently available', icon: ArrowUpRight, tone: 'text-primary bg-secondary' },
          { label: 'Open platform alerts', value: '3', detail: 'Requires attention', icon: AlertTriangle, tone: 'text-warning bg-warning/10' },
        ].map(({ label, value, detail, icon: Icon, tone }) => (
          <article key={label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground">{label}</p>
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${tone}`}><Icon className="h-4 w-4" /></div>
            </div>
            <p className="mt-5 text-3xl font-bold tracking-tight text-primary">{value}</p>
            <p className="mt-2 text-xs text-muted-foreground">{detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Moderation</p>
              <h2 className="mt-1 text-xl font-bold text-primary">Listing review queue</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"><Clock3 className="h-4 w-4" /> 14 pending</span>
          </div>
          <div className="mt-5 divide-y divide-border rounded-xl border border-border">
            {reviewQueue.map((item) => (
              <div key={item.equipment} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-primary">{item.equipment}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.owner} · Submitted {item.submitted}</p>
                </div>
                <Badge className={`w-fit ${item.status === 'Needs documents' ? 'bg-warning/10 text-warning' : 'bg-accent/10 text-accent'} hover:bg-current/10`}>{item.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Live activity</p>
            <h2 className="mt-1 text-xl font-bold text-primary">Recent activity</h2>
          </div>
          <div className="mt-5 space-y-5">
            {activity.map(({ label, detail, time, icon: Icon }) => (
              <div key={label} className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="h-4 w-4" /></div>
                <div>
                  <p className="text-sm font-semibold text-primary">{label}</p>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">{detail}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-border bg-secondary/40 p-4">
            <div className="flex items-center gap-2 text-primary"><Users className="h-4 w-4 text-accent" /><p className="text-sm font-semibold">Admin tools are ready to expand</p></div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Review, user management, safety, and alerts are represented here as frontend placeholders.</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">People need help</p>
            <h2 className="mt-1 text-xl font-bold text-primary">Support requests waiting</h2>
          </div>
          <Badge className="w-fit bg-accent/10 text-accent hover:bg-accent/10">3 unread requests</Badge>
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {supportRequests.map((request) => (
            <article key={request.name} className="rounded-xl border border-border bg-secondary/30 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary"><Headset className="h-4 w-4" /></div>
                <Badge className={`text-[10px] ${request.priority === 'High' ? 'bg-warning/10 text-warning' : 'bg-secondary text-primary'} hover:bg-current/10`}>{request.priority}</Badge>
              </div>
              <p className="mt-4 font-semibold text-primary">{request.name}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{request.request}</p>
              <p className="mt-3 text-xs text-muted-foreground">Received {request.time}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
