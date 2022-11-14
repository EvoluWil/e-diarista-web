import { Container, styled } from '@mui/material';

export const BaseGrid = styled('div')`
  display: grid;
  grid-auto-rows: auto;
  gap: ${({ theme }) => theme.spacing(2, 3)};
  padding: ${({ theme }) => theme.spacing(0, 0, 5)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const NewContactData = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'email email'
    'password passwordStrength'
    'passwordConfirmation passwordStrength';

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-areas:
      'email'
      'password'
      'passwordStrength'
      'passwordConfirmation';
  }
`;

export const PictureSelection = styled(BaseGrid)`
  grid-template-columns: 1fr;
  padding: 0;
`;

export const UserData = styled(BaseGrid)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'name name name'
    'birthDate document phone';

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-areas:
      'name'
      'birthDate'
      'document'
      'phone';
  }
`;

export const PaymentData = styled(BaseGrid)`
  grid-template-columns: 1fr 50px;
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

export const AddressData = styled(BaseGrid)`
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas:
    'zipCode zipCode state state city city city'
    'district district address address number address2 address2';

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-areas:
      'zipCode'
      'state'
      'city'
      'district'
      'address'
      'number'
      'address2';
  }
`;

export const FormContainerStyled = styled(Container)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiPaper-root {
      box-shadow: none;
    }
  }
`;

interface PageFormContainerProps {
  fullwidth: number;
}

export const PageFormContainerStyled = styled('div')<PageFormContainerProps>`
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

export const LoginData = styled(BaseGrid)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: right;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const FinancialData = styled(BaseGrid)`
  grid-template-columns: 1fr;
`;

export const CitiesSelection = styled(BaseGrid)`
  grid-template-columns: 1fr;
  grid-template-areas: 'busca-cidade';
`;

export const ContactData = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'email email'
    'senha-antiga senha-antiga'
    'nova-senha confirmar-senha'
    'password-strength _';

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-areas:
      'email'
      'senha-antiga'
      'nova-senha'
      'password-strength'
      'confirmar-senha';
  }
`;
