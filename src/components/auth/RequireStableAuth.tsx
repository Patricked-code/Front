'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken, getAuthUser } from '@/lib/authSession';

export default function RequireStableAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    const user = getAuthUser();

    if (!token || !user) {
      router.replace('/auth/stable');
    }
  }, [router]);

  return <>{children}</>;
}
