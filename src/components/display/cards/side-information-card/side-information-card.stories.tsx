import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SideInformationCard } from './side-information-card.component';

export default {
  title: 'display/SideInformationCard',
  component: SideInformationCard
} as ComponentMeta<typeof SideInformationCard>;

const Template: ComponentStory<typeof SideInformationCard> = args => (
  <SideInformationCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Detalhes',
  items: [
    {
      title: 'Tipo',
      description: ['Limpeza de rotina'],
      icon: 'ed-check-circle'
    },
    {
      title: 'Tamanho',
      description: ['3 cômodos', '2 banheiros'],
      icon: 'ed-check-circle'
    },
    {
      title: 'Data',
      description: ['14/12/2022'],
      icon: 'ed-check-circle'
    }
  ],
  footer: {
    value: 'R$185,00',
    icon: 'ed-credit-card'
  }
};

export const NoIconNoFooter = Template.bind({});
NoIconNoFooter.args = {
  title: 'Como funciona?',
  items: [
    {
      title: '1 - Cadastro',
      description: ['Você faz o cadastro e escolhe as cidades atendidas']
    },
    {
      title: '2 - Receba Proposta',
      description: [
        'Você receberá avisos por E-mail sobre novos serviços nas cidades atendidas'
      ]
    },
    {
      title: '3 - Diária Agendada',
      description: [
        'Se o seu perfil for escolhido pelo cliente, você receberá a confirmação do agendamento'
      ]
    }
  ]
};
