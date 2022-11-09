import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header.component';

export default {
  title: 'surfaces/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Contained = Template.bind({});
