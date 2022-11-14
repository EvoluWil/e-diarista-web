import { AddressService } from '@services/address/address.service';
import { AddressValidation } from 'data/validation/address/address.validation';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useAddress = () => {
  const [cities, setCities] = useState<{ value: number; label: string }[]>([]);
  const [zipCodeLoading, setZipCodeLoading] = useState(false);
  const [zipCodeError, setZipCodeError] = useState('');
  const {
    control,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<AddressValidation>();

  const [addressState, addressCity, addressZipCode] = watch([
    'address.state',
    'address.city',
    'address.zipCode'
  ]);

  useEffect(() => {
    const getCities = async () => {
      try {
        setCities([]);
        setValue('address.city', '');
        const cities = await AddressService.getCities(addressState);
        setCities(cities);
      } catch (err) {
        return console.log(err);
      }
    };
    if (addressState) {
      getCities();
    }
  }, [addressState, setValue]);

  useEffect(() => {
    const getAddress = async () => {
      try {
        setZipCodeLoading(true);
        setZipCodeError('');

        const address = await AddressService.getAddressByCep(addressZipCode);
        Object.keys(address).forEach((key, index) => {
          return setValue(
            `address.${key}` as any,
            Object.values(address)[index]
          );
        });
      } catch (err) {
        setZipCodeError('CEP não encontrado');
        return console.log(err);
      } finally {
        setZipCodeLoading(false);
      }
    };
    if (addressZipCode?.replace(/\D/g, '')?.length === 8) {
      getAddress();
    }
  }, [addressZipCode, setValue]);

  useEffect(() => {
    if (addressCity) {
      const city = cities.find(city => city.label === addressCity);
      if (city) {
        setValue('address.ibgeCode', city.value);
      }
    }
  }, [addressCity, cities, setValue]);

  return { control, errors, cities, zipCodeLoading, zipCodeError };
};
