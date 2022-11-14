import { add } from 'date-fns';
import * as yup from 'yup';

export interface ServiceDetailValidation {
  service: {
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    type: number;
  };
}

export const serviceDetailValidation = () =>
  yup.object().shape({
    service: yup.object().shape({
      date: yup
        .date()
        .typeError('Data invalida')
        .required('Data do serviço é obrigatória')
        .min(
          add(new Date(), { hours: 48 }),
          'O serviço deve ser agendado com 48 horas de antecedência'
        )
        .nullable(),
      startTime: yup
        .string()
        .matches(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/, 'Hora invalida')
        .test(
          'startTime',
          'O serviço não deve começar antes das 06:00',
          value => {
            if (value) {
              const [hours] = value.split(':');
              return Number(hours) >= 6;
            }
            return false;
          }
        ),
      endTime: yup
        .string()
        .matches(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/, 'Hora invalida')
        .test('endTime', 'O serviço não deve encerrar após as 22:00', value => {
          if (value) {
            const [hours, minutes] = value.split(':');
            if (Number(hours) < 22) {
              return true;
            } else if (Number(hours) === 22) {
              return Number(minutes) === 0;
            }
            return false;
          }
          return false;
        })
        .test(
          'serviceInterval',
          'O serviço não deve levar mais de 8 horas',
          (value, data) => {
            if (value) {
              const [endTime] = value.split(':'),
                [startTime] = data.parent?.startTime?.split(':') ?? [''];

              return Number(endTime) - Number(startTime) <= 8;
            }

            return false;
          }
        )
    })
  });
