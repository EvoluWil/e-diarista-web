import { Service } from '@models/service.model';
import { api } from '@services/api/api.service';
import { Advantages } from 'components/partials/home/advantages/advantages.component';
import { Presentation } from 'components/partials/home/presentation/presentation.component';
import { Questions } from 'components/partials/home/questions/questions.component';
import { useApi } from 'data/hooks/api.hook';
import { GetStaticProps } from 'next';

const Home = () => {
  return (
    <>
      <Presentation />
      <Advantages />
      <Questions />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
