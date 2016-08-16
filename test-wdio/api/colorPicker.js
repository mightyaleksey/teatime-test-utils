'use strict';

const { getColorPickerValue } = require('../../tool/getValue');
const { setColorPickerValue } = require('../../tool/setValue');
const assert = require('power-assert');

before(() => browser.url('/colorPicker.html'));

describe('ColorPicker', () => {
  it('setValue()', () => {
    browser.setValue('[name="blue water"]', 'BEBEBE');
    assert(browser.getValue('[name="blue water"]') === 'BEBEBE');
  });

  it('getColorPickerValue() / setColorPickerValue()', () => {
    assert(getColorPickerValue('[name="blue water"]') === 'BEBEBE');
    setColorPickerValue('[name="blue water"]', 'FEFEFE');
    assert(getColorPickerValue('[name="blue water"]') === 'FEFEFE');
  });
});
