import { styled } from '@mui/material';

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
