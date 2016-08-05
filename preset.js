'use strict';

const cssModulesRequireHook = require('css-modules-require-hook');
cssModulesRequireHook({
  generateScopedName: '[name]--[local]',
});

require('babel-register');
