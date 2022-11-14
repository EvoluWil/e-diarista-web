import { addressValidation } from './address/address.validation';
import { paymentValidation } from './payment/payment.validation';
import { serviceDetailValidation } from './service-detail/service-detail.validation';
import { signInValidation } from './sign-in/sign-in.validation';
import { userValidation } from './user/user.validation';

export const FormSchema = {
  serviceDetailValidation,
  addressValidation,
  userValidation,
  signInValidation,
  paymentValidation
};
