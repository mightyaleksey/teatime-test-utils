'use strict';

const {compose} = require('lodash/fp');
const {isSelected, getValue} = require('./bro');
const {isSelector} = require('./check');

const getCheckValue = compose(isSelected, isSelector);
const getInputValue = compose(getValue, isSelector);

exports.getCheckValue = getCheckValue;
exports.getInputValue = getInputValue;
