'use strict';

const {
  arrow, baseline, control, menu, search, selector, wrapper,
} = require('teatime-components/style/select/select.css');
const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  arrow, baseline, control, menu, search, selector, wrapper,
});
