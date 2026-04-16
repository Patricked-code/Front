import StableDashboardShell from '@/components/panels/StableDashboardShell';

export const metadata = {
  title: 'Dashboard administrateur | OPCVM',
  description: 'Espace administrateur stable avec navigation modernisée et sécurisée.',
};

export default function AdminDashboardPage() {
  return (
    <StableDashboardShell
      accentLabel="Dashboard stable"
      title="Dashboard administrateur"
      subtitle="Version modernisée de l’espace administrateur, avec session stable et navigation sécurisée avant l’accès aux écrans historiques."
      cards={[
        { title: 'Auth', value: 'Stabilisée', description: 'Le parcours moderne réduit la dépendance aux anciens points d’entrée.' },
        { title: 'Panels', value: 'Structurés', description: 'Les espaces principaux disposent désormais d’une entrée moderne cohérente.' },
        { title: 'Analytics', value: 'En préparation', description: 'La trajectoire transactionnel + ClickHouse est déjà amorcée.' },
      ]}
      links={[
        { href: '/roboadvisor', label: 'Roboadvisor intégré', description: 'Accès au moteur intégré depuis l’application principale.' },
        { href: '/roboadvisor/v2', label: 'Roboadvisor V2', description: 'Version enrichie avec recommandation structurée.' },
        { href: '/panel/admin/home', label: 'Espace administrateur legacy', description: 'Accès à l’interface historique tant que la migration n’est pas achevée.' },
      ]}
    />
  );
}
