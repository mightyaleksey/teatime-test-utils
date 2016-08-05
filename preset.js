'use strict';

const cssModulesRequireHook = require('css-modules-require-hook');
cssModulesRequireHook({
  generateScopedName: '[name]--[local]',
});

const babelRegister = require('babel-register');
babelRegister({
  presets: [
    'babel-preset-power-assert',
  ],
});
