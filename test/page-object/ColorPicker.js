'use strict';

const ColorPicker = require('../../page-object/ColorPicker');
const assert = require('power-assert');

before(() => browser.url('/colorPicker.html'));

describe('ColorPicker', () => {
  it('assert for the disabled prop', () => {
    assert(ColorPicker(':last-child').isDisabled === true);
    assert(ColorPicker(':first-child').isDisabled === false);
  });

  it('assert for element size', () => {
    const elementSize = ColorPicker(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(ColorPicker(':last-child').html === '<div class=\"color-picker-xs--container color-picker--container\"><button style=\"background: rgb(255, 255, 255) none repeat scroll 0% 0%;\" disabled=\"\" class=\"color-picker-xs--preview color-picker--preview\"></button><span class=\"color-picker-xs--wrapper input-xs--wrapper input--wrapper color-picker--wrapper\"><input value=\"FFFFFF\" class=\"color-picker-xs--control input-xs--control input--control color-picker--control undefined\" name=\"yellow submarine\" disabled=\"\" type=\"text\"></span><div style=\"z-index: 101;\" class=\"color-picker-xs--menu color-picker--menu color-picker-xs--isClosedMenu color-picker--isClosedMenu\"></div></div>');
  });

  it('assert for name prop', () => {
    assert(ColorPicker(':first-child').name === 'blue water');
    assert(ColorPicker(':last-child').name === 'yellow submarine');
  });

  it('assert for the value prop', () => {
    const colorPicker = ColorPicker(':first-child');

    assert.throws(() => colorPicker.value = 5);

    colorPicker.value = 'BEBEBE';
    assert(colorPicker.value === 'BEBEBE');

    colorPicker.value = 'AAAAAA';
    assert(colorPicker.value === 'AAAAAA');
  });
});
