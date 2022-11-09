module.exports = (plop, handlers) => {
  plop.setGenerator('page', {
    description: 'Page Generate',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Nome da Página: '
      },
      {
        name: 'folder',
        type: 'input',
        message: 'Nome da Pasta: '
      }
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: `src/pages/${
            data.folder
              ? data.folder.toLowerCase() +
                '/' +
                handlers.createFileName(data.name)
              : handlers.createFileName(data.name)
          }.tsx`,
          templateFile: 'plop/pages/page-template.hbs'
        },
        {
          type: 'add',
          path: `src/styles/pages/${
            data.folder
              ? data.folder.toLowerCase() +
                '/' +
                handlers.createFileName(data.name)
              : handlers.createFileName(data.name)
          }.styles.ts`,
          templateFile: 'plop/pages/style-template.hbs'
        }
      ];

      return actions;
    }
  });
};
