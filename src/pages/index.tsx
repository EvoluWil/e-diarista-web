import { Advantages } from 'components/partials/home/advantages/advantages.component';
import { Presentation } from 'components/partials/home/presentation/presentation.component';
import { Questions } from 'components/partials/home/questions/questions.component';
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
