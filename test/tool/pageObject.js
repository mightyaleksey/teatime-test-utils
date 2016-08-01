'use strict';

const { getElementId } = require('../../tool/pageObject');
const assert = require('power-assert');

before(() => {
  browser.url('http://localhost:8080/tool.html');
});

describe('getElementId()', () => {
  it('assert for the non-string argument', () => {
    assert.throws(() => getElementId(),
      /`getElementId` function expects string as an argument/);

    assert.throws(() => getElementId(null),
      /`getElementId` function expects string as an argument/);

    assert.throws(() => getElementId({}),
      /`getElementId` function expects string as an argument/);
  });

  it('assert for the empty string', () => {
    assert.throws(() => getElementId(''),
      /`getElementId` function expects a non-empty selector as an argument/);
  });

  it('assert for the empty result', () => {
    assert.throws(() => getElementId('selector-for-the-not-existing-element'),
      /element was not found/);
  });

  it('assert for the unique result', () => {
    assert.throws(() => getElementId('span'),
      /selector should result into unique element/);
  });

  it('assert for the valid selector', () => {
    const elementId = getElementId('body');
    assert(typeof elementId === 'string');
    assert(elementId);
  });
});
