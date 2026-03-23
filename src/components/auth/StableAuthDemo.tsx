'use client';

import { useState } from 'react';
import StableLoginForm from './StableLoginForm';
import StableRegisterForm from './StableRegisterForm';

export default function StableAuthDemo() {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Authentification stabilisée</h1>
        <p className="text-sm text-gray-500">
          Démonstration du nouveau flux de connexion et d'inscription sans dépendance Magic pour les écrans stabilisés.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`rounded-lg px-4 py-2 ${tab === 'login' ? 'bg-black text-white' : 'border'}`}
        >
          Connexion
        </button>
        <button
          type="button"
          onClick={() => setTab('register')}
          className={`rounded-lg px-4 py-2 ${tab === 'register' ? 'bg-black text-white' : 'border'}`}
        >
          Inscription
        </button>
      </div>

      <div>{tab === 'login' ? <StableLoginForm /> : <StableRegisterForm />}</div>
    </div>
  );
}
