'use strict';

const {
  baseline,
  control,
  delimiter,
  label,
  native,
  selector,
  shape,
  wrapper,
} = require('teatime-components/style/tumbler/tumbler.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  baseline,
  control,
  delimiter,
  label,
  native,
  selector,
  shape,
  wrapper,
});
