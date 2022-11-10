import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './text-field.component';
import { useForm } from 'react-hook-form';

export default {
  title: 'interactive/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => {
  const { control } = useForm();
  return <TextField {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  name: 'example',
  icon: 'person'
};
