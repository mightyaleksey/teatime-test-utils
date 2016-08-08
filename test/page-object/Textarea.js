'use strict';

const Textarea = require('../../page-object/Textarea');
const assert = require('power-assert');

before(() => browser.url('/textarea.html'));

describe('Textarea', () => {
  it('assert for the disabled prop', () => {
    assert(Textarea(':last-child').isDisabled === true);
    assert(Textarea(':first-child').isDisabled === false);
  });

  it('assert for element size', () => {
    const elementSize = Textarea(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Textarea(':last-child').html === '<textarea class=\"textarea-s--control input--control textarea--control\" rows=\"3\" placeholder=\"size s\" name=\"inactive-textarea\" disabled=\"\">textarea</textarea>');
  });

  it('assert for name prop', () => {
    assert(Textarea(':first-child').name === 'active-textarea');
    assert(Textarea(':last-child').name === 'inactive-textarea');
  });

  it('assert for the value prop', () => {
    const input = Textarea(':first-child');

    assert.throws(() => input.value = 5);

    input.value = 'hello';
    assert(input.value === 'hello');

    input.value = 'friend';
    assert(input.value === 'friend');
  });
});
