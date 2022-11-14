import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '@inputs/text-field/text-field.component';
import { PaymentData } from '../user-forms.styles';
import { TextFieldMask } from '@inputs/text-field-mask/text-field-mask.component';
import { FormState } from 'data/validation/new-contact.validation';
import { Typography } from '@mui/material';

interface PaymentProps {}

export const PaymentForm: React.FC<PaymentProps> = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext<FormState>();

  return (
    <PaymentData>
      <TextFieldMask
        mask="9999 9999 9999 9999"
        control={control}
        name="payment.cardNumber"
        label="Numero do cartão"
        style={{ gridArea: 'number' }}
        helperText={errors?.payment?.cardNumber?.message}
      />
      <TextField
        control={control}
        name="payment.cardName"
        label="Nome no Cartão"
        style={{ gridArea: 'name' }}
        helperText={errors?.payment?.cardName?.message}
      />
      <TextFieldMask
        mask="99/99"
        control={control}
        name="payment.cardExpiration"
        label="Validade"
        style={{ gridArea: 'expiration' }}
        helperText={errors?.payment?.cardExpiration?.message}
      />
      <TextFieldMask
        mask="999"
        control={control}
        name="payment.cardCvv"
        label="Nome no Cartão"
        style={{ gridArea: 'code' }}
        helperText={errors?.payment?.cardCvv?.message}
      />

      {!!errors?.recusedPayment && (
        <Typography color="error" gridArea="error" textAlign="center">
          {errors?.recusedPayment?.message}
        </Typography>
      )}
    </PaymentData>
  );
};
