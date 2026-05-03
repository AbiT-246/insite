import { getApiBaseUrl } from '@/lib/api';
import type { PublicUser } from '../types';

export async function fetchPlaceholderUser(): Promise<PublicUser> {
  const url = `${getApiBaseUrl()}/users/me`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to load user: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<PublicUser>;
}
