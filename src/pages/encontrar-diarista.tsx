import { CheckProfessionals } from 'components/partials/search-housekeeper/check-professionals/check-professionals.component';
import { GetStaticProps } from 'next';

const SearchHousekeeper = () => {
  return <CheckProfessionals />;
};

export default SearchHousekeeper;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
