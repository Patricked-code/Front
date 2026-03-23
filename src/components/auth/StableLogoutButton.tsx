'use client';

import { useRouter } from 'next/navigation';
import { clearAuthSession } from '@/lib/authSession';

export default function StableLogoutButton({ redirectTo = '/auth/stable' }: { redirectTo?: string }) {
  const router = useRouter();

  const onLogout = () => {
    clearAuthSession();
    router.push(redirectTo);
  };

  return (
    <button
      type="button"
      onClick={onLogout}
      className="rounded-lg border px-4 py-2 text-sm"
    >
      Déconnexion
    </button>
  );
}
