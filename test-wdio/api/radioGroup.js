'use strict';

const { compose, findIndex, identity } = require('lodash/fp');
const { getRadioGroupValue } = require('../../tool/getters');
const { getSelectors } = require('../../tool/selector');
const { getValue, identifyElement, setValue } = require('../../');
const { setRadioValue } = require('../../tool/setters');
const RadioGroup = getSelectors('teatime-components/style/radio-group/radio-group.css');
const assert = require('power-assert');

const getSelectedIndex = compose(findIndex(identity), browser.isSelected);

before(() => browser.url('/radioGroup.html'));

describe('RadioGroup', () => {
  it('setValue()', () => {
    browser.click('[name="radio-group-motorrad-1"][value="kawasaki"] + label');
    browser.waitForSelected('[name="radio-group-motorrad-1"][value="kawasaki"]');

    const index = getSelectedIndex('[name="radio-group-motorrad-1"]');
    assert(index > -1);

    const selector = RadioGroup.wrapper +
      `:nth-of-type(${index}) [name="radio-group-motorrad-1"]`;
    assert(browser.getAttribute(selector, 'value') === 'kawasaki');
  });

  it('getRadioGroupValue() / setRadioValue()', () => {
    assert(getRadioGroupValue('[name="radio-group-motorrad-1"]') === 'kawasaki');
    setRadioValue('[name="radio-group-motorrad-1"]', 'vespa');
    assert(getRadioGroupValue('[name="radio-group-motorrad-1"]') === 'vespa');
  });

  it('identifyElement()', () => {
    assert(identifyElement('[name="radio-group-motorrad-1"]') === 'isRadioGroup');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="radio-group-motorrad-1"]') === 'vespa');
    setValue('[name="radio-group-motorrad-1"]', 'mz');
    assert(getValue('[name="radio-group-motorrad-1"]') === 'mz');
  });
});
