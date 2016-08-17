'use strict';

const {
  loadSelectors,
  transformFromSelector,
  transformToSelector,
} = require('../../tool/selector');
const test = require('ava');

test('transformFromSelector()', t => {
  t.is(transformFromSelector(''), '');
  t.is(transformFromSelector('.a'), 'a');
  t.is(transformFromSelector('.a.b.c'), 'a b c');
});

test('transformToSelector()', t => {
  t.is(transformToSelector('input'), '.input');
  t.is(transformToSelector('input mixin'), '.input.mixin');
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
