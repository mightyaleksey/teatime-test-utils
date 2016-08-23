'use strict';

const { identify: id } = require('../../tool/');
const { isInput } = require('../../tool/identities');
const test = require('tape');

test('identify()', t => {
  const identify = id({isInput});

  t.equal(identify('.input-xs--control.input--control.input-xs--hasClear.input--hasClear'),
    'isInput');

  t.end();
});
