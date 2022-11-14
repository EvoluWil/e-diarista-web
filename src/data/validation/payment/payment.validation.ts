import * as yup from 'yup';
import { PaymentService } from '@services/pagarme/payment.service';

export interface PaymentValidation {
  payment: {
    cardNumber: string;
    cardName: string;
    cardExpiration: string;
    cardCvv: string;
  };

  recusedPayment: string;
}

export const paymentValidation = () =>
  yup.object().shape({
    payment: yup.object().shape({
      cardNumber: yup
        .string()
        .required('Número do cartão é obrigatório')
        .test(
          'cardNumber',
          'Numero de cartão invalido',
          value =>
            PaymentService.validate({
              ...PaymentService.defaultCard,
              card_number: value ?? ''
            }).card_number
        ),
      cardName: yup.string().required('Nome no cartão é obrigatório'),
      cardExpiration: yup
        .string()
        .required('Data de expiração é obrigatória')
        .test(
          'cardExpiration',
          'Data de expiração invalida',
          value =>
            PaymentService.validate({
              ...PaymentService.defaultCard,
              card_expiration_date: value ?? ''
            }).card_expiration_date
        ),
      cardCvv: yup
        .string()
        .required('Código de validação é obrigatório')
        .test(
          'cardCvv',
          'Código de validação invalido',
          value =>
            PaymentService.validate({
              ...PaymentService.defaultCard,
              card_cvv: value ?? ''
            }).card_cvv
        )
    })
  });
