import React from 'react';
import { MenuItem } from '@mui/material';
import { useController } from 'react-hook-form';
import { TextFieldStyled } from '../text-field/text-field.styles';
import { TextFieldStyledProps } from '../text-field/text-field.component';

interface SelectProps extends TextFieldStyledProps {
  options: { value: any; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  control,
  helperText,
  defaultValue,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || ''
  });

  return (
    <TextFieldStyled
      select
      error={!!helperText}
      helperText={helperText}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      fullWidth
      {...rest}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextFieldStyled>
  );
};
