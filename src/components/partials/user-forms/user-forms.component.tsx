import React from 'react';
import { UserFormContainer } from './user-forms.styles';

interface UserFormProps {}

export const UserForm: React.FC<UserFormProps> = () => {
  return (
    <UserFormContainer>
      Bem vindo á UserForm
    </UserFormContainer>
  );
};

