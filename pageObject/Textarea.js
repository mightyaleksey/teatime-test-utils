'use strict';

const {selector} = require('teatime-components/style/textarea/textarea.css');
const {selector: mapClassNameToSelector} = require('../lib/className');

module.exports = mapClassNameToSelector(selector);
