import { Container, styled } from '@mui/material';

export const FormContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiPaper-root {
      box-shadow: none;
    }
  }
`;

interface PageFormContainerProps {
  fullwidth: number;
}

export const PageFormContainer = styled('div')<PageFormContainerProps>`
  display: grid;
  grid-template-columns: ${({ fullwidth }) =>
    fullwidth ? '1fr' : 'minmax(652px, 1fr) minmax(150px, 318px)'};
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: start;
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3)};
    .MuiPaper-root {
      padding: 0;
    }
  }
`;
