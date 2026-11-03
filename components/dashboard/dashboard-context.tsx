'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type DashboardNotification = {
  id: string;
  title: string;
  detail: string;
  time: string;
  read: boolean;
  type: 'listing' | 'subscription' | 'system';
};

const demoNotifications: DashboardNotification[] = [
  {
    id: 'notice-1',
    title: 'Listing submitted for review',
    detail: 'Your Komatsu excavator listing is awaiting review.',
    time: '2 hours ago',
    read: false,
    type: 'listing',
  },
  {
    id: 'notice-2',
    title: 'Welcome to StrongHaul',
    detail: 'Your owner account is ready to get started.',
    time: 'Yesterday',
    read: false,
    type: 'system',
  },
  {
    id: 'notice-3',
    title: 'Basic plan active',
    detail: 'Your account currently has one active equipment listing slot.',
    time: '3 days ago',
    read: true,
    type: 'subscription',
  },
];

type DashboardContextValue = {
  notifications: DashboardNotification[];
  unreadCount: number;
  markRead: (id: string) => void;
  markAllRead: () => void;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState(demoNotifications);
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  function markRead(id: string) {
    setNotifications((current) =>
      current.map((notification) => notification.id === id ? { ...notification, read: true } : notification)
    );
  }

  function markAllRead() {
    setNotifications((current) => current.map((notification) => ({ ...notification, read: true })));
  }

  return (
    <DashboardContext.Provider value={{ notifications, unreadCount, markRead, markAllRead }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error('useDashboard must be used within DashboardProvider');
  return context;
}