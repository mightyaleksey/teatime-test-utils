import {isSelected, setValue} from './__mocks__/bro';
import {noop} from 'lodash/fp';
import React from 'react';

test('isSelected -> false', () => {
  const tree = (
    <input
      name='control'
      onChange={noop}
      type='checkbox'/>
  );

  expect(isSelected(tree, '[name="control"]')).toBe(false);
});

test('isSelected -> defaultChecked -> true', () => {
  const tree = (
    <input
      checked={true}
      name='control'
      onChange={noop}
      type='checkbox'/>
  );

  expect(isSelected(tree, '[name="control"]')).toBe(true);
});

test('isSelected -> defaultChecked -> true', () => {
  const tree = (
    <input
      defaultChecked={true}
      name='control'
      type='checkbox'/>
  );

  expect(isSelected(tree, '[name="control"]')).toBe(true);
});
