import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextFieldMask } from './text-field-mask.component';
import { useForm } from 'react-hook-form';

export default {
  title: 'interactive/TextFieldMask',
  component: TextFieldMask
} as ComponentMeta<typeof TextFieldMask>;

const Template: ComponentStory<typeof TextFieldMask> = args => {
  const { control } = useForm();
  return <TextFieldMask {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  mask: '99/99/9999',
  label: 'Label',
  name: 'example',
  icon: 'person'
};
