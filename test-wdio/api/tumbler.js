'use strict';

const { getTumblerValue } = require('../../tool/getValue');
const { setTumblerValue } = require('../../tool/setValue');
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
});
