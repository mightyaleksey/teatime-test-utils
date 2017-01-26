'use strict';

const {
  container,
  column,
  wrapper,
} = require('teatime-components/style/checkGroup/checkGroup.css');

const {assign} = require('lodash/fp');
const {mapValuesToSelectors} = require('../lib/className');
const Check = require('./Check');

module.exports = assign(Check, mapValuesToSelectors({
  container,
  column,
  wrapper,
}));
