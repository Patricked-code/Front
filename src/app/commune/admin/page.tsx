"use client";

import React from "react";

const files = [
  { titre: "Dossiers en attente de validation", valeur: 18 },
  { titre: "Demandes de compléments", valeur: 7 },
  { titre: "Actes prêts au retrait", valeur: 12 },
  { titre: "Alertes de SLA", valeur: 3 },
];

const steps = [
  "Réception et qualification de la demande",
  "Vérification des pièces et des frais",
  "Affectation à un agent ou service",
  "Validation / rejet / demande de complément",
  "Production du document ou de l’acte",
  "Signature, archivage et mise à disposition",
];

export default function CommuneAdminPage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "32px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 38, marginBottom: 8 }}>Cockpit administrateur communal</h1>
          <p style={{ color: "#475569", lineHeight: 1.7, maxWidth: 900 }}>
            Ce cockpit prépare la logique de traitement opérationnel : supervision des demandes,
            ventilation par service, validation, suivi des délais, archivage et traçabilité.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {files.map((item) => (
            <div
              key={item.titre}
              style={{
                background: "#fff",
                borderRadius: 18,
                border: "1px solid #e5e7eb",
                padding: 22,
                boxShadow: "0 8px 20px rgba(15,23,42,0.05)",
              }}
            >
              <div style={{ color: "#64748b", fontSize: 14 }}>{item.titre}</div>
              <div style={{ fontSize: 34, fontWeight: 800, marginTop: 8 }}>{item.valeur}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
        >
          <section
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid #e5e7eb",
              padding: 24,
            }}
          >
            <h2 style={{ marginTop: 0 }}>Fonctions ciblées</h2>
            <ul style={{ paddingLeft: 18, lineHeight: 1.9, color: "#334155" }}>
              <li>Gestion des agents, rôles, services et directions.</li>
              <li>Suivi des files de traitement par nature de démarche.</li>
              <li>Visualisation des paiements, reçus, timbres et taxes.</li>
              <li>Production, contrôle, signature et archivage des actes.</li>
              <li>Pilotage des contenus publics, événements, newsletters et alertes.</li>
              <li>Préparation d’un modèle SaaS multi-communes.</li>
            </ul>
          </section>

          <section
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid #e5e7eb",
              padding: 24,
            }}
          >
            <h2 style={{ marginTop: 0 }}>Workflow cible</h2>
            <ol style={{ paddingLeft: 18, lineHeight: 1.9, color: "#334155" }}>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
