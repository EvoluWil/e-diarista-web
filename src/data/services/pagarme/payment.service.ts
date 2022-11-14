import pagarme, { CardInterface, CardValidateInterface } from 'pagarme';

export const PaymentService = {
  validate(card: CardInterface): CardValidateInterface {
    return pagarme.validate({ card }).card;
  },
  defaultCard: {
    card_cvv: '',
    card_number: '',
    card_holder_name: '',
    card_expiration_date: ''
  }
};
