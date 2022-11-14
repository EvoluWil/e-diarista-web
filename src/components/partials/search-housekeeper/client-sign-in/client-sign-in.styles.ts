import { styled } from '@mui/material';
import { BaseGrid } from 'styles/base-grid.styles';

export const SignInContainer = styled(BaseGrid)`
  max-width: 450px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: right;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const ClientSignInContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    justify-content: center;
  }
`;
