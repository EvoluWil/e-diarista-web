import { Divider, Typography, Box, Tooltip, Container } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { Service } from '@models/service.model';
import {
  ToggleButton,
  ToggleButtonGroup
} from '@inputs/toggle-button-group/toggle-button-group.component';
import { AddressForm } from 'components/partials/user-forms/forms/address.form';
import { ItemCounter } from '@inputs/item-counter/item-counter.component';
import { houseParts } from 'data/constants/house-parts';
import { DatePicker } from '@inputs/date-picker/date-picker.component';
import { add } from 'date-fns';
import { ServiceDetailValidation } from 'data/validation/service-detail/service-detail.validation';
import { TextFieldMask } from '@inputs/text-field-mask/text-field-mask.component';
import { TextField } from '@inputs/text-field/text-field.component';
import { Button } from '@buttons/button/button.component';

interface ServiceDetailProps {
  services?: Service[];
  rooms?: number;
  availableService?: boolean;
}
export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  services = [],
  rooms = 0,
  availableService
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext<ServiceDetailValidation>();
  console.log(services);
  if (!services?.length) {
    return <div />;
  }

  return (
    <div>
      <Typography fontWeight="bold" mb={2}>
        Escolha o tipo de limpeza que você precisa
      </Typography>
      <Controller
        name="service.type"
        defaultValue={services[0]?.id}
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            exclusive
            value={field.value}
            onChange={(_event, value) =>
              field.onChange(value ?? services[0]?.id)
            }
          >
            {services?.map(service => (
              <ToggleButton key={service.id} value={service.id}>
                <i className={service.icon ?? 'ed-cleaning-1'} />
                {service.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      />

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Tamanho do imóvel
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
        gap={3}
      >
        {houseParts.map(item => (
          <Controller
            key={item.name}
            name={`service.${item.name}` as any}
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <ItemCounter
                label={item.singular}
                plural={item.plural}
                value={Number(field.value)}
                onAdd={() => field.onChange(field.value + 1)}
                onSub={() => field.onChange(Math.max(0, field.value - 1))}
              />
            )}
          />
        ))}
      </Box>

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Data do atendimento
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
        gap={3}
      >
        <DatePicker
          control={control}
          minDate={add(new Date(), { days: 2 })}
          name="service.date"
          label="Data do atendimento"
          helperText={errors?.service?.date?.message}
        />
        <TextFieldMask
          mask="99:99"
          control={control}
          name="service.startTime"
          label="Hora inicio"
          helperText={errors?.service?.startTime?.message}
        />
        <Tooltip title="Hora final é definida automaticamente">
          <Box>
            <TextFieldMask
              mask="99:99"
              control={control}
              name="service.endTime"
              label="Hora término"
              helperText={errors?.service?.endTime?.message}
              InputProps={{ readOnly: true, disabled: true }}
            />
          </Box>
        </Tooltip>
      </Box>

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Observações
      </Typography>
      <TextField
        control={control}
        name="service.description"
        label="Deseja acrescentar algo?"
        multiline
        minRows={5}
      />

      <Divider sx={{ my: 5 }} />

      <Typography fontWeight="bold" mb={2}>
        Endereço onde será realizado o serviço
      </Typography>
      <AddressForm />

      {!availableService && (
        <Typography color="error" align="center">
          Infelizmente ainda não atendemos na sua região!
        </Typography>
      )}

      <Box textAlign="right">
        <Button
          color="secondary"
          type="submit"
          disabled={!rooms || !availableService}
        >
          Ir para identificação
        </Button>
      </Box>
    </div>
  );
};
