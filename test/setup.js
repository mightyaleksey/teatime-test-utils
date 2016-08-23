'use strict';

const cssModulesRequireHook = require('css-modules-require-hook');
cssModulesRequireHook({
  generateScopedName: typeof process.env.GENERATE_SCOPED_NAME !== 'undefined'
    ? process.env.GENERATE_SCOPED_NAME
    : '[name]--[local]',
});

// global.browser = typeof global.browser !== 'undefined'
//   ? global.browser
//   : {};
