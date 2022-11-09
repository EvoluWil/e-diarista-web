import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './link.component';

export default {
  title: 'navigation/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <Link {...args}>Click</Link>
);

export const Default = Template.bind({});
Default.args = {
  href: 'your_url'
};
