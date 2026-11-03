'use client';

import { Bell, CheckCheck, Inbox, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDashboard } from '@/components/dashboard/dashboard-context';

export default function NotificationsPage() {
  const { notifications, markRead, markAllRead } = useDashboard();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Account updates</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary">Notifications</h1>
        </div>
        <Button onClick={markAllRead} variant="outline" className="h-11 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <CheckCheck className="mr-2 h-4 w-4" /> Mark All as Read
        </Button>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
            <Inbox className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-xl font-bold text-primary">You’re all caught up</h2>
          <p className="mt-2 text-sm text-muted-foreground">No new notifications right now.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className={`rounded-2xl border p-4 sm:p-5 ${notification.read ? 'border-border bg-card' : 'border-accent/40 bg-accent/5'}`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                    {notification.type === 'subscription' ? <Sparkles className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-primary">{notification.title}</p>
                      {!notification.read && <Badge className="bg-accent text-accent-foreground">Unread</Badge>}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{notification.detail}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
                {!notification.read && (
                  <Button onClick={() => markRead(notification.id)} variant="outline" className="h-10 border-border hover:bg-secondary">
                    Mark as Read
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
