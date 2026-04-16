"use client";

import React from "react";

const rows = [
  ["Déclaration de naissance", "État civil", "Oui", "Oui", "Workflow prioritaire"],
  ["Déclaration de décès", "État civil", "Oui", "Oui", "Workflow prioritaire"],
  ["Copie d’acte", "État civil", "Oui", "Oui", "Recherche / impression / retrait"],
  ["Organisation de mariage", "État civil", "Oui", "Oui", "Programmation et validation"],
  ["Prise en charge sociale", "Social", "Oui", "Non", "Phase suivante"],
  ["Consultation publique", "Participation", "Non", "Non", "Module futur"],
];

export default function DemarchesPage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "32px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 38, marginBottom: 8 }}>Catalogue des démarches</h1>
        <p style={{ color: "#475569", lineHeight: 1.7, maxWidth: 900 }}>
          Le portail doit être conçu comme une plateforme de procédures. Chaque démarche
          a ses pièces, ses frais, ses statuts, ses validations, ses documents générés
          et son cycle d’archivage.
        </p>

        <div style={{ background: "#fff", borderRadius: 18, border: "1px solid #e5e7eb", padding: 20, marginTop: 22, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#eff6ff", textAlign: "left" }}>
                {["Démarche", "Domaine", "Pièces", "Paiement", "Commentaire"].map((head) => (
                  <th key={head} style={{ padding: 14, borderBottom: "1px solid #dbeafe" }}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell} style={{ padding: 14, borderBottom: "1px solid #e5e7eb", color: "#334155" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
