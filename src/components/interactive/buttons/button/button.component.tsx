import React, { PropsWithChildren } from 'react';
import { ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material';
import { ButtonStyled } from './button.styles';

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  loading,
  disabled,
  variant = 'contained',
  children,
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} disabled={disabled || loading} {...rest}>
      {loading ? <CircularProgress size={26} /> : children}
    </ButtonStyled>
  );
};
