export type AccountType = 'owner' | 'renter';

export type AuthUser = {
  id: number;
  email: string;
  full_name: string;
  phone: string;
  account_type: AccountType;
  marketing_consent: boolean;
};

export type RegistrationPayload = {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  account_type: AccountType;
  marketing_consent: boolean;
};

export type AuthSession = {
  accessToken: string;
  expiresIn: number;
  user: AuthUser;
};

type TokenResponse = {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
};

export class AuthApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'AuthApiError';
    this.status = status;
  }
}

const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/+$/, '');

async function requestJson<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...init,
      credentials: 'include',
      cache: 'no-store',
      headers: {
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
        ...init.headers,
      },
    });
  } catch {
    throw new AuthApiError('Could not reach the authentication service. Check that the backend is running.', 0);
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null) as { detail?: unknown } | null;
    const detail = body?.detail;
    const message = typeof detail === 'string'
      ? detail
      : Array.isArray(detail)
        ? detail.map((item) => typeof item?.msg === 'string' ? item.msg : '').filter(Boolean).join(' ')
        : 'Authentication request failed.';
    throw new AuthApiError(message, response.status);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

async function fetchCurrentUser(accessToken: string) {
  return requestJson<AuthUser>('/auth/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

async function getCsrfToken() {
  const result = await requestJson<{ csrf_token: string | null }>('/auth/csrf');
  return result.csrf_token;
}

export async function registerAccount(payload: RegistrationPayload) {
  await requestJson<{ detail: string }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function signInRequest(email: string, password: string): Promise<AuthSession> {
  const tokens = await requestJson<TokenResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  try {
    const user = await fetchCurrentUser(tokens.access_token);
    return { accessToken: tokens.access_token, expiresIn: tokens.expires_in, user };
  } catch (error) {
    await signOutRequest().catch(() => undefined);
    throw error;
  }
}

export async function refreshAuthSession(): Promise<AuthSession | null> {
  const csrfToken = await getCsrfToken();
  if (!csrfToken) return null;

  let tokens: TokenResponse;
  try {
    tokens = await requestJson<TokenResponse>('/auth/refresh', {
      method: 'POST',
      headers: { 'X-CSRF-Token': csrfToken },
    });
  } catch (error) {
    if (error instanceof AuthApiError && error.status === 401) return null;
    throw error;
  }

  const user = await fetchCurrentUser(tokens.access_token);
  return { accessToken: tokens.access_token, expiresIn: tokens.expires_in, user };
}

export async function signOutRequest() {
  const csrfToken = await getCsrfToken();
  if (!csrfToken) return;

  try {
    await requestJson<void>('/auth/logout', {
      method: 'POST',
      headers: { 'X-CSRF-Token': csrfToken },
    });
  } catch (error) {
    if (!(error instanceof AuthApiError && error.status === 401)) throw error;
  }
}