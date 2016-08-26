'use strict';

const { getters } = require('./tool/getters');
const { identities } = require('./tool/identities');
const { setters } = require('./tool/setters');

const { getValue, identify, identifyElement, setValue } = require('./tool');

exports.identify = identify(identities);
exports.identifyElement = identifyElement(identities);
exports.getValue = getValue(getters, exports.identifyElement);
exports.setValue = setValue(setters, exports.identifyElement);
