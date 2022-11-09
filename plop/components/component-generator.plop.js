module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Component Generate',
    prompts: [
      {
        name: 'pathName',
        type: 'input',
        message: 'Nome do Caminho: '
      },
      {
        name: 'name',
        type: 'input',
        message: 'Nome do Componente: '
      },
      {
        name: 'type',
        type: 'list',
        message: 'Tipo do Componente: ',
        choices: [
          { name: 'Display', value: 'display' },
          { name: 'Feedback', value: 'feedbacks' },
          { name: 'Interactive', value: 'interactive' },
          { name: 'Partials', value: 'partials' },
          { name: 'Surfaces', value: 'surfaces' }
        ]
      },
      {
        name: 'subtype',
        type: 'input',
        message: 'Qual subtipo do componente'
      }
    ],
    actions: data => {
      const basePath = `src/components/${
        data.subtype ? data.type + '/' + data.subtype : data.type
      }/${data.pathName}`;

      const actions = [
        {
          type: 'add',
          path: `${basePath}/${data.pathName}.component.tsx`,
          templateFile: 'plop/components/component-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/${data.pathName}.styles.ts`,
          templateFile: 'plop/components/style-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/${data.pathName}.stories.tsx`,
          templateFile: 'plop/components/story-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/${data.pathName}.spec.tsx`,
          templateFile: 'plop/components/test-template.hbs'
        }
      ];

      return actions;
    }
  });
};
