export type FrontRuntimeConfig = {
  apiBaseUrl: string;
  siteUrl: string;
  apiImageUrl: string;
  roboadvisorMode: 'integrated' | 'external-disabled';
  stablecoinEnabled: boolean;
  magicEnabled: boolean;
};

function normalizeBaseUrl(value?: string | null, fallback: string = '') {
  return (value || fallback || '').replace(/\/$/, '');
}

export function getFrontRuntimeConfig(): FrontRuntimeConfig {
  const apiBaseUrl = normalizeBaseUrl(
    process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
    ''
  );

  const siteUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL, '');
  const apiImageUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_IMAGE_URL, apiBaseUrl);

  return {
    apiBaseUrl,
    siteUrl,
    apiImageUrl,
    roboadvisorMode: 'integrated',
    stablecoinEnabled: false,
    magicEnabled: false,
  };
}

export const frontRuntimeConfig = getFrontRuntimeConfig();
