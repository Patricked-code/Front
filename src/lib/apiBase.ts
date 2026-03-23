import { frontRuntimeConfig } from './runtimeConfig';

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, '');
}

export function getApiBaseUrl() {
  return trimTrailingSlash(frontRuntimeConfig.apiBaseUrl || '');
}

export function toApiUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = getApiBaseUrl();
  return `${base}${normalizedPath}`;
}

export function toApiImageUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = trimTrailingSlash(frontRuntimeConfig.apiImageUrl || getApiBaseUrl());
  return `${base}${normalizedPath}`;
}
