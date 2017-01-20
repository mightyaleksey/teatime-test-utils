'use strict';

const {
  button,
  clear,
  container,
  control,
  isClosedMenu,
  menu,
  menuItem,
  selector,
} = require('teatime-components/style/colorPicker/colorPicker.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  button,
  clear,
  container,
  control,
  isClosedMenu,
  menu,
  menuItem,
  selector,
});
