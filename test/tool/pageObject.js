'use strict';

const { getWebElement } = require('../../tool/pageObject');
const assert = require('power-assert');

before(() => browser.url('/tool.html'));

describe('getWebElement()', () => {
  it('assert for the valid input', () => {
    assert.throws(() => getWebElement());
    assert.throws(() => getWebElement(null));
    assert.throws(() => getWebElement({}));
    assert.throws(() => getWebElement({selector: ''}));
  });

  it('assert for the unique webElement', () => {
    assert.throws(() => getWebElement({selector: 'span'}), /selector wasn't unique enough/);
  });

  it('assert for the valid selector', () => {
    const element = getWebElement({selector: 'body'});
    assert(element.selector === 'body');
    assert(isFinite(element.value[0].ELEMENT));
  });
});
