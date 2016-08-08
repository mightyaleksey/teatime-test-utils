'use strict';

const Tumbler = require('../../page-object/Tumbler');
const assert = require('power-assert');

before(() => browser.url('/tumbler.html'));

describe('Tumber', () => {
  it('assert for check / uncheck method', () => {
    assert(Tumbler(':first-child').isChecked === true);
    assert(Tumbler(':first-child').uncheck().isChecked === false);
    assert(Tumbler(':first-child').check().isChecked === true);

    assert(Tumbler(':nth-child(2)').isDisabled === true);
    assert(Tumbler(':nth-child(2)').check().isChecked === false);
  });

  it('assert for the checked prop', () => {
    assert(Tumbler(':nth-child(1)').isChecked === true);
    assert(Tumbler(':nth-child(2)').isChecked === false);
  });

  it('assert for the disabled prop', () => {
    assert(Tumbler(':first-child').isDisabled === false);
    assert(Tumbler(':last-child').isDisabled === true);
  });

  it('assert for element size', () => {
    const elementSize = Tumbler(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Tumbler(':last-child').html === '<div class=\"tumbler-xs--wrapper tumbler--wrapper\"><input id=\"_teatime2\" class=\"tumbler-xs--native tumbler--native\" value=\"size-xs\" name=\"send-mail\" disabled=\"\" type=\"checkbox\"><label for=\"_teatime2\" class=\"tumbler-xs--control tumbler--control\"><span class=\"tumbler-xs--label tumbler--label\">On</span><span class=\"tumbler-xs--label tumbler--label\">Off</span><span class=\"tumbler-xs--delimiter tumbler--delimiter\">&nbsp;</span></label></div>');
  });

  it('assert for name prop', () => {
    assert(Tumbler(':first-child').name === 'show-images');
    assert(Tumbler(':last-child').name === 'send-mail');
  });
});
