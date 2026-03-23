import axios from 'axios';

export type StableUser = {
  id: number;
  email: string;
  nom?: string | null;
  prenoms?: string | null;
  denomination?: string | null;
  pays?: string | null;
  typeusers?: string | null;
  typeusers_id?: number | null;
  active?: number | boolean | null;
  panel?: string | null;
};

export type AuthSuccess = {
  message: string;
  token: string;
  user: StableUser;
  mode?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:3005';

export const authApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function loginStable(email: string, password: string) {
  const { data } = await authApi.post<AuthSuccess>('/auth/login', { email, password });
  return data;
}

export async function registerStable(payload: {
  email: string;
  password: string;
  nom?: string;
  prenoms?: string;
  denomination?: string;
  pays?: string;
  typeusers?: string;
  typeusers_id?: number;
}) {
  const { data } = await authApi.post<AuthSuccess>('/auth/register', payload);
  return data;
}

export async function getAvailablePanels() {
  const { data } = await authApi.get<{ panels: string[] }>('/auth/panels');
  return data;
}
