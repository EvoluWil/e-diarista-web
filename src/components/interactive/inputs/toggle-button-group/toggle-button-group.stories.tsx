import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  ToggleButtonGroup,
  ToggleButton
} from './toggle-button-group.component';

export default {
  title: 'inputs/ToggleButtonGroup',
  component: ToggleButtonGroup
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = args => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="1">
      <i className="ed-cleaning-1" /> Limpeza de rotina
    </ToggleButton>
    <ToggleButton value="2">
      <i className="ed-cleaning-2" /> Limpeza pesada
    </ToggleButton>
    <ToggleButton value="3">
      <i className="ed-cleaning-3" /> Limpeza pós obra
    </ToggleButton>
  </ToggleButtonGroup>
);

export const Default = Template.bind({});

Default.args = {
  value: '1'
};
