'use strict';

const { cond, first, isArray } = require('lodash/fp');
const { getPairs } = require('../../tool/fn');
const test = require('tape');

test('getPairs()', t => {
  const pairs = getPairs({type: 'cond'});
  t.ok(isArray(pairs));
  t.equal(first(pairs)[0], 'cond');
  t.equal(first(pairs)[1](), 'type');
  t.end();
});

test('getPairs()()', t => {
  const identify = cond(getPairs({
    bool: t => typeof t === 'boolean',
    string: t => typeof t === 'string',
  }));

  t.equal(identify(''), 'string');
  t.equal(identify(false), 'bool');
  t.end();
});
