import { Container } from '@mui/material';
import { SafeEnvironmentContainer } from './safe-environment.styles';

export const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% Seguro <i className="ed-lock" />
      </Container>
    </SafeEnvironmentContainer>
  );
};
