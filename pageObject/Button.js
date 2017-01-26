'use strict';

const {
  action,
  control,
  normal,
  selector,
} = require('teatime-components/style/button/button.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  action,
  control,
  normal,
  selector,
});
