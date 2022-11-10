//import { toast } from 'react-toastify';

export const getNestError = (err: any) => {
  if (typeof err?.response?.data?.message === 'string') {
    return err?.response?.data?.message;
  }
  return (
    err?.response?.data?.message[0] ||
    'Ops! Algo deu errado, tente novamente mais tarde.'
  );
};

/* export const NestError = (err: any) => {
  toast.error(getNestError(err));
};

export const NestSuccess = (message?: string) => {
  toast.success(message ? message : 'Operação realizada com sucesso');
};
 */
