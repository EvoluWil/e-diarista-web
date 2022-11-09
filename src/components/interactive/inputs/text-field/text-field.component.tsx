import React from 'react';
import { TextFieldContainer } from './text-field.styles';

interface TextFieldProps {}

export const TextField: React.FC<TextFieldProps> = () => {
  return (
    <TextFieldContainer>
      Bem vindo á TextField
    </TextFieldContainer>
  );
};

