import { Building2, UserRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AdminSectionPage } from '@/components/admin/admin-section-page';

const users = [
  { name: 'Kwame Construction', email: 'hello@kwameconstruction.com', type: 'Equipment owner', joined: '18 Oct 2026', listings: 12, state: 'Verified' },
  { name: 'Ama Boateng', email: 'ama.boateng@email.com', type: 'Renter', joined: '16 Oct 2026', listings: 0, state: 'Active' },
  { name: 'Accra Haulage', email: 'admin@accrahaulage.com', type: 'Equipment owner', joined: '14 Oct 2026', listings: 4, state: 'Verification pending' },
  { name: 'Joseph Mensah', email: 'j.mensah@email.com', type: 'Renter', joined: '11 Oct 2026', listings: 0, state: 'Active' },
];

export default function UsersPage() {
  return <AdminSectionPage eyebrow="Accounts" title="Users" description="Monitor owner and renter accounts across the StrongHaul marketplace.">
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-border bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <tr><th className="px-5 py-4">User</th><th className="px-5 py-4">Account type</th><th className="px-5 py-4">Joined</th><th className="px-5 py-4">Listings</th><th className="px-5 py-4">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((user) => <tr key={user.email} className="transition-colors hover:bg-secondary/30">
              <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">{user.type === 'Equipment owner' ? <Building2 className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}</div><div><p className="font-semibold text-primary">{user.name}</p><p className="mt-0.5 text-xs text-muted-foreground">{user.email}</p></div></div></td>
              <td className="px-5 py-4 text-muted-foreground">{user.type}</td>
              <td className="px-5 py-4 text-muted-foreground">{user.joined}</td>
              <td className="px-5 py-4 font-medium text-primary">{user.listings}</td>
              <td className="px-5 py-4"><Badge className={user.state === 'Verification pending' ? 'bg-warning/10 text-warning hover:bg-warning/10' : 'bg-success/10 text-success hover:bg-success/10'}>{user.state}</Badge></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </AdminSectionPage>;
}
