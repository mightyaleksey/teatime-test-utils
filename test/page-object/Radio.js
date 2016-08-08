'use strict';

const Radio = require('../../page-object/Radio');
const assert = require('power-assert');

before(() => browser.url('/radio.html'));

describe('Radio', () => {
  it('assert for the disabled prop', () => {
    assert(Radio(':first-child').isDisabled === false);
    assert(Radio(':last-child').isDisabled === true);
  });

  it('assert for element size', () => {
    const elementSize = Radio(':last-child').elementSize;
    assert(typeof elementSize.width === 'number');
    assert(typeof elementSize.height === 'number');
  });

  it('assert for html content', () => {
    assert(Radio(':last-child').html === '<div class=\"radio-s--container radio--container\" name=\"motorrad-2\" disabled=\"\"><div class=\"radio-s--wrapper radio--wrapper\"><input id=\"_teatime8\" class=\"radio-s--native radio--native\" name=\"motorrad-2\" disabled=\"\" value=\"yamaha\" type=\"radio\"><label for=\"_teatime8\" class=\"radio-s--control radio--control\"></label><label for=\"_teatime8\" class=\"radio-s--label radio--label\">Yamaha</label></div><div class=\"radio-s--wrapper radio--wrapper\"><input id=\"_teatime9\" class=\"radio-s--native radio--native\" name=\"motorrad-2\" disabled=\"\" value=\"suzuki\" type=\"radio\"><label for=\"_teatime9\" class=\"radio-s--control radio--control\"></label><label for=\"_teatime9\" class=\"radio-s--label radio--label\">Suzuki</label></div><div class=\"radio-s--wrapper radio--wrapper\"><input id=\"_teatime10\" class=\"radio-s--native radio--native\" name=\"motorrad-2\" disabled=\"\" value=\"kawasaki\" type=\"radio\"><label for=\"_teatime10\" class=\"radio-s--control radio--control\"></label><label for=\"_teatime10\" class=\"radio-s--label radio--label\">Kawasaki</label></div><div class=\"radio-s--wrapper radio--wrapper\"><input id=\"_teatime11\" class=\"radio-s--native radio--native\" name=\"motorrad-2\" disabled=\"\" value=\"vespa\" type=\"radio\"><label for=\"_teatime11\" class=\"radio-s--control radio--control\"></label><label for=\"_teatime11\" class=\"radio-s--label radio--label\">Vespa</label></div><div class=\"radio-s--wrapper radio--wrapper\"><input id=\"_teatime12\" class=\"radio-s--native radio--native\" name=\"motorrad-2\" disabled=\"\" value=\"mz\" type=\"radio\"><label for=\"_teatime12\" class=\"radio-s--control radio--control\"></label><label for=\"_teatime12\" class=\"radio-s--label radio--label\">MZ</label></div></div>');
  });

  it('assert for name prop', () => {
    assert(Radio(':first-child').name === 'motorrad-1');
    assert(Radio(':last-child').name === 'motorrad-2');
  });

  it('assert for the value prop', () => {
    const radioGroup = Radio(':first-child');

    assert.throws(() => radioGroup.value = 5);
    assert(radioGroup.value === null);

    radioGroup.value = 'kawasaki';
    assert(radioGroup.value === 'kawasaki');

    radioGroup.value = 'mz';
    assert(radioGroup.value === 'mz');
  });
});
