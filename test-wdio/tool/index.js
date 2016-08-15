'use strict';

const assert = require('power-assert');

describe('simple', () => {
  it('go on', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'aa');
  });
});
