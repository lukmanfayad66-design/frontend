'use client';

import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-muted-foreground">Account</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Account Settings</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-primary">Personal information</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-primary">
              First name
              <input defaultValue="Kofi" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
            <label className="block text-sm font-medium text-primary">
              Last name
              <input defaultValue="Asare" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-primary">
              Email address
              <input defaultValue="kofi@stronghaul.com" type="email" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-primary">Business information</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-medium text-primary">
              Company name
              <input defaultValue="Asare Haulage Services" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
            <label className="block text-sm font-medium text-primary">
              Business type
              <input defaultValue="Equipment rental owner" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-primary">Contact details</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-medium text-primary">
              Phone number
              <input defaultValue="+233 20 123 4567" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
            <label className="block text-sm font-medium text-primary">
              Location
              <input defaultValue="Accra, Ghana" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-primary">Password management</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-medium text-primary">
              Current password
              <input type="password" defaultValue="password" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
            <label className="block text-sm font-medium text-primary">
              New password
              <input type="password" placeholder="Enter a new password" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 placeholder:text-muted-foreground" />
            </label>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-bold text-primary">Account preferences</h2>
        <div className="mt-4 space-y-3">
          {[
            'Email me when a listing is approved or rejected.',
            'Send me alerts for new enquiries and messages.',
            'Notify me when my subscription is nearing expiry.',
          ].map((item) => (
            <label key={item} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-3 text-sm text-primary">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-accent" />
              {item}
            </label>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="h-11 bg-primary text-primary-foreground hover:bg-primary/90">Save changes</Button>
          <Button variant="outline" className="h-11 border-border hover:bg-secondary">Cancel</Button>
        </div>
      </section>
    </div>
  );
}
