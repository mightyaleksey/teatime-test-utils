'use strict';

const {
  getContextSelector,
  isAttributeSelector,
  isPseudoClassSelector,
  isDelimiter,
  isDelimiterSelector,
  isSuitablePseudoClass,
  isSuitablePseudoClassSelector,
  isSuitableSelector,
} = require('../../tool/selector');
const assert = require('power-assert');

describe('selector', () => {
  it('isAttributeSelector', () => {
    assert(isAttributeSelector({type: 'attribute'}) === true);
    assert(isAttributeSelector({type: 'pseudo-class'}) === false);
  });

  it('isPseudoClassSelector', () => {
    assert(isPseudoClassSelector({type: 'pseudo-class'}) === true);
    assert(isPseudoClassSelector({type: 'attribute'}) === false);
  });

  it('isDelimiter', () => {
    assert(isDelimiter('attribute') === false);
    assert(isDelimiter('operator') === true);
    assert(isDelimiter('spacing') === true);
  });

  it('isDelimiterSelector', () => {
    assert(isDelimiterSelector({type: 'attribute'}) === false);
    assert(isDelimiterSelector({type: 'operator'}) === true);
    assert(isDelimiterSelector({type: 'spacing'}) === true);
  });

  it('isSuitablePseudoClass', () => {
    assert(isSuitablePseudoClass('first-child') === true);
    assert(isSuitablePseudoClass('not') === false);
  });

  it('isSuitablePseudoClassSelector', () => {
    assert(isSuitablePseudoClassSelector({type: 'pseudo-class', name: 'first-child'}) === true);
    assert(isSuitablePseudoClassSelector({type: 'pseudo-class', name: 'not'}) === false);
    assert(isSuitablePseudoClassSelector({type: 'pseudo-class'}) === false);
    assert(isSuitablePseudoClassSelector({name: 'first-child'}) === false);
  });

  it('isSuitableSelector', () => {
    assert(isSuitableSelector({type: 'pseudo-class', name: 'first-child'}) === true);
    assert(isSuitableSelector({type: 'pseudo-class', name: 'not'}) === false);
    assert(isSuitableSelector({type: 'attribute'}) === true);
    assert(isSuitableSelector('not') === false);
  });

  it('getContextSelector()', () => {
    assert(getContextSelector('')('.input') === '.input');
    assert(getContextSelector('span')('.input') === 'span .input');
    assert(getContextSelector('.awesome')('.input') === '.awesome .input');
    assert(getContextSelector('#id')('.input') === '#id .input');
    assert(getContextSelector('span [name="awesome"]')('.input') === 'span .input[name="awesome"]');
    assert(getContextSelector(':nth-child(odd)')('.input') === '.input:nth-child(odd)');
    assert(getContextSelector(':first-child')('.input') === '.input:first-child');
    assert(getContextSelector('.awesome:last-child')('.input') === '.awesome:last-child .input');
    assert(getContextSelector('.awesome :last-child')('.input') === '.awesome .input:last-child');
    assert(getContextSelector('.awesome :last-child')('.input', '.control') === '.awesome .input:last-child .control');
  });
});
