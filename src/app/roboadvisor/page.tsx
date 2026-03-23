import IntegratedRoboadvisorForm from '@/components/roboadvisor/IntegratedRoboadvisorForm';

export const metadata = {
  title: 'Roboadvisor intégré | OPCVM',
  description: 'Questionnaire de profil investisseur et allocation indicative intégrés directement au projet principal.',
};

export default function RoboadvisorPage() {
  return <IntegratedRoboadvisorForm />;
}
