import React from 'react';
import { useController } from 'react-hook-form';
import { FileContainer, UploadIcon } from './file-picker.styles';
import { TextFieldStyled } from '../text-field/text-field.styles';
import { TextFieldStyledProps } from '../text-field/text-field.component';

interface FilePickerProps extends TextFieldStyledProps {}

export const FilePicker: React.FC<FilePickerProps> = ({
  control,
  name,
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
    <FileContainer>
      <TextFieldStyled
        label={'Selecione o arquivo'}
        error={!!helperText}
        value={field.value?.name || ''}
        helperText={helperText}
        fullWidth
        {...rest}
        InputProps={{ endAdornment: <UploadIcon className="ed-upload" /> }}
      />
      <TextFieldStyled
        type={'file'}
        name={field.name}
        onChange={(event: any) =>
          field.onChange(event.target?.files?.length && event.target?.files[0])
        }
        fullWidth
      />
    </FileContainer>
  );
};
