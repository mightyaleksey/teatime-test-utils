'use strict';

const {
  'button-control': buttonControl,
  'button-native': buttonNative,
  'button-wrapper': buttonWrapper,
  'common-control': commonControl,
  'common-native': commonNative,
  'common-wrapper': commonWrapper,
  container,
  control,
  native,
  selector,
  wrapper,
} = require('teatime-components/style/radio/radio.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  buttonControl,
  buttonNative,
  buttonWrapper,
  commonControl,
  commonNative,
  commonWrapper,
  container,
  control,
  native,
  selector,
  wrapper,
});
