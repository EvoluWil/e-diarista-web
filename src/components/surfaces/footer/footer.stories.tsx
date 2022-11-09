import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './footer.component';

export default {
  title: 'surfaces/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Contained = Template.bind({});
