export type AccountType = 'owner' | 'renter';

export type DemoAuthUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountType: AccountType;
  marketingConsent: boolean;
};

export const DEMO_AUTH_KEY = 'stronghaul-demo-auth';

export function getStoredUser(): DemoAuthUser | null {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem(DEMO_AUTH_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as DemoAuthUser;
  } catch {
    return null;
  }
}

export function setStoredUser(user: DemoAuthUser) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(DEMO_AUTH_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(DEMO_AUTH_KEY);
}

export function validateDemoLogin(identifier: string, password: string): DemoAuthUser | null {
  const storedUser = getStoredUser();

  if (!storedUser) {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const isEmail = normalizedIdentifier.includes('@');

    if (isEmail && password.length > 0) {
      return {
        id: 'demo-user',
        fullName: 'Demo User',
        email: normalizedIdentifier,
        phone: '0200000000',
        password,
        accountType: 'renter',
        marketingConsent: false,
      };
    }

    return null;
  }

  const normalizedIdentifier = identifier.trim().toLowerCase();
  const emailMatches = storedUser.email.toLowerCase() === normalizedIdentifier;
  const phoneMatches = storedUser.phone.replace(/\s+/g, '') === normalizedIdentifier.replace(/\s+/g, '');

  if ((emailMatches || phoneMatches) && storedUser.password === password) {
    return storedUser;
  }

  return null;
}
