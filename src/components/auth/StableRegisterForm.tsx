'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerStable } from '@/lib/authApi';
import { saveAuthSession, getDefaultPanelRoute } from '@/lib/authSession';

export default function StableRegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
    nom: '',
    prenoms: '',
    denomination: '',
    pays: '',
    typeusers: 'investisseur',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await registerStable(form);
      saveAuthSession(result.token, result.user);
      router.push(getDefaultPanelRoute(result.user));
    } catch (err: any) {
      const apiError = err?.response?.data?.error || err?.message || 'Erreur de création de compte';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-4 rounded-2xl border p-6 shadow-sm bg-white">
      <div>
        <h2 className="text-2xl font-semibold">Inscription</h2>
        <p className="text-sm text-gray-500">Création de compte stable sans dépendance Magic</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nom</label>
          <input value={form.nom} onChange={(e) => update('nom', e.target.value)} className="w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Prénoms</label>
          <input value={form.prenoms} onChange={(e) => update('prenoms', e.target.value)} className="w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full rounded-lg border px-3 py-2" required />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Mot de passe</label>
          <input type="password" value={form.password} onChange={(e) => update('password', e.target.value)} className="w-full rounded-lg border px-3 py-2" required />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Pays</label>
          <input value={form.pays} onChange={(e) => update('pays', e.target.value)} className="w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium">Dénomination</label>
          <input value={form.denomination} onChange={(e) => update('denomination', e.target.value)} className="w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium">Type de compte</label>
          <select value={form.typeusers} onChange={(e) => update('typeusers', e.target.value)} className="w-full rounded-lg border px-3 py-2">
            <option value="investisseur">Investisseur</option>
            <option value="societe_gestion">Société de gestion</option>
            <option value="personnel">Personnel</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

      <button type="submit" disabled={loading} className="w-full rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60">
        {loading ? 'Création...' : 'Créer mon compte'}
      </button>
    </form>
  );
}
