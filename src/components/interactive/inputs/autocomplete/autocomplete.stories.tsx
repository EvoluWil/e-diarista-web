import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Autocomplete } from './autocomplete.component';
import { useForm } from 'react-hook-form';

export default {
  title: 'interactive/Autocomplete',
  component: Autocomplete
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = args => {
  const { control } = useForm();
  return <Autocomplete {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  name: 'example',
  icon: 'person',
  options: [
    { label: 'lavar', value: 'lavar' },
    { label: 'passar', value: 'passar' }
  ]
};
