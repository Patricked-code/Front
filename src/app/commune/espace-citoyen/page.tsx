"use client";

import React from "react";

const demandes = [
  { reference: "NIC-2026-00021", titre: "Déclaration de naissance", statut: "En vérification", progression: "60%" },
  { reference: "NIC-2026-00017", titre: "Copie d’acte de naissance", statut: "Prêt au retrait", progression: "100%" },
  { reference: "NIC-2026-00009", titre: "Déclaration de décès", statut: "Pièces complémentaires attendues", progression: "35%" },
];

export default function EspaceCitoyenPage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "32px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 38, marginBottom: 8 }}>Espace citoyen</h1>
        <p style={{ color: "#475569", lineHeight: 1.7, maxWidth: 900 }}>
          L’espace citoyen centralise les démarches, les paiements, les documents déposés,
          les récépissés, l’historique et les notifications. Cette maquette prépare
          l’expérience future de compte usager.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
            marginTop: 24,
            marginBottom: 18,
          }}
        >
          <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Actions disponibles</h2>
            <ul style={{ paddingLeft: 18, lineHeight: 1.9, color: "#334155" }}>
              <li>Créer et suivre une demande administrative.</li>
              <li>Déposer des pièces justificatives.</li>
              <li>Payer les frais et télécharger le reçu.</li>
              <li>Recevoir des notifications de changement de statut.</li>
              <li>Consulter l’historique complet de ses dossiers.</li>
            </ul>
          </section>

          <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Informations du compte</h2>
            <div style={{ color: "#334155", lineHeight: 1.9 }}>
              <div><strong>Profil :</strong> Citoyen / administré</div>
              <div><strong>Canal principal :</strong> Email + notifications applicatives</div>
              <div><strong>Données liées :</strong> Dossiers, reçus, documents, suivi</div>
            </div>
          </section>
        </div>

        <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Mes démarches récentes</h2>
          <div style={{ display: "grid", gap: 14 }}>
            {demandes.map((demande) => (
              <article
                key={demande.reference}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: 18,
                  background: "#fcfdff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{demande.titre}</div>
                    <div style={{ color: "#64748b", marginTop: 4 }}>{demande.reference}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: "#1d4ed8" }}>{demande.statut}</div>
                </div>
                <div style={{ marginTop: 12, color: "#475569" }}>Progression : {demande.progression}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
