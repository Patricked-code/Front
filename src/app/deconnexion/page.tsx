'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearAuthSession } from '@/lib/authSession';

export default function DeconnexionPage() {
  const router = useRouter();

  useEffect(() => {
    clearAuthSession();
    router.replace('/auth/stable');
  }, [router]);

  return <div className="p-6">Déconnexion en cours...</div>;
}
