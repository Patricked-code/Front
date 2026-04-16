import StableDashboardShell from '@/components/panels/StableDashboardShell';

export const metadata = {
  title: 'Dashboard investisseur | OPCVM',
  description: 'Espace investisseur stable avec navigation moderne et sécurisée.',
};

export default function InvestisseurDashboardPage() {
  return (
    <StableDashboardShell
      accentLabel="Dashboard stable"
      title="Dashboard investisseur"
      subtitle="Version modernisée de l’espace investisseur, avec session stable, navigation claire et accès progressif aux fonctionnalités métier."
      cards={[
        { title: 'Parcours', value: 'Stable', description: 'Connexion, session et redirection sécurisées.' },
        { title: 'Allocation', value: 'Intégrée', description: 'Le roboadvisor intégré est disponible depuis l’espace principal.' },
        { title: 'Migration', value: 'En cours', description: 'Les écrans legacy portefeuille restent accessibles pendant la transition.' },
      ]}
      links={[
        { href: '/roboadvisor', label: 'Roboadvisor intégré', description: 'Questionnaire et allocation indicative dans le projet principal.' },
        { href: '/roboadvisor/v2', label: 'Roboadvisor V2', description: 'Version enrichie avec recommandation structurée.' },
        { href: '/panel/portefeuille/home', label: 'Espace portefeuille legacy', description: 'Accès à l’espace historique pendant la migration.' },
      ]}
    />
  );
}
