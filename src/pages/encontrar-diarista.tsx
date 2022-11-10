import { CheckProfessionals } from 'components/partials/search-housekeeper/check-professionals/check-professionals.component';
import { GetStaticProps } from 'next';

const EncontrarDiarista = () => {
  return <CheckProfessionals />;
};

export default EncontrarDiarista;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
