import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserForm } from './user-forms.component';

export default {
  title: 'partials/UserForm',
  component: UserForm
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = args => <UserForm {...args} />;

export const Default = Template.bind({});
Default.args = {}


