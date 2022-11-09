import { ButtonProps } from '@mui/material';
import { RoundedButtonStyled } from './rounded-button.styles';

export const RoundedButton: React.FC<ButtonProps> = props => {
  return <RoundedButtonStyled {...props} />;
};
