'use strict';

const Check = require('../../page-object/Check');
const assert = require('power-assert');

before(() => browser.url('/check.html'));

describe('Check', () => {
  it('assert for check / uncheck method', () => {
    assert(Check(':first-child').isChecked === false);
    assert(Check(':first-child').check().isChecked === true);
    assert(Check(':first-child').uncheck().isChecked === false);

    assert(Check(':nth-child(2)').isDisabled === true);
    assert(Check(':nth-child(2)').check().isChecked === false);
  });

  it('assert for the checked prop', () => {
    assert(Check(':nth-child(1)').isChecked === false);
    assert(Check(':nth-child(2)').isChecked === false);
    assert(Check(':nth-child(3)').isChecked === true);
  })

  it('assert for the disabled prop', () => {
    assert(Check(':nth-child(1)').isDisabled === false);
    assert(Check(':nth-child(2)').isDisabled === true);
    assert(Check(':nth-child(3)').isDisabled === false);
  });

  it('assert for element size', () => {
    const elementSize = Check(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Check(':last-child').html === '<div class=\"check-s--wrapper check--wrapper\"><input id=\"_teatime5\" class=\"check-s--native check--native\" value=\"size-s\" name=\"active-with-label\" disabled=\"\" type=\"checkbox\"><label for=\"_teatime5\" class=\"check-s--control check--control\"></label><label for=\"_teatime5\" class=\"check-s--label check--label\">Size s</label></div>');
  });

  it('assert for the name prop', () => {
    assert(Check(':nth-child(4)').name === 'inactive-with-label');
    assert(Check(':nth-child(5)').name === 'active-with-label');
  });
});
