import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './icon.component';

export default {
  title: 'display/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'person',
  sx: {
    color: 'primary.main'
  }
};
