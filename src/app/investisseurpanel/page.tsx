import StablePanelGateway from '@/components/panels/StablePanelGateway';

export const metadata = {
  title: 'Panel utilisateur | OPCVM',
  description: 'Gateway stable du panel utilisateur avec redirection sécurisée vers l’espace portefeuille.',
};

export default function InvestisseurPanelPage() {
  return (
    <StablePanelGateway
      expectedPanel="investisseurpanel"
      accentLabel="Panel utilisateur"
      title="Espace investisseur"
      subtitle="Connexion vérifiée et redirection contrôlée vers votre espace portefeuille." 
    />
  );
}
