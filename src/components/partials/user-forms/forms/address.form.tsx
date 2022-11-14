import React from 'react';
import { CircularProgress } from '@mui/material';
import { TextField } from '@inputs/text-field/text-field.component';
import { AddressData } from '../user-forms.styles';
import { TextFieldMask } from '@inputs/text-field-mask/text-field-mask.component';
import { Select } from '@inputs/select/select.component';
import { stateList } from 'data/constants/states.constant';
import { Autocomplete } from '@inputs/autocomplete/autocomplete.component';
import { useAddress } from 'data/hooks/address.hook';

interface AddressProps {}

export const AddressForm: React.FC<AddressProps> = () => {
  const { control, errors, cities, zipCodeError, zipCodeLoading } =
    useAddress();

  return (
    <AddressData>
      <TextFieldMask
        mask="99.999-999"
        control={control}
        name="address.zipCode"
        label="CEP"
        style={{ gridArea: 'zipCode' }}
        helperText={errors?.address?.zipCode?.message || zipCodeError}
        InputProps={{
          endAdornment: <>{zipCodeLoading && <CircularProgress size={20} />}</>
        }}
      />
      <Select
        control={control}
        name="address.state"
        label="Estado"
        sx={{ gridArea: 'state' }}
        helperText={errors?.address?.state?.message}
        options={stateList}
      />
      <Autocomplete
        control={control}
        name="address.city"
        label="Cidade"
        sx={{ gridArea: 'city' }}
        helperText={errors?.address?.city?.message}
        options={cities}
      />
      <TextField
        control={control}
        name="address.district"
        label="Bairro"
        style={{ gridArea: 'district' }}
        helperText={errors?.address?.district?.message}
      />
      <TextField
        control={control}
        name="address.address"
        label="Endereço"
        style={{ gridArea: 'address' }}
        helperText={errors?.address?.address?.message}
      />
      <TextField
        control={control}
        name="address.number"
        label="Numero"
        style={{ gridArea: 'number' }}
        helperText={errors?.address?.number?.message}
      />
      <TextField
        control={control}
        name="address.address2"
        label="Complemento"
        style={{ gridArea: 'address2' }}
        helperText={errors?.address?.address2?.message}
      />
    </AddressData>
  );
};
