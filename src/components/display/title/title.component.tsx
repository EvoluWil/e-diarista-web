import { SystemProps } from '@mui/system';

import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled
} from './title.styles';

interface TitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  sx?: SystemProps;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle, sx }) => {
  return (
    <PageTitleContainer sx={sx}>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};
