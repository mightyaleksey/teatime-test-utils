'use strict';

const Select = require('../../page-object/Select');
const assert = require('power-assert');

before(() => browser.url('/select.html'));

describe('Select', () => {
  it('assert for the disabled prop', () => {
    assert(Select(':nth-child(1)').isDisabled === false);
    assert(Select(':nth-child(2)').isDisabled === true);
    assert(Select(':nth-child(3)').isDisabled === false);
  });

  it('assert for element size', () => {
    const elementSize = Select(':first-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Select(':last-child').html === '<div class=\"select-xs--wrapper select--wrapper\"><input value=\"abakan\" name=\"searchable-cities\" class=\"select-xs--native select--native\" type=\"hidden\"><span class=\"select-xs--control button-normal-xs--control button-normal--control select--control select-xs--isClosedControl select--isClosedControl\"><span class=\"select-xs--label select--label\">Abakan</span><input value=\"\" tabindex=\"0\" class=\"select-xs--input select--input\" type=\"text\"></span><div style=\"z-index: 102;\" class=\"select-xs--menu menu-xs--menu menu--menu select--menu select-xs--isClosedMenu select--isClosedMenu\"></div></div>');
  });

  it('assert for name prop', () => {
    assert(Select(':nth-child(1)').name === 'cities');
    assert(Select(':nth-child(2)').name === 'motorrad-2');
    assert(Select(':nth-child(3)').name === 'searchable-cities');
  });

  it('assert for the value prop', () => {
    const select = Select(':nth-child(1)');

    assert(select.value === 'abakan');
  });
});
