import * as yup from 'yup';

export interface AddressValidation {
  address: {
    zipCode: string;
    district: string;
    city: string;
    state: string;
    number: string;
    address: string;
    address2: string;
    ibgeCode: number;
  };
}

export const addressValidation = () =>
  yup.object().shape({
    address: yup.object().shape({
      zipCode: yup
        .string()
        .transform((value: string) => value.replace(/\D/g, ''))
        .matches(/^[0-9]{8}$/, 'Cep deve conter "8" números')
        .required('Cep é obrigatório'),
      state: yup.string().required('Estado é obrigatório'),
      city: yup.string().required('Cidade é obrigatória'),
      district: yup.string().required('Bairro é obrigatório'),
      address: yup.string().required('Logradouro é obrigatório'),
      number: yup.string().required('Numero é obrigatório')
    })
  });
