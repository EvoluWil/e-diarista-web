import { useState } from 'react';
import * as yup from 'yup';
import { UserInformation } from '@models/user-information.model';
import { UserService } from '@services/api/user.service';
import { FieldValues } from 'react-hook-form';
import { getNestError } from 'utils/formatter/get-nest-error.util';

const CheckProfessionalsValidation = yup.object().shape({
  cep: yup
    .string()
    .transform((value: string) => value.replace(/\D/g, ''))
    .matches(/^[0-9]{8}$/, 'Cep deve conter "8" números')
    .required('Cep é obrigatório')
});

export const useCheckProfessionals = () => {
  const [housekeepers, setHousekeepers] = useState<UserInformation[]>([]);
  const [housekeepersCount, setHousekeepersCount] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getHousekeepers = async ({ cep }: FieldValues) => {
    setError('');
    setLoading(true);
    setSubmitted(false);

    try {
      const data = await UserService.getUsersByCep(cep);
      setSubmitted(true);
      setHousekeepers(data.housekeepers);
      setHousekeepersCount(data.count);
    } catch (err) {
      setError(getNestError(err));
    } finally {
      setLoading(false);
    }
  };

  return {
    housekeepers,
    housekeepersCount,
    error,
    loading,
    submitted,
    getHousekeepers,
    CheckProfessionalsValidation
  };
};
