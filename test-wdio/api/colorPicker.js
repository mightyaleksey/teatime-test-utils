'use strict';

const { getColorPickerValue, getValue } = require('../../tool/getValue');
const { setColorPickerValue, setValue } = require('../../tool/setValue');
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

  it('getValue() / setValue()', () => {
    assert(getValue('[name="blue water"]') === 'FEFEFE');
    setValue('[name="blue water"]', 'CCCCCC');
    assert(getValue('[name="blue water"]') === 'CCCCCC');
  });
});
