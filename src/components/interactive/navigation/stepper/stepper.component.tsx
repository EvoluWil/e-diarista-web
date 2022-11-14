import React, { useMemo } from 'react';
import { Step, StepLabel } from '@mui/material';
import { StepperContainer } from './stepper.styles';
import { Icon } from 'components/display/icon/icon.component';

interface StepperProps {
  steps: string[];
  current: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, current }) => {
  return (
    <StepperContainer
      activeStep={current}
      connector={
        <Icon
          sx={{ textAlign: 'center', color: 'text.secondary' }}
          name="chevron_right"
        />
      }
    >
      {steps.map((step, index) => (
        <Step key={step} completed={index < current}>
          <StepLabel
            sx={{
              '.MuiStepLabel-label': {
                fontSize: {
                  xs: 10,
                  sm: 14
                }
              }
            }}
          >
            {index === current ? <strong>{step}</strong> : step}
          </StepLabel>
        </Step>
      ))}
    </StepperContainer>
  );
};
