import React from 'react';
import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilePicker } from './file-picker.component';

export default {
  title: 'interactive/FilePicker',
  component: FilePicker
} as ComponentMeta<typeof FilePicker>;

const Template: ComponentStory<typeof FilePicker> = args => {
  const { control } = useForm();
  return <FilePicker {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  name: 'example',
  icon: 'person'
};
