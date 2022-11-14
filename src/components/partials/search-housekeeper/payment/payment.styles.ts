import { styled } from '@mui/material';
import { BaseGrid } from 'styles/base-grid.styles';

export const PaymentContainer = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'number number'
    'name name'
    'expiration code'
    'error error';

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-areas:
      'number'
      'name'
      'expiration'
      'code'
      'error';
  }
`;
