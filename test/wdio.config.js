'use strict';

const { resolve } = require('path');
const glob = require('glob').sync;

exports.config = {
  specs: getSpecs('*/*.js'),

  maxInstances: 1,

  capabilities: [{
    browserName: 'firefox',
  }],

  sync: true,

  logLevel: 'silent',

  baseUrl: 'http://localhost:8080',

  framework: 'mocha',

  // reporters

  mochaOpts: {
    ui: 'bdd',
    compilers: [
      'js:babel-register',
    ],
    require: [
      'css-modules-require-hook/preset'
    ],
  },
};

/**
 * @param  {string} match
 * @return {string[]}
 */
function getSpecs(match) {
  return glob(resolve(__dirname, match), {realpath: true});
}
