'use strict';

const {selector} = require('teatime-components/style/input/input.css');
const {selector: mapClassNameToSelector} = require('../lib/className');

module.exports = mapClassNameToSelector(selector);
