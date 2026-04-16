import StableDashboardShell from '@/components/panels/StableDashboardShell';

export const metadata = {
  title: 'Dashboard société de gestion | OPCVM',
  description: 'Espace société de gestion stable avec navigation modernisée et sécurisée.',
};

export default function SocieteGestionDashboardPage() {
  return (
    <StableDashboardShell
      accentLabel="Dashboard stable"
      title="Dashboard société de gestion"
      subtitle="Version modernisée de l’espace société de gestion, avec session stable, navigation clarifiée et transition progressive hors legacy."
      cards={[
        { title: 'Session', value: 'Stable', description: 'Le parcours de connexion est maintenant unifié et protégé.' },
        { title: 'Parcours', value: 'Clarifié', description: 'Le panel moderne sert d’entrée propre avant les écrans historiques.' },
        { title: 'Produit', value: 'Évolutif', description: 'Le roboadvisor et les briques analytiques sont progressivement réintégrés.' },
      ]}
      links={[
        { href: '/roboadvisor', label: 'Roboadvisor intégré', description: 'Tester le nouveau moteur de profil investisseur intégré au projet.' },
        { href: '/roboadvisor/v2', label: 'Roboadvisor V2', description: 'Questionnaire, allocation et recommandation enrichie.' },
        { href: '/panel/societegestionpanel/pagehome', label: 'Espace société de gestion legacy', description: 'Accès à l’interface historique pendant la migration.' },
      ]}
    />
  );
}
