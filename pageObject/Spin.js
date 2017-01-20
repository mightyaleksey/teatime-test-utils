'use strict';

const {selector} = require('teatime-components/style/spin/spin.css');
const {selector: mapClassNameToSelector} = require('../lib/className');

module.exports = mapClassNameToSelector(selector);
