import React from 'react';
import { Autocomplete as AutocompleteBase } from '@mui/material';
import { useController } from 'react-hook-form';
import { TextFieldStyledProps } from '../text-field/text-field.component';
import { TextFieldStyled } from '../text-field/text-field.styles';

interface AutocompleteProps extends TextFieldStyledProps {
  options: any[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  defaultValue,
  helperText,
  control,
  options,
  name,
  sx,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || ''
  });

  return (
    <AutocompleteBase
      options={options}
      value={field.value}
      onChange={(_event, newValue) => field.onChange(newValue)}
      isOptionEqualToValue={(option, value) =>
        option.label === value.label || !value
      }
      disablePortal
      sx={sx}
      renderInput={params => (
        <TextFieldStyled
          {...rest}
          {...params}
          error={!!helperText}
          helperText={helperText}
          variant={'outlined'}
          name={field.name}
          value={field.value}
          fullWidth
        />
      )}
    />
  );
};
