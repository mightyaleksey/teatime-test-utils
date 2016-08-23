'use strict';

const { isInput } = require('../../tool/identities');
const test = require('tape');

test('isInput()', t => {
  t.ok(isInput('.input-xs--control.input--control.input-xs--hasClear.input--hasClear'));
  t.end();
});
