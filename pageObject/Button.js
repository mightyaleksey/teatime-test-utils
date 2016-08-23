'use strict';

const { getSelectors } = require('../tool/selector');

exports.action = getSelectors('teatime-components/style/button/button-action.css').control;
exports.link = getSelectors('teatime-components/style/button/button-link.css').control;
exports.normal = getSelectors('teatime-components/style/button/button-normal.css').control;
