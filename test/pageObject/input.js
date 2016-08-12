'use strict';

const input = require('../../pageObject/input');
const test = require('ava');

test('input', t => {
  t.deepEqual(input, {
    clear: '.input--clear',
    control: '.input--control',
    hasClear: '.input--hasClear',
    wrapper: '.input--wrapper',
  });
});
