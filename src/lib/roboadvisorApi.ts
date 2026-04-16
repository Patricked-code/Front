import { STABLE_ENDPOINTS } from './stableEndpoints';

export async function fetchIntegratedQuestionnaire() {
  const response = await fetch(STABLE_ENDPOINTS.roboadvisor.questionnaireProxy, {
    method: 'GET',
    cache: 'no-store',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || 'Erreur de chargement du questionnaire roboadvisor');
  }
  return data;
}

export async function scoreIntegratedProfile(payload: unknown) {
  const response = await fetch(STABLE_ENDPOINTS.roboadvisor.profileProxy, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || 'Erreur de scoring roboadvisor');
  }
  return data;
}

export async function allocateIntegratedProfile(payload: unknown) {
  const response = await fetch(STABLE_ENDPOINTS.roboadvisor.allocationProxy, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || 'Erreur d allocation roboadvisor');
  }
  return data;
}

export async function recommendIntegratedProfile(payload: unknown) {
  const response = await fetch(STABLE_ENDPOINTS.roboadvisor.recommendationProxy, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || 'Erreur de recommandation roboadvisor');
  }
  return data;
}
