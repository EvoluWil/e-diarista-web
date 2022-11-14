import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stepper } from './stepper.component';

export default {
  title: 'interactive/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = args => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Coxinha', 'Kibe', 'Risole'],
  current: 1
};
