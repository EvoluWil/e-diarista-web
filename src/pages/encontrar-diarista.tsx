import { CheckProfessionals } from 'components/partials/search-housekeeper/check-professionals/check-professionals.component';
import { HireProfessional } from 'components/partials/search-housekeeper/hire-professional/hire-professional.component';
import { GetStaticProps } from 'next';

const EncontrarDiarista = () => {
  return <HireProfessional />;
};

export default EncontrarDiarista;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
