'use strict';

const { loadSelectors } = require('../tool/selector');

exports.action = loadSelectors('teatime-components/style/button/button-action.css').control;
exports.link = loadSelectors('teatime-components/style/button/button-link.css').control;
exports.normal = loadSelectors('teatime-components/style/button/button-normal.css').control;
