import { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { steps } from 'data/constants/steps-hire-professional.constant';
import { FormSchema } from 'data/validation/form-schema.validation';
import { Service } from '@models/service.model';
import { UserValidation } from 'data/validation/user/user.validation';
import { ServiceDetailValidation } from 'data/validation/service-detail/service-detail.validation';
import { AddressValidation } from 'data/validation/address/address.validation';
import { SignInValidation } from 'data/validation/sign-in/sign-in.validation';
import { PaymentValidation } from 'data/validation/payment/payment.validation';
import { useApi } from '../api.hook';

export interface ServiceForm
  extends ServiceDetailValidation,
    AddressValidation {}

export const useHireProfessional = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [step, setStep] = useState(0);

  const serviceForm = useForm<ServiceForm>({
    resolver: yupResolver(
      FormSchema.addressValidation().concat(
        FormSchema.serviceDetailValidation()
      )
    )
  });

  const signInForm = useForm<SignInValidation>({
    resolver: yupResolver(FormSchema.signInValidation())
  });

  const paymentForm = useForm<PaymentValidation>({
    resolver: yupResolver(FormSchema.paymentValidation())
  });

  const clientForm = useForm<UserValidation>({
    resolver: yupResolver(FormSchema.userValidation())
  });

  const services = useApi<Service[]>('/api/servicos') || [];

  const getServiceTimeInterval = (serviceData: ServiceDetailValidation) => {
    if (serviceData.service) {
    }
  };

  const onServiceSubmit = (data: ServiceForm) => {
    console.log(data);
    setStep(prev => prev + 1);
  };

  const onClientSubmit = (data: UserValidation) => {
    console.log(data);
    setStep(prev => prev + 1);
  };

  const onPaymentSubmit = (data: PaymentValidation) => {
    console.log(data);
    setStep(prev => prev + 1);
  };

  const onSignInSubmit = (data: SignInValidation) => {
    console.log('zzzzzzzzzzzzzzzzz', data);
  };

  return {
    step,
    steps,
    setStep,
    serviceForm,
    clientForm,
    signInForm,
    paymentForm,
    onServiceSubmit,
    onClientSubmit,
    onSignInSubmit,
    onPaymentSubmit,
    services,
    hasAccount,
    setHasAccount
  };
};
