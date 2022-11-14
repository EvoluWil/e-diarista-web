import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './date-picker.component';
import { useForm } from 'react-hook-form';

export default {
  title: 'interactive/DatePicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
  const { control } = useForm();
  return <DatePicker {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  name: 'example',
  icon: 'person'
};
