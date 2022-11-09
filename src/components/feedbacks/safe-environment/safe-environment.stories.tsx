import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SafeEnvironment } from './safe-environment.component';

export default {
  title: 'feedbacks/SafeEnvironment',
  component: SafeEnvironment
} as ComponentMeta<typeof SafeEnvironment>;

const Template: ComponentStory<typeof SafeEnvironment> = args => (
  <SafeEnvironment />
);

export const Default = Template.bind({});
