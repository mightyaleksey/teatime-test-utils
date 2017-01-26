'use strict';

const {includes, isEqual, overEvery} = require('lodash/fp');
const {isNotUniqueSelector, isUniqueSelector} = require('./check');

const {control: controlOfInput} = require('../pageObject/Input');
const {native: nativeOfCheck} = require('../pageObject/Check');
const {native: nativeOfCheckGroup} = require('../pageObject/CheckGroup');
const {native: nativeOfRadio} = require('../pageObject/Radio');
const {native: nativeOfTumbler} = require('../pageObject/Tumbler');

const allPass = (...checks) => overEvery(checks);

const isCheck = allPass(includes(nativeOfCheck), isUniqueSelector);
const isCheckGroup = allPass(includes(nativeOfCheckGroup), isNotUniqueSelector);
const isInput = allPass(includes(controlOfInput));
const isRadio = allPass(includes(nativeOfRadio));
const isSelect = allPass(isEqual(''));
const isTumbler = allPass(includes(nativeOfTumbler));

exports.allPass = allPass;

exports.isCheck = isCheck;
exports.isCheckGroup = isCheckGroup;
exports.isInput = isInput;
exports.isRadio = isRadio;
exports.isSelect = isSelect;
exports.isTumbler = isTumbler;
