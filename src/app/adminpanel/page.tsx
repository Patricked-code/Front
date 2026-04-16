import StablePanelGateway from '@/components/panels/StablePanelGateway';

export const metadata = {
  title: 'Panel administrateur | OPCVM',
  description: 'Gateway stable du panel administrateur avec redirection sécurisée vers l’espace legacy.',
};

export default function AdminPanelPage() {
  return (
    <StablePanelGateway
      expectedPanel="adminpanel"
      accentLabel="Panel administrateur"
      title="Espace administrateur"
      subtitle="Connexion vérifiée et redirection contrôlée vers votre espace d’administration." 
    />
  );
}
