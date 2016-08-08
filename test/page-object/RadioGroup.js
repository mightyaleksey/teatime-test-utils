'use strict';

const RadioGroup = require('../../page-object/RadioGroup');
const assert = require('power-assert');

before(() => browser.url('/radioGroup.html'));

describe('RadioGroup', () => {
  it('assert for the disabled prop', () => {
    assert(RadioGroup('h1+div').isDisabled === false);
    assert(RadioGroup('h1~div:last-child').isDisabled === true);
  });

  it('assert for element size', () => {
    const elementSize = RadioGroup('h1~div:last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(RadioGroup('h1~div:last-child').html === '<div class=\"radio-group-xs--container radio-group--container\" name=\"radio-group-motorrad-2\" disabled=\"\"><span class=\"radio-group-xs--wrapper radio-group--wrapper\"><input id=\"_teatime8\" class=\"radio-group-xs--native radio-group--native\" name=\"radio-group-motorrad-2\" disabled=\"\" value=\"yamaha\" type=\"radio\"><label for=\"_teatime8\" class=\"radio-group-xs--control radio-group--control\">Yamaha</label></span><span class=\"radio-group-xs--wrapper radio-group--wrapper\"><input id=\"_teatime9\" class=\"radio-group-xs--native radio-group--native\" name=\"radio-group-motorrad-2\" disabled=\"\" value=\"suzuki\" type=\"radio\"><label for=\"_teatime9\" class=\"radio-group-xs--control radio-group--control\">Suzuki</label></span><span class=\"radio-group-xs--wrapper radio-group--wrapper\"><input id=\"_teatime10\" class=\"radio-group-xs--native radio-group--native\" name=\"radio-group-motorrad-2\" disabled=\"\" value=\"kawasaki\" type=\"radio\"><label for=\"_teatime10\" class=\"radio-group-xs--control radio-group--control\">Kawasaki</label></span><span class=\"radio-group-xs--wrapper radio-group--wrapper\"><input id=\"_teatime11\" class=\"radio-group-xs--native radio-group--native\" name=\"radio-group-motorrad-2\" disabled=\"\" value=\"vespa\" type=\"radio\"><label for=\"_teatime11\" class=\"radio-group-xs--control radio-group--control\">Vespa</label></span><span class=\"radio-group-xs--wrapper radio-group--wrapper\"><input id=\"_teatime12\" class=\"radio-group-xs--native radio-group--native\" name=\"radio-group-motorrad-2\" disabled=\"\" value=\"mz\" type=\"radio\"><label for=\"_teatime12\" class=\"radio-group-xs--control radio-group--control\">MZ</label></span></div>');
  });

  it('assert for name prop', () => {
    assert(RadioGroup('h1+div').name === 'radio-group-motorrad-1');
    assert(RadioGroup('h1~div:last-child').name === 'radio-group-motorrad-2');
  });

  it('assert for the value prop', () => {
    const radioGroup = RadioGroup('h1+div');

    assert.throws(() => radioGroup.value = 5);
    assert(radioGroup.value === null);

    radioGroup.value = 'kawasaki';
    assert(radioGroup.value === 'kawasaki');

    radioGroup.value = 'mz';
    assert(radioGroup.value === 'mz');
  });
});
