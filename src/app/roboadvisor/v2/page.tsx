import IntegratedRoboadvisorFormV2 from '@/components/roboadvisor/IntegratedRoboadvisorFormV2';

export const metadata = {
  title: 'Roboadvisor intégré V2 | OPCVM',
  description: 'Questionnaire, profil, allocation et recommandation directement intégrés au projet principal.',
};

export default function RoboadvisorV2Page() {
  return <IntegratedRoboadvisorFormV2 />;
}
