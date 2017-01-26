'use strict';

const {
  control,
  label,
  native,
  selector,
  wrapper,
} = require('teatime-components/style/check/check.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  control,
  label,
  native,
  selector,
  wrapper,
});
