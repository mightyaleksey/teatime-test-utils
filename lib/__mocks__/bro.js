import {isUndefined} from 'lodash/fp';
import {mount} from 'enzyme';

export function getContext() {
  return global.context;
}

export function setContext(context) {
  return (global.context = mount(context));
}

export function click(selector) {
  const node = getContext().find(selector);
  if (node.length === 0) {
    throw new Error('No match was found for the given selector `' + selector + '`');
  }

  node.simulate('click');
  return node;
}

export function elements(selector) {}

export function getAttribute(selector, attributeName) {
  const node = getContext().find(selector);
  const propName = attributeName === 'class'
    ? 'className'
    : attributeName;

  return node.prop(propName);
}

export function getValue(selector) {
  const node = getContext().find(selector);
  const value = node.prop('value');
  return isUndefined(value)
    ? node.prop('defaultValue')
    : value;
}

export function setValue(selector, values) {
  const node = getContext().find(selector);
  node.simulate('change', {target: {value: values}});
  return node;
}

// todo :: support the option tag
export function isSelected(selector) {
  const node = getContext().find(selector);
  const value = node.prop('checked');
  return isUndefined(value)
    ? Boolean(node.prop('defaultChecked'))
    : value;
}

export function waitForSelected(selector) {}

export function waitForValue(selector) {}

export function waitForVisible(selector) {}
