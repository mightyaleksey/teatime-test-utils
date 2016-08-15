'use strict';

const assert = require('power-assert');

before(() => browser.url('/input.html'));

describe('Input', () => {
  it('setValue', () => {
    browser.setValue('[name="active-input"]', 'сизый карась');
    assert(browser.getValue('[name="active-input"]'), 'сизый карась');
  });
});
