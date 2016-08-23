'use strict';

const { toClassSelector, toSelector } = require('../../tool/selector');
const test = require('tape');

test('toClassSelector()', t => {
  t.equal(toClassSelector('page'), '.page');
  t.equal(toClassSelector(''), '.');
  t.end();
});

test('toSelector()', t => {
  t.equal(toSelector('page page--awesome'), '.page.page--awesome');
  t.equal(toSelector(''), '');
  t.end();
});
