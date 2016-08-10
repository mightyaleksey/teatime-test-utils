'use strict';

const { sep } = require('path');

const isNodeModule = new RegExp(`${sep}node_modules${sep}`);
const isTestUtil = new RegExp(`teatime-test-utils${sep}(page-object|tool)`);

const cssModulesRequireHook = require('css-modules-require-hook');
cssModulesRequireHook({
  generateScopedName: '[name]--[local]',
});

const babelRegister = require('babel-register');
babelRegister({
  ignore: filename =>
    !isTestUtil.test(filename) && isNodeModule.test(filename),
  presets: [
    'babel-preset-power-assert',
  ],
});
