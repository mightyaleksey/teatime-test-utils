import {isUndefined} from 'lodash/fp';
import {mount} from 'enzyme';

export function click(context, selector) {
  const tree = mount(context);
  const node = tree.find(selector);
  node.simulate('click');
  return node;
}

export function getAttribute(context, selector, attributeName) {
  const tree = mount(context);
  const node = tree.find(selector);
  const propName = attributeName === 'class'
    ? 'className'
    : attributeName;

  return node.prop(propName);
}

export function getValue(context, selector) {
  const tree = mount(context);
  const node = tree.find(selector);
  const value = node.prop('value');
  return isUndefined(value)
    ? node.prop('defaultValue')
    : value;
}

// todo :: support the option tag
export function isSelected(context, selector) {
  const tree = mount(context);
  const node = tree.find(selector);
  const value = node.prop('checked');
  return isUndefined(value)
    ? Boolean(node.prop('defaultChecked'))
    : value;
}

export function setValue(context, selector, values) {
  const tree = mount(context);
  const node = tree.find(selector);
  node.simulate('change', {target: {value: values}});
  return node;
}
