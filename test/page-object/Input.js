'use strict';

const Input = require('../../page-object/Input');
const assert = require('power-assert');

before(() => browser.url('/input.html'));

describe('Input', () => {
  it('assert for the value prop', () => {
    const input = Input();

    assert.throws(() => input.value = 5);

    input.value = 'hello';
    assert(input.value === 'hello');

    input.value = 'friend';
    assert(input.value === 'friend');
  });
});
