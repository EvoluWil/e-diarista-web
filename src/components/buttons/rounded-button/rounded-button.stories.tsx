import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoundedButton } from './rounded-button.component';

export default {
  title: 'buttons/RoundedButton',
  component: RoundedButton
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = args => (
  <RoundedButton {...args}>Click</RoundedButton>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained'
};
