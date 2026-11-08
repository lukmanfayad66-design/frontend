'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  refreshAuthSession,
  signInRequest,
  signOutRequest,
  type AuthUser,
} from '@/lib/auth-client';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextValue = {
  user: AuthUser | null;
  accessToken: string | null;
  status: AuthStatus;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');
  const restorePromise = useRef<ReturnType<typeof refreshAuthSession> | null>(null);
  const operationVersion = useRef(0);

  useEffect(() => {
    let active = true;
    const version = operationVersion.current;
    try {
      window.localStorage.removeItem('stronghaul-demo-auth');
    } catch {
      // Session restoration does not depend on browser storage.
    }

    if (!restorePromise.current) {
      restorePromise.current = refreshAuthSession();
    }

    restorePromise.current
      .then((session) => {
        if (!active || operationVersion.current !== version) return;
        setUser(session?.user ?? null);
        setAccessToken(session?.accessToken ?? null);
        setExpiresAt(session ? Date.now() + session.expiresIn * 1000 : null);
        setStatus(session ? 'authenticated' : 'unauthenticated');
      })
      .catch(() => {
        if (!active || operationVersion.current !== version) return;
        setUser(null);
        setAccessToken(null);
        setExpiresAt(null);
        setStatus('unauthenticated');
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!accessToken || !expiresAt) return;

    let active = true;
    const version = operationVersion.current;
    const timeout = window.setTimeout(async () => {
      try {
        const session = await refreshAuthSession();
        if (!active || operationVersion.current !== version) return;
        setUser(session?.user ?? null);
        setAccessToken(session?.accessToken ?? null);
        setExpiresAt(session ? Date.now() + session.expiresIn * 1000 : null);
        setStatus(session ? 'authenticated' : 'unauthenticated');
      } catch {
        if (!active || operationVersion.current !== version) return;
        setUser(null);
        setAccessToken(null);
        setExpiresAt(null);
        setStatus('unauthenticated');
      }
    }, Math.max(1000, expiresAt - Date.now() - 30000));

    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, [accessToken, expiresAt]);

  async function signIn(email: string, password: string) {
    operationVersion.current += 1;
    setStatus('loading');
    try {
      const session = await signInRequest(email, password);
      setUser(session.user);
      setAccessToken(session.accessToken);
      setExpiresAt(Date.now() + session.expiresIn * 1000);
      setStatus('authenticated');
      return session.user;
    } catch (error) {
      setUser(null);
      setAccessToken(null);
      setExpiresAt(null);
      setStatus('unauthenticated');
      throw error;
    }
  }

  async function signOut() {
    operationVersion.current += 1;
    await signOutRequest();
    setUser(null);
    setAccessToken(null);
    setExpiresAt(null);
    setStatus('unauthenticated');
  }

  return (
    <AuthContext.Provider value={{ user, accessToken, status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}