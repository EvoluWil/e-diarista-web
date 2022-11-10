import { styled, TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-radius: ${({ theme }) => theme.spacing(1)};
  }
  .MuiOutlinedInput-input {
    border-radius: ${({ theme }) => theme.spacing(1)};

    &:-webkit-autofill {
      border-radius: ${({ theme }) => theme.spacing(1)};
      margin: 2px;
      box-shadow: 0 0 0 100px #fdfdff inset;
    }
  }
`;
