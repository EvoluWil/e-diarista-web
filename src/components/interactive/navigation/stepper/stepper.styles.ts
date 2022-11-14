import { styled, Stepper } from '@mui/material';

export const StepperContainer = styled(Stepper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
