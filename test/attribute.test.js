import {mount} from 'enzyme';
import React from 'react';

test('data-* attributes', () => {
  const tree = mount(<div data-value='myValue'></div>);
  expect(tree.find('[data-value="myValue"]')).toHaveLength(1);
  expect(tree.html()).toBe('<div data-value=\"myValue\"></div>');
});

test('nested data-* attributes', () => {
  const tree = mount(<span><div data-value='myValue'></div></span>);
  expect(tree.find('[data-value="myValue"]')).toHaveLength(1);
  expect(tree.html()).toBe('<span><div data-value="myValue"></div></span>');
});
