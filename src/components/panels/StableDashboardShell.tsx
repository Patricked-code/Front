'use client';

import Link from 'next/link';
import RequireStableAuth from '@/components/auth/RequireStableAuth';
import StableLogoutButton from '@/components/auth/StableLogoutButton';
import { getAuthUser } from '@/lib/authSession';

type StableDashboardShellProps = {
  title: string;
  subtitle: string;
  accentLabel: string;
  cards: Array<{ title: string; value: string; description: string }>;
  links: Array<{ href: string; label: string; description: string }>;
};

export default function StableDashboardShell(props: StableDashboardShellProps) {
  const user = getAuthUser();

  return (
    <RequireStableAuth>
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col gap-6 px-4 py-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-gray-600">
                {props.accentLabel}
              </div>
              <h1 className="text-3xl font-semibold">{props.title}</h1>
              <p className="mt-2 text-sm text-gray-600">{props.subtitle}</p>
            </div>
            <StableLogoutButton />
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <div className="text-xs uppercase text-gray-500">Email</div>
              <div className="mt-2 text-sm font-medium break-all">{user?.email || 'N/A'}</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-xs uppercase text-gray-500">Type de compte</div>
              <div className="mt-2 text-sm font-medium">{user?.typeusers || 'N/A'}</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-xs uppercase text-gray-500">Panel</div>
              <div className="mt-2 text-sm font-medium">{user?.panel || 'N/A'}</div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {props.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border p-5">
                <div className="text-xs uppercase text-gray-500">{card.title}</div>
                <div className="mt-2 text-2xl font-semibold">{card.value}</div>
                <div className="mt-2 text-sm text-gray-600">{card.description}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {props.links.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border p-5 transition hover:shadow-md">
                <div className="text-lg font-medium">{item.label}</div>
                <div className="mt-2 text-sm text-gray-600">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </RequireStableAuth>
  );
}
