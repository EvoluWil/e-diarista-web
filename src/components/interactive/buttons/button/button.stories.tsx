import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button.component';

export default {
  title: 'interactive/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Click</Button>
);

export const Default = Template.bind({});
Default.args = {};
