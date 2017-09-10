'use strict';

const {
  bottom,
  menu,
  top,
} = require('teatime-components/style/menu/menu.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  bottom,
  menu,
  top,
});
