'use strict';

const { assign } = require('lodash/fp');
const { loadSelectors } = require('../tool/selector');
const Check = require('./Check');

module.exports = assign(loadSelectors('teatime-components/style/check-group/check-group.css'), Check);
