import { Typography, Container, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { TextField } from '@inputs/text-field/text-field.component';
import { PaymentContainer } from './payment.styles';
import { Button } from '@buttons/button/button.component';
import { TextFieldMask } from '@inputs/text-field-mask/text-field-mask.component';
import { PaymentValidation } from 'data/validation/payment/payment.validation';

interface PaymentSignInProps {
  onBack: () => void;
}

export const PaymentSignIn: React.FC<PaymentSignInProps> = ({ onBack }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext<PaymentValidation>();
  return (
    <div>
      <Typography fontWeight="bold" pb={2}>
        Informações de pagamento
      </Typography>
      <PaymentContainer>
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
      </PaymentContainer>

      <Box textAlign="right" display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" type="button" onClick={onBack}>
          Voltar para identificação
        </Button>
        <Button color="secondary" type="submit">
          Fazer pagamento
        </Button>
      </Box>
    </div>
  );
};
