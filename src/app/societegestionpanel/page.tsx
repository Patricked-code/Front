import StablePanelGateway from '@/components/panels/StablePanelGateway';

export const metadata = {
  title: 'Panel société de gestion | OPCVM',
  description: 'Gateway stable du panel société de gestion avec redirection sécurisée vers l’espace legacy.',
};

export default function SocieteGestionPanelPage() {
  return (
    <StablePanelGateway
      expectedPanel="societegestionpanel"
      accentLabel="Panel société de gestion"
      title="Espace société de gestion"
      subtitle="Connexion vérifiée et redirection contrôlée vers votre espace de gestion." 
    />
  );
}
