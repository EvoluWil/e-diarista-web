import React from 'react';
import InputMask from 'react-input-mask';
import { InputAdornment } from '@mui/material';
import { useController } from 'react-hook-form';

import { TextFieldStyledProps } from '../text-field/text-field.component';
import { TextFieldStyled } from '../text-field/text-field.styles';
import { Icon } from 'components/display/icon/icon.component';

interface TextFieldMaskProps extends TextFieldStyledProps {
  mask: string;
}

export const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  control,
  helperText,
  defaultValue,
  name,
  icon,
  hasHelper,
  error,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || ''
  });

  return (
    <InputMask mask={mask} value={field.value} onChange={field.onChange}>
      {() => (
        <TextFieldStyled
          fullWidth
          variant="outlined"
          name={field.name}
          error={hasHelper ? error : !!helperText}
          value={field.value}
          helperText={helperText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!!icon && <Icon name={icon} />}
              </InputAdornment>
            )
          }}
          {...rest}
        />
      )}
    </InputMask>
  );
};
