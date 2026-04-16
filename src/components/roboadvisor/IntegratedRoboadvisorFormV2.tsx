'use client';

import { useEffect, useState } from 'react';
import { fetchIntegratedQuestionnaire, recommendIntegratedProfile } from '@/lib/roboadvisorApi';

type Question = {
  key: string;
  label: string;
  type: string;
  min?: number;
  max?: number;
  required?: boolean;
};

type QuestionnaireResponse = {
  mode: string;
  questionnaire: {
    code: string;
    version: string;
    label: string;
    questions: Question[];
  };
};

type RecommendationResponse = {
  mode: string;
  score: number;
  profile: {
    code: string;
    label: string;
  };
  allocation: {
    indicative_allocation: {
      equities: number;
      fixed_income: number;
      liquidity: number;
    };
  };
  recommendation: {
    summary: string;
    suitable_fund_styles: string[];
    warnings: string[];
    next_steps: string[];
  };
};

export default function IntegratedRoboadvisorFormV2() {
  const [questionnaire, setQuestionnaire] = useState<QuestionnaireResponse | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const data = await fetchIntegratedQuestionnaire();
        setQuestionnaire(data);
      } catch (err: any) {
        setError(err?.message || 'Erreur de chargement');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const updateAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);
      setResult(null);
      const numericAnswers = Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, Number(v || 0)]));
      const data = await recommendIntegratedProfile({ answers: numericAnswers });
      setResult(data);
    } catch (err: any) {
      setError(err?.message || 'Erreur de recommandation');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-6">Chargement du roboadvisor intégré...</div>;
  if (error && !questionnaire) return <div className="p-6 text-red-700">{error}</div>;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Roboadvisor intégré V2</h1>
        <p className="text-sm text-gray-500">Questionnaire, profil, allocation et recommandation désormais centralisés via le backend principal.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-medium">{questionnaire?.questionnaire?.label}</h2>
          <p className="text-sm text-gray-500">Version {questionnaire?.questionnaire?.version}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {questionnaire?.questionnaire?.questions?.map((question) => (
            <div key={question.key} className="space-y-2">
              <label className="block text-sm font-medium">{question.label}</label>
              <input
                type="number"
                min={question.min}
                max={question.max}
                required={question.required}
                value={answers[question.key] || ''}
                onChange={(e) => updateAnswer(question.key, e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          ))}
        </div>

        {error ? <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

        <button type="submit" disabled={submitting} className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60">
          {submitting ? 'Analyse en cours...' : 'Obtenir ma recommandation'}
        </button>
      </form>

      {result ? (
        <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold">Résultat</h2>
            <p className="text-sm text-gray-500">Score {result.score} · {result.profile.label}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-4"><div className="text-sm text-gray-500">Actions</div><div className="text-2xl font-semibold">{result.allocation.indicative_allocation.equities}%</div></div>
            <div className="rounded-xl border p-4"><div className="text-sm text-gray-500">Obligataire</div><div className="text-2xl font-semibold">{result.allocation.indicative_allocation.fixed_income}%</div></div>
            <div className="rounded-xl border p-4"><div className="text-sm text-gray-500">Liquidité</div><div className="text-2xl font-semibold">{result.allocation.indicative_allocation.liquidity}%</div></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Synthèse</h3>
            <p className="text-sm text-gray-700">{result.recommendation.summary}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Styles de fonds adaptés</h3>
            <div className="flex flex-wrap gap-2">
              {result.recommendation.suitable_fund_styles.map((item) => (
                <span key={item} className="rounded-full border px-3 py-1 text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Avertissements</h3>
            {result.recommendation.warnings.map((item, index) => (
              <p key={index} className="text-sm text-gray-600">• {item}</p>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Étapes suivantes</h3>
            {result.recommendation.next_steps.map((item, index) => (
              <p key={index} className="text-sm text-gray-600">• {item}</p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
