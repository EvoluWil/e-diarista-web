import {
  OutlinedTextFieldProps,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Icon } from 'components/display/icon/icon.component';
import React, { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { TextFieldStyled } from './text-field.styles';

type OutlinedTextFieldPropsEdit = Omit<OutlinedTextFieldProps, 'variant'>;
export interface TextFieldStyledProps extends OutlinedTextFieldPropsEdit {
  control?: Control;
  name: string;
  icon?: string;
  helperText?: any;
  hasHelper?: boolean;
}
export const TextField: React.FC<TextFieldStyledProps> = ({
  control,
  helperText,
  defaultValue,
  name,
  icon,
  hasHelper,
  type,
  error,
  ...rest
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || ''
  });

  return (
    <TextFieldStyled
      fullWidth
      size="small"
      variant="outlined"
      name={field.name}
      error={hasHelper ? error : !!helperText}
      value={field.value}
      type={type === 'password' && !viewPassword ? 'password' : 'text'}
      helperText={helperText}
      onChange={field.onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {type === 'password' && (
              <IconButton
                tabIndex={-1}
                onClick={() => setViewPassword(prev => !prev)}
                edge="end"
                sx={{ color: '#B4B4C1' }}
              >
                {viewPassword ? (
                  <i className="material-icons">visibility_off</i>
                ) : (
                  <i className="material-icons">visibility</i>
                )}
              </IconButton>
            )}
            {!!icon && <Icon name={icon} />}
          </InputAdornment>
        )
      }}
      {...rest}
    />
  );
};
