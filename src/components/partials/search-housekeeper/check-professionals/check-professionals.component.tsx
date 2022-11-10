import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert, Container, Typography } from '@mui/material';

import { Title } from 'components/display/title/title.component';
import { SafeEnvironment } from 'components/feedbacks/safe-environment/safe-environment.component';
import { TextFieldMask } from 'components/interactive/inputs/text-field-mask/text-field-mask.component';
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from './check-professionals.styles';
import { UserCard } from 'components/display/cards/user-card/user-card.component';
import { useCheckProfessionals } from '@page-hooks/check-professionals.hook';
import { Button } from 'components/interactive/buttons/button/button.component';

interface CheckProfessionalsProps {}

export const CheckProfessionals: React.FC<CheckProfessionalsProps> = () => {
  const {
    housekeepers,
    housekeepersCount,
    error,
    loading,
    submitted,
    getHousekeepers,
    CheckProfessionalsValidation
  } = useCheckProfessionals();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CheckProfessionalsValidation)
  });

  return (
    <>
      <SafeEnvironment />
      <Title
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
        sx={{ px: 2 }}
      />
      <Container sx={{ mb: 10 }}>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            name="cep"
            control={control}
            label="Digite seu CEP"
            helperText={errors?.cep?.message || error}
          />

          <Button
            onClick={handleSubmit(getHousekeepers)}
            color="secondary"
            loading={loading}
            sx={{ width: 220 }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        {submitted &&
          (!!housekeepers?.length ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {housekeepers.map(housekeeper => (
                  <UserCard
                    key={housekeeper.fullName}
                    name={housekeeper.fullName}
                    picture={housekeeper.picture ?? ''}
                    rating={housekeeper.rating ?? 0}
                    description={housekeeper.city}
                  />
                ))}
              </ProfessionalsContainer>

              <Container sx={{ textAlign: 'center' }}>
                {!!housekeepersCount && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 5 }}
                  >
                    ...e mais {housekeepersCount}
                    {housekeepersCount > 1
                      ? ' profissionais atendem '
                      : ' profissional atende '}
                    .
                  </Typography>
                )}
                <Button color="secondary" sx={{ mt: 5 }}>
                  Contratar um(a) profissional
                </Button>
              </Container>
            </ProfessionalsPaper>
          ) : (
            <Alert severity="info" sx={{ maxWidth: 520, mx: 'auto' }}>
              <Typography align="center" variant="body2" color="textPrimary">
                Ainda não temos nenhum(a) diarista disponível em sua região
              </Typography>
            </Alert>
          ))}
      </Container>
    </>
  );
};
