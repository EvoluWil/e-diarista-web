import * as yup from 'yup';
import { sub } from 'date-fns';
import { cpfValidator } from 'utils/validators/cpf-validator.util';

export interface UserValidation {
  user: {
    email: string;
    password: string;
    passwordConfirmation: string;
    picture: File;
    fullName: string;
    birthDate: string;
    document: string;
    phone: string;
  };
}

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userValidation = () =>
  yup.object().shape({
    user: yup.object().shape({
      email: yup
        .string()
        .email('E-mail invalido')
        .required('E-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'Senha muito curta')
        .required('Senha é obrigatória'),
      passwordConfirmation: yup
        .string()
        .required('Confirmação de senha é obrigatória')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
      fullName: yup
        .string()
        .required('Nome é obrigatório')
        .matches(/^[a-zA-Z\s]/, 'Nome invalido')
        .matches(/^[a-zA-Z\s]+\s+[a-zA-Z]/, 'Informe seu sobrenome'),
      birthDate: yup
        .date()
        .typeError('Data invalida')
        .required('Data de nascimento é obrigatória')
        .max(
          sub(new Date(), { years: 18 }),
          'Para prosseguir é necessário ser maior de idade'
        )
        .min(sub(new Date(), { years: 100 }), 'Data de nascimento invalida')
        .nullable(),
      document: yup
        .string()
        .required('CPF é obrigatório')
        .transform((value: string) => value.replace(/\D/g, ''))
        .matches(/^[0-9]{11}$/, 'CPF deve conter "11" números')
        .test('cpfValidator', 'CPF Invalido', value => cpfValidator(value)),
      phone: yup
        .string()
        .transform((value: string) => value.replace(/\D/g, ''))
        .matches(/^[0-9]{11}$/, 'Telefone deve conter DDD + numero')
        .required('Telefone é obrigatório'),
      picture: yup
        .mixed()
        .nullable()
        .required('Imagem é obrigatória')
        .test(
          'pictureSize',
          'Tamanho do arquivo deve ter no máximo 5mb',
          value => value?.size <= 1024 * 1024
        )
        .test(
          'pictureType',
          'Selecione uma imagem valida (".jpg", ".jpeg", ".png")',
          value => SUPPORTED_FORMATS.includes(value?.type)
        )
    })
  });
