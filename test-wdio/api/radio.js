'use strict';

const { compose, findIndex, identity } = require('lodash/fp');
const { getRadioValue } = require('../../tool/getters');
const { getSelectors } = require('../../tool/selector');
const { getValue, identifyElement, setValue } = require('../../');
const { setRadioValue } = require('../../tool/setters');
const Radio = getSelectors('teatime-components/style/radio/radio.css');
const assert = require('power-assert');

const getSelectedIndex = compose(findIndex(identity), browser.isSelected);

before(() => browser.url('/radio.html'));

describe('Radio', () => {
  it('setValue()', () => {
    browser.click('[name="motorrad-1"][value="kawasaki"] + label');
    browser.waitForSelected('[name="motorrad-1"][value="kawasaki"]');

    const index = getSelectedIndex('[name="motorrad-1"]');
    assert(index > -1);

    const selector = Radio.wrapper +
      `:nth-of-type(${index}) [name="motorrad-1"]`;
    assert(browser.getAttribute(selector, 'value') === 'kawasaki');
  });

  it('getRadioValue() / setRadioValue()', () => {
    assert(getRadioValue('[name="motorrad-1"]') === 'kawasaki');
    setRadioValue('[name="motorrad-1"]', 'vespa');
    assert(getRadioValue('[name="motorrad-1"]') === 'vespa');
  });

  it('identifyElement()', () => {
    assert(identifyElement('[name="motorrad-1"]') === 'isRadio');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="motorrad-1"]') === 'vespa');
    setValue('[name="motorrad-1"]', 'mz');
    assert(getValue('[name="motorrad-1"]') === 'mz');
  });
});
