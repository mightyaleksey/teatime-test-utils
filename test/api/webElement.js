'use strict';

const { isArray, isNumber, isObjectLike, isString } = require('lodash');
const assert = require('power-assert');

before(() => browser.url('/tool.html'));

describe('WebElement JSON Object', () => {
  it('single element structure', () => {
    const element = browser.element('body');

    assert(element.state === 'success');
    assert(isString(element.sessionId));
    assert(isNumber(element.hCode));
    assert(isObjectLike(element.value));
    assert(isString(element.value.ELEMENT));
    assert(isFinite(element.value.ELEMENT));
    assert(isString(element.class));
    assert(element.selector === 'body');
  });

  it('multiple elements structure', () => {
    const elements = browser.elements('span');

    assert(elements.state === 'success');
    assert(isString(elements.sessionId));
    assert(isNumber(elements.hCode));
    assert(isArray(elements.value));
    assert(elements.value.length > 0);
    assert(isString(elements.value[0].ELEMENT));
    assert(isFinite(elements.value[0].ELEMENT));
    assert(isString(elements.class));
    assert(elements.selector === 'span');
  });

  it('result of the chained methods on multiple elements', () => {
    const elements = browser.elements('span');
    assert.deepEqual(elements.getText(), ['first', 'second', 'third']);
  });
});
