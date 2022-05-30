//vue.config.js

const bourbon = require('bourbon');
const neat = require('bourbon-neat');

const bourbonPaths = [...bourbon.includePaths, ...neat.includePaths];

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: bourbonPaths,
      },
    },
  },
};
