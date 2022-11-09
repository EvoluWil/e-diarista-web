const componentGenerator = require('./plop/components/component-generator.plop');
const pageGenerator = require('./plop/pages/page-generator.plop');

const handlers = {
  createFileName(componentName) {
    return componentName
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-');
  }
};

module.exports = plop => {
  Object.keys(handlers).forEach(functionName => {
    plop.setHelper(functionName, handlers[functionName]);
  });

  componentGenerator(plop);
  pageGenerator(plop, handlers);
};
