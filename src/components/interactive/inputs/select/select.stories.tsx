import React from 'react';
import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './select.component';

export default {
  title: 'interactive/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => {
  const { control } = useForm();
  return <Select {...args} control={control} />;
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
