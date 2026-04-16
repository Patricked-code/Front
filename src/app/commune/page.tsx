"use client";

import Link from "next/link";
import React from "react";

const demarches = [
  {
    slug: "naissance",
    titre: "Déclaration de naissance",
    description: "Déposer une pré-déclaration, joindre les pièces et suivre l’avancement du dossier.",
    pieces: ["CNI du déclarant", "Acte ou certificat lié à la naissance", "Justificatifs complémentaires"],
    statut: "Disponible",
  },
  {
    slug: "deces",
    titre: "Déclaration de décès",
    description: "Déclarer un décès, joindre les pièces requises et suivre la validation communale.",
    pieces: ["Pièce du déclarant", "Pièce ou acte du défunt", "Justificatif complémentaire"],
    statut: "Disponible",
  },
  {
    slug: "copie-acte",
    titre: "Demande de copie d’acte",
    description: "Demander une copie d’acte de naissance, mariage ou décès.",
    pieces: ["Ancienne copie si disponible", "Pièce d’identité", "Référence d’acte si connue"],
    statut: "Disponible",
  },
  {
    slug: "mariage",
    titre: "Organisation de mariage",
    description: "Initier un dossier de mariage, programmer la cérémonie et suivre les étapes.",
    pieces: ["Extraits de naissance", "Pièces d’identité", "Pièces complémentaires"],
    statut: "Bientôt disponible",
  },
];

const kpis = [
  { label: "Démarches prioritaires", value: "4" },
  { label: "Espaces produit", value: "Public / Citoyen / Admin" },
  { label: "Modules clés", value: "GED · Workflow · Paiement" },
  { label: "Positionnement", value: "SaaS communal" },
];

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 24,
  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
};

export default function CommunePortalPage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #0ea5e9 100%)",
          color: "white",
          padding: "72px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              marginBottom: 18,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Portail communal — MVP SaaS
          </div>

          <h1 style={{ fontSize: 46, lineHeight: 1.1, margin: 0, maxWidth: 950 }}>
            Plateforme de digitalisation communale pour les démarches, la relation citoyenne
            et le pilotage administratif
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 900, marginTop: 22, opacity: 0.95 }}>
            Cette première base est pensée pour une commune ivoirienne, avec une architecture
            réutilisable pour plusieurs collectivités. Le socle couvre le portail public,
            l’espace citoyen, les démarches prioritaires d’état civil, le cockpit
            administrateur, la gestion documentaire et la logique de workflow.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <Link
              href="/commune/espace-citoyen"
              style={{
                background: "#ffffff",
                color: "#0f172a",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Espace citoyen
            </Link>
            <Link
              href="/commune/admin"
              style={{
                background: "transparent",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.35)",
                fontWeight: 700,
              }}
            >
              Cockpit admin
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 18px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {kpis.map((item) => (
            <div key={item.label} style={cardStyle}>
              <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.8, color: "#64748b" }}>
                {item.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 10 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 24px 40px" }}>
        <div style={{ ...cardStyle, paddingBottom: 12 }}>
          <h2 style={{ marginTop: 0, fontSize: 28 }}>Démarches prioritaires</h2>
          <p style={{ color: "#475569", lineHeight: 1.7 }}>
            Les documents analysés montrent que le cœur métier du portail communal réside dans
            la gestion des procédures, des pièces, des paiements, des validations, des signatures,
            de l’archivage et du suivi des dossiers. Cette version prépare donc un socle stable
            pour les démarches les plus structurantes.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
              marginTop: 20,
            }}
          >
            {demarches.map((demarche) => (
              <article key={demarche.slug} style={{ ...cardStyle, background: "#fefefe" }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: demarche.statut === "Disponible" ? "#dcfce7" : "#fef3c7",
                    color: demarche.statut === "Disponible" ? "#166534" : "#92400e",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {demarche.statut}
                </div>
                <h3 style={{ marginBottom: 12 }}>{demarche.titre}</h3>
                <p style={{ color: "#475569", lineHeight: 1.7 }}>{demarche.description}</p>
                <div style={{ marginTop: 16, fontWeight: 700 }}>Pièces usuelles</div>
                <ul style={{ paddingLeft: 18, color: "#334155", lineHeight: 1.8 }}>
                  {demarche.pieces.map((piece) => (
                    <li key={piece}>{piece}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 18,
          }}
        >
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: 28 }}>Architecture fonctionnelle prévue</h2>
            <ul style={{ paddingLeft: 18, lineHeight: 1.9, color: "#334155" }}>
              <li>Portail public : actualités, agenda, informations utiles, nécrologie, consultations.</li>
              <li>Espace citoyen : création de compte, dépôt de dossier, pièces, reçus, historique.</li>
              <li>Cockpit admin : traitement, affectation, validation, archivage, statistiques.</li>
              <li>Moteur de workflow : étapes, statuts, demandes de compléments, clôture.</li>
              <li>GED : pièces, actes produits, recherche, traçabilité et archivage.</li>
              <li>Paiement : timbres, frais de dossier, taxes et reçus.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: 28 }}>Parcours rapides</h2>
            <div style={{ display: "grid", gap: 12 }}>
              <Link href="/commune/espace-citoyen" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: 700 }}>
                Ouvrir l’espace citoyen →
              </Link>
              <Link href="/commune/admin" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: 700 }}>
                Ouvrir le cockpit administrateur →
              </Link>
              <Link href="/commune/demarches" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: 700 }}>
                Voir le catalogue des démarches →
              </Link>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 16,
                borderRadius: 14,
                background: "#eff6ff",
                color: "#1e3a8a",
                lineHeight: 1.7,
              }}
            >
              Cette base ne remplace pas encore tout le produit final. Elle sert de fondation
              propre, isolée et déployable, pour intégrer progressivement le SaaS communal
              complet sans casser l’existant.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
