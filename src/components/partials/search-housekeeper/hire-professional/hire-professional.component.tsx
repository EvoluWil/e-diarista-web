import { Button } from '@buttons/button/button.component';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from '@navigation/link/link.component';
import { Stepper } from '@navigation/stepper/stepper.component';
import { useHireProfessional } from '@page-hooks/hire-professional.hook';
import { SideInformationCard } from 'components/display/cards/side-information-card/side-information-card.component';
import { Title } from 'components/display/title/title.component';
import { SafeEnvironment } from 'components/feedbacks/safe-environment/safe-environment.component';
import { useIsMobile } from 'data/hooks/is-mobile.hook';
import { FormProvider } from 'react-hook-form';
import { ClientRegister } from '../client-register/client-register';
import { ClientSignIn } from '../client-sign-in/client-sign-in';
import { PaymentSignIn } from '../payment/payment.component';
import { ServiceDetail } from '../service-detail/service-detail.component';
import { FormContainer, PageFormContainer } from './hire-professional.styles';

export const HireProfessional = () => {
  const {
    step,
    steps,
    setStep,
    serviceForm,
    clientForm,
    signInForm,
    paymentForm,
    onClientSubmit,
    onServiceSubmit,
    onSignInSubmit,
    onPaymentSubmit,
    services,
    setHasAccount,
    hasAccount
  } = useHireProfessional();
  const isMobile = useIsMobile();

  return (
    <div>
      {!isMobile && <SafeEnvironment />}
      <Stepper steps={steps} current={step} />

      {step === 0 && <Title title="Nos conte um pouco sobre o serviço!" />}

      {step === 1 && (
        <Title
          title="Precisamos saber um pouco sobre você!"
          subtitle={
            hasAccount ? (
              <span>
                Ja possuí cadastro?,{' '}
                <Button variant="text" onClick={() => setHasAccount(false)}>
                  clique aqui
                </Button>
              </span>
            ) : (
              <span>
                Ainda não tem cadastro?,{' '}
                <Button variant="text" onClick={() => setHasAccount(true)}>
                  clique aqui
                </Button>
              </span>
            )
          }
        />
      )}

      {step === 2 && (
        <Title
          title="Informe os dados do cartão!"
          subtitle="Será feita uma reserva, mas o valor só será descontado quando você confirmar a presença do/da diarista"
        />
      )}

      <FormContainer>
        <PageFormContainer fullwidth={step === 3 ? 1 : 0}>
          <Paper sx={{ p: 4 }}>
            <FormProvider {...serviceForm}>
              <form
                onSubmit={serviceForm.handleSubmit(onServiceSubmit)}
                hidden={step !== 0}
              >
                <ServiceDetail services={services} />
              </form>
            </FormProvider>

            <FormProvider {...clientForm}>
              <form
                onSubmit={clientForm.handleSubmit(onClientSubmit)}
                hidden={step !== 1 || hasAccount}
              >
                <ClientRegister onBack={() => setStep(prev => prev - 1)} />
              </form>
            </FormProvider>

            {step === 1 && hasAccount && (
              <FormProvider {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(onSignInSubmit)}>
                  <ClientSignIn onBack={() => setStep(prev => prev - 1)} />
                </form>
              </FormProvider>
            )}

            {step === 2 && (
              <FormProvider {...paymentForm}>
                <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)}>
                  <PaymentSignIn onBack={() => setStep(prev => prev - 1)} />
                </form>
              </FormProvider>
            )}

            {step === 3 && (
              <Box textAlign="center" my={4}>
                <Typography fontSize={62} color="secondary">
                  <i className="ed-check-circle" />
                </Typography>

                <Typography variant="h5" color="secondary" pb={3}>
                  Pagamento realizado com sucesso
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={3}
                  mx="auto"
                  maxWidth={410}
                >
                  Sua diária foi paga com sucesso! Já estamos procurando o(a)
                  melhor profissional para atender sua residência. Caso
                  nenhum(a) profissional seja encontrado(a), devolvemos seu
                  dinheiro automaticamente 24 horas antes da data agendada. Você
                  também pode cancelar a sua diária sem nenhuma multa até 24
                  horas antes da hora do agendamento.
                </Typography>
                <Link
                  href="/diaria"
                  component={Button}
                  mui={{ variant: 'contained', color: 'secondary' }}
                >
                  Ir para minhas diárias
                </Link>
              </Box>
            )}
          </Paper>

          {!isMobile && step !== 3 && (
            <SideInformationCard
              title="Detalhes"
              items={[{ title: '', description: [], icon: 'ed-check-circle' }]}
              footer={{
                value: '82,00',
                icon: 'ed-credit-card'
              }}
            />
          )}
        </PageFormContainer>
      </FormContainer>
    </div>
  );
};
