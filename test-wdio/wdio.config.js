'use strict';

exports.config = {
  specs: [
    'test-wdio/*/*.js',
  ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'firefox',
  }],

  sync: true,

  logLevel: 'silent',

  baseUrl: 'http://localhost:8080/test-wdio/fixture',

  framework: 'mocha',

  // reporters

  mochaOpts: {
    ui: 'bdd',
    compilers: [
      'js:babel-register',
    ],
    require: [
      'css-modules-require-hook/preset',
    ],
  },
};
