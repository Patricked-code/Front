'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginStable } from '@/lib/authApi';
import { saveAuthSession, getDefaultPanelRoute } from '@/lib/authSession';

export default function StableLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await loginStable(email, password);
      saveAuthSession(result.token, result.user);
      router.push(getDefaultPanelRoute(result.user));
    } catch (err: any) {
      const apiError = err?.response?.data?.error || err?.message || 'Erreur de connexion';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 rounded-2xl border p-6 shadow-sm bg-white">
      <div>
        <h2 className="text-2xl font-semibold">Connexion</h2>
        <p className="text-sm text-gray-500">Connexion stable par email et mot de passe</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="votre@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="********"
          required
        />
      </div>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60"
      >
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}
