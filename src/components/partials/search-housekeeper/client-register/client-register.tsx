import { Typography, Box, Divider } from '@mui/material';
import { sub } from 'date-fns';
import { useFormContext } from 'react-hook-form';

import { DatePicker } from '@inputs/date-picker/date-picker.component';
import { TextFieldMask } from '@inputs/text-field-mask/text-field-mask.component';
import { TextField } from '@inputs/text-field/text-field.component';
import { Button } from '@buttons/button/button.component';
import {
  NewContactData,
  UserData
} from 'components/partials/user-forms/user-forms.styles';
import { FilePicker } from '@inputs/file-picker/file-picker.component';
import { UserValidation } from 'data/validation/user/user.validation';
import { PasswordStrength } from 'components/feedbacks/password-strength/password-strength.component';

interface ClientRegisterProps {
  onBack: () => void;
}
export const ClientRegister: React.FC<ClientRegisterProps> = ({ onBack }) => {
  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext<UserValidation>();

  return (
    <div>
      <Typography fontWeight="bold" mb={2}>
        Dados pessoais
      </Typography>
      <UserData>
        <TextField
          control={control}
          name="user.fullName"
          label="Nome Completo"
          style={{ gridArea: 'name' }}
          helperText={errors?.user?.fullName?.message}
        />
        <DatePicker
          control={control}
          minDate={sub(new Date(), { years: 18 })}
          name="user.birthDate"
          label="Data de Nascimento"
          style={{ gridArea: 'birthDate' }}
          helperText={errors?.user?.birthDate?.message}
        />
        <TextFieldMask
          mask="999.999.999-99"
          control={control}
          name="user.document"
          label="CPF"
          style={{ gridArea: 'document' }}
          helperText={errors?.user?.document?.message}
          /*           InputProps={{ readOnly: !isRegister }}
           */
        />
        <TextFieldMask
          mask="(99) 9 9999-9999"
          control={control}
          name="user.phone"
          label="Telefone"
          style={{ gridArea: 'phone' }}
          helperText={errors?.user?.phone?.message}
        />
      </UserData>

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Hora da self! Envie uma imagem segurando o documento
      </Typography>
      <FilePicker
        control={control}
        name="user.picture"
        inputProps={{ accept: 'image/*' }}
        helperText={errors?.user?.picture?.message}
      />
      <Typography mb={2} pt={1} variant="caption">
        Essa foto é apenas para validação e não será vistá por ninguém!
      </Typography>

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Dados de acesso
      </Typography>
      <NewContactData>
        <TextField
          type="email"
          control={control}
          name="user.email"
          label="E-mail"
          style={{ gridArea: 'email' }}
          helperText={errors?.user?.email?.message}
        />
        <TextField
          type="password"
          control={control}
          name="user.password"
          label="Senha"
          style={{ gridArea: 'password' }}
          helperText={errors?.user?.password?.message}
        />
        <TextField
          type="password"
          control={control}
          name="user.passwordConfirmation"
          label="Confirmação de senha"
          style={{ gridArea: 'passwordConfirmation' }}
          helperText={errors?.user?.passwordConfirmation?.message}
        />
        <PasswordStrength password={watch('user.password')} />
      </NewContactData>

      <Box textAlign="right" display="flex" justifyContent="space-between">
        <Button variant="outlined" type="button" onClick={onBack}>
          Voltar para detalhes da diária
        </Button>
        <Button color="secondary" type="submit">
          Ir para Pagamento
        </Button>
      </Box>
    </div>
  );
};
