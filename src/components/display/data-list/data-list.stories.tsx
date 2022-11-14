import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DataList } from './data-list.component';
import { Button } from 'components/interactive/buttons/button/button.component';

export default {
  title: 'display/DataList',
  component: DataList
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = () => (
  <DataList
    header={
      <div>
        Data: 05/05/2022
        <br />
        Limpeza simples
      </div>
    }
    body={
      <div>
        Cidade: São Paulo
        <br />
        Número de cômodos
      </div>
    }
    actions={<Button color="secondary">Se candidatar</Button>}
  />
);

export const Default = Template.bind({});
Default.args = {};
