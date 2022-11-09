import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled
} from './title.styles';

interface TitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};
