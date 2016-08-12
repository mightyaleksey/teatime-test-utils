'use strict';

const { loadSelectors, transformSelector } = require('../../tool/selector');
const test = require('ava');

test('transformSelector()', t => {
  t.is(transformSelector('input'), '.input');
  t.is(transformSelector('input mixin'), '.input.mixin');
});

test('loadSelectors()', t => {
  const selectors = loadSelectors('../fixture/style/input.css');

  t.deepEqual(selectors, {
    clear: '.input--clear',
    control: '.input--control',
    hasClear: '.input--hasClear',
    wrapper: '.input--wrapper',
  });
});
