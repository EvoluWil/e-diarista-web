import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from './title.component';

export default {
  title: 'display/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Titulo',
  subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
};
