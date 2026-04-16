"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthUser, getDefaultPanelRoute } from '@/lib/authSession';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const user = getAuthUser();

    if (!user) {
      router.replace('/auth/stable');
      return;
    }

    router.replace(getDefaultPanelRoute(user));
  }, [router]);

  return <div>Redirection en cours...</div>;
}
