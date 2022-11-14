import * as yup from 'yup';

export interface SignInValidation {
  signIn: {
    email: string;
    password: string;
  };
}

export const signInValidation = () =>
  yup.object().shape({
    signIn: yup.object().shape({
      email: yup
        .string()
        .required('E-mail é obrigatório')
        .email('E-mail invalido'),
      password: yup.string().required('Senha é obrigatória')
    })
  });
