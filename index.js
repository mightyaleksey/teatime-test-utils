'use strict';

const { getters } = require('./tool/getters');
const { setters } = require('./tool/setters');
const identities = require('./tool/identities');

const { getValue, identifyElement, setValue } = require('./tool');

exports.identify = identifyElement(identities);
exports.getValue = getValue(getters, exports.identify);
exports.setValue = setValue(setters, exports.identify);
