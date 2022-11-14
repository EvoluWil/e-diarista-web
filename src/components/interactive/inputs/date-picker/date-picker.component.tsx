import React from 'react';
import { ptBR } from '@mui/x-date-pickers/locales';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useController } from 'react-hook-form';
import { TextFieldStyledProps } from '../text-field/text-field.component';
import { TextFieldStyled } from '../text-field/text-field.styles';

interface DatePickerProps extends TextFieldStyledProps {
  maxDate?: Date;
  minDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  maxDate,
  minDate,
  defaultValue,
  control,
  helperText,
  name,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || null
  });

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DesktopDatePicker
        maxDate={maxDate}
        minDate={minDate}
        label={rest.label}
        inputFormat={'dd/MM/yyyy'}
        value={field.value}
        onChange={field.onChange}
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
    </LocalizationProvider>
  );
};
