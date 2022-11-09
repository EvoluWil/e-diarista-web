import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './text-field.component';

export default {
  title: 'interactive/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Default = Template.bind({});


