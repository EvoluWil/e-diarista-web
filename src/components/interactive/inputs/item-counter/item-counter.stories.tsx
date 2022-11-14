import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ItemCounter } from './item-counter.component';

export default {
  title: 'interactive/ItemCounter',
  component: ItemCounter
} as ComponentMeta<typeof ItemCounter>;

const Template: ComponentStory<typeof ItemCounter> = args => (
  <ItemCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Cozinha',
  plural: 'Cozinhas',
  value: 0
};
