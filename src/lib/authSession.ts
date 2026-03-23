import type { StableUser } from './authApi';

const TOKEN_KEY = 'opcvm_auth_token';
const USER_KEY = 'opcvm_auth_user';

export function saveAuthSession(token: string, user: StableUser) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuthSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getAuthUser(): StableUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as StableUser;
  } catch {
    return null;
  }
}

export function getDefaultPanelRoute(user?: StableUser | null) {
  const panel = user?.panel || 'investisseurpanel';
  return `/${panel}`;
}
