import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserCard } from './user-card.component';

export default {
  title: 'display/UserCard',
  component: UserCard
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = args => (
  <UserCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Willian Rodrigues',
  picture: 'https://github.com/willian-rodrigues.png',
  rating: 3,
  description: 'São José dos Campos'
};

export const IsRating = Template.bind({});
IsRating.args = {
  name: 'Willian Rodrigues',
  picture: 'https://github.com/willian-rodrigues.png',
  rating: 3,
  description: 'São José dos Campos',
  isRating: true
};
