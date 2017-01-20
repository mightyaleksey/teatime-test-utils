'use strict';

const {selector} = require('teatime-components/style/button/button.css');
const {selector: mapClassNameToSelector} = require('../lib/className');

module.exports = mapClassNameToSelector(selector);
