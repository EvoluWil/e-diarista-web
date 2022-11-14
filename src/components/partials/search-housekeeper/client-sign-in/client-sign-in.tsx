import { TextField } from '@inputs/text-field/text-field.component';
import { useFormContext } from 'react-hook-form';
import { Link } from '@navigation/link/link.component';
import { SignInValidation } from 'data/validation/sign-in/sign-in.validation';
import {
  ClientSignInContainer,
  SignInContainer
} from './client-sign-in.styles';
import { Button } from '@buttons/button/button.component';
import { Typography } from '@mui/material';

interface ClientSignInProps {
  onBack: () => void;
}

export const ClientSignIn: React.FC<ClientSignInProps> = ({ onBack }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext<SignInValidation>();
  return (
    <SignInContainer>
      <TextField
        type="email"
        control={control}
        name="signIn.email"
        label="E-mail"
        helperText={errors?.signIn?.email?.message}
      />
      <TextField
        type="password"
        control={control}
        name="signIn.password"
        label="Senha"
        helperText={errors?.signIn?.password?.message}
      />
      <Typography variant="body2">
        Esqueceu sua senha? <Link href="/password-recovery">Recuperar</Link>
      </Typography>
      <ClientSignInContainer>
        <Button variant="outlined" type="button" onClick={onBack}>
          Voltar para detalhes da diária
        </Button>
        <Button color="secondary" type="submit">
          Ir para Pagamento
        </Button>
      </ClientSignInContainer>
    </SignInContainer>
  );
};
