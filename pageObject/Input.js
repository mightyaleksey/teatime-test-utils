'use strict';

const {
  clear,
  control,
  selector,
  wrapper,
} = require('teatime-components/style/input/input.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  clear,
  control,
  selector,
  wrapper,
});
