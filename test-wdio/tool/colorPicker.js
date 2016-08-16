'use strict';

const assert = require('power-assert');

before(() => browser.url('/colorPicker.html'));

describe('ColorPicker', () => {
  it('setValue()', () => {
    browser.setValue('[name="blue water"]', 'BEBEBE');
    assert(browser.getValue('[name="blue water"]') === 'BEBEBE');
  });
});
