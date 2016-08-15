'use strict';

const { compose, findIndex, identity } = require('lodash/fp');
const { loadSelectors } = require('../../tool/selector');
const Radio = loadSelectors('teatime-components/style/radio/radio.css');
const assert = require('power-assert');

const getSelectedIndex = compose(findIndex(identity), browser.isSelected);

before(() => browser.url('/radio.html'));

describe('Radio', () => {
  it('setValue', () => {
    browser.click('[name="motorrad-1"][value="kawasaki"] + label');
    browser.waitForSelected('[name="motorrad-1"][value="kawasaki"]');

    const index = getSelectedIndex('[name="motorrad-1"]');
    assert(index > -1);

    const selector = Radio.wrapper +
      `:nth-of-type(${index}) [name="motorrad-1"]`;
    assert(browser.getAttribute(selector, 'value') === 'kawasaki');
  });
});
