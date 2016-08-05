'use strict';

const Input = require('../../page-object/Input');
const assert = require('power-assert');

before(() => browser.url('/input.html'));

describe('Input', () => {
  it('assert for the disabled prop', () => {
    assert(Input(':last-child').isDisabled === true);
    assert(Input(':first-child').isDisabled === false);
  });

  it('assert for element size', () => {
    const elementSize = Input(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Input(':last-child').html === '<span class=\"input-xs--wrapper input--wrapper\"><input value=\"input\" class=\"input-xs--control input--control input-xs--hasClear input--hasClear\" placeholder=\"size xs\" name=\"inactive-input\" disabled=\"\" type=\"text\"></span>');
  });

  it('assert for name prop', () => {
    assert(Input(':first-child').name === 'active-input');
    assert(Input(':last-child').name === 'inactive-input');
  });

  it('assert for the value prop', () => {
    const input = Input(':first-child');

    assert.throws(() => input.value = 5);

    input.value = 'hello';
    assert(input.value === 'hello');

    input.value = 'friend';
    assert(input.value === 'friend');
  });
});
