'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import RequireStableAuth from '@/components/auth/RequireStableAuth';
import StableLogoutButton from '@/components/auth/StableLogoutButton';
import { getAuthUser } from '@/lib/authSession';
import { resolveLegacyPanelHref } from '@/lib/panelRouting';

type StablePanelGatewayProps = {
  expectedPanel: 'investisseurpanel' | 'societegestionpanel' | 'adminpanel' | 'personnelpanel' | 'payspanel';
  title: string;
  subtitle: string;
  accentLabel: string;
};

export default function StablePanelGateway(props: StablePanelGatewayProps) {
  const router = useRouter();
  const user = getAuthUser();

  const legacyHref = useMemo(() => {
    if (!user) return '/auth/stable';
    return resolveLegacyPanelHref({
      typeusers_id: user.typeusers_id || null,
      denomination: user.denomination || null,
      pays: user.pays || null,
      id: user.id || null,
    });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    if (user.panel !== props.expectedPanel) return;

    const timer = setTimeout(() => {
      router.replace(legacyHref);
    }, 1200);

    return () => clearTimeout(timer);
  }, [legacyHref, props.expectedPanel, router, user]);

  return (
    <RequireStableAuth>
      <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col justify-center gap-6 px-4 py-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-gray-600">
                {props.accentLabel}
              </div>
              <h1 className="text-3xl font-semibold">{props.title}</h1>
              <p className="mt-2 text-sm text-gray-600">{props.subtitle}</p>
            </div>
            <StableLogoutButton />
          </div>

          {!user ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              Session introuvable. Redirection vers l’authentification stable.
            </div>
          ) : user.panel !== props.expectedPanel ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                Le panel attendu ne correspond pas au profil de la session courante.
              </div>
              <button
                type="button"
                onClick={() => router.replace(legacyHref)}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Ouvrir mon espace correspondant
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                Connexion stable validée. Redirection vers votre espace en cours…
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-4">
                  <div className="text-xs uppercase text-gray-500">Email</div>
                  <div className="mt-2 text-sm font-medium break-all">{user.email}</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs uppercase text-gray-500">Type</div>
                  <div className="mt-2 text-sm font-medium">{user.typeusers || props.expectedPanel}</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs uppercase text-gray-500">Panel</div>
                  <div className="mt-2 text-sm font-medium">{user.panel || props.expectedPanel}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => router.replace(legacyHref)}
                  className="rounded-lg bg-black px-4 py-2 text-white"
                >
                  Ouvrir mon espace
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/auth/stable')}
                  className="rounded-lg border px-4 py-2"
                >
                  Retour à l’authentification
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </RequireStableAuth>
  );
}
