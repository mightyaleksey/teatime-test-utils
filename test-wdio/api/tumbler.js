'use strict';

const { getTumblerValue, getValue } = require('../../tool/getValue');
const { setTumblerValue, setValue } = require('../../tool/setValue');
const assert = require('power-assert');

before(() => browser.url('/tumbler.html'));

describe('Tumbler', () => {
  it('setValue()', () => {
    assert(browser.isSelected('[name="show-images"]') === true);
    browser.click('[name="show-images"] + label');
    browser.waitForSelected('[name="show-images"]', null, true);
    assert(browser.isSelected('[name="show-images"]') === false);
  });

  it('getTumblerValue() / setTumblerValue()', () => {
    assert(getTumblerValue('[name="show-images"]') === false);
    setTumblerValue('[name="show-images"]', true);
    assert(getTumblerValue('[name="show-images"]') === true);
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="show-images"]') === true);
    setValue('[name="show-images"]', false);
    assert(getValue('[name="show-images"]') === false);
  });
});
