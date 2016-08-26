'use strict';

const { getCheckGroupValue } = require('../../tool/getters');
const { getValue, identifyElement, setValue } = require('../../');
const { setCheckGroupValue } = require('../../tool/setters');
const assert = require('power-assert');

before(() => browser.url('/checkGroup.html'));

describe('CheckGroup', () => {
  it('browser.setValue()', () => {
    const elements = browser.elements('input[name="check-group-motorrad-1"]');
    assert.deepEqual(getElementsState(elements), []);
    browser.click('input[name="check-group-motorrad-1"][value="yamaha"] + label');
    browser.click('input[name="check-group-motorrad-1"][value="vespa"] + label');
    browser.click('input[name="check-group-motorrad-1"][value="mz"] + label');
    assert.deepEqual(getElementsState(elements), ['yamaha', 'vespa', 'mz']);
  });

  it('getCheckValue() / setCheckValue()', () => {
    assert.deepEqual(getCheckGroupValue('input[name="check-group-motorrad-1"]'), ['yamaha', 'vespa', 'mz']);
    setCheckGroupValue('input[name="check-group-motorrad-1"]', ['yamaha', 'mz']);
    assert.deepEqual(getCheckGroupValue('input[name="check-group-motorrad-1"]'), ['yamaha', 'mz']);
  });

  it('identifyElement()', () => {
    assert(identifyElement('input[name="check-group-motorrad-1"]') === 'CheckGroup');
  });

  it('getValue() / setValue()', () => {
    assert.deepEqual(getValue('input[name="check-group-motorrad-1"]'), ['yamaha', 'mz']);
    setValue('input[name="check-group-motorrad-1"]', ['suzuki']);
    assert.deepEqual(getValue('input[name="check-group-motorrad-1"]'), ['suzuki']);
  });
});

function getElementsState(elements) {
  const states = elements.isSelected();
  return elements.getAttribute(null, 'value').filter((_, pos) => states[pos]);
}
