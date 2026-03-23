'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthUser, getDefaultPanelRoute } from '@/lib/authSession';

export default function CallbackStablePage() {
  const router = useRouter();

  useEffect(() => {
    const user = getAuthUser();

    if (!user) {
      router.replace('/auth/stable');
      return;
    }

    router.replace(getDefaultPanelRoute(user));
  }, [router]);

  return <div className="p-6">Redirection en cours...</div>;
}
