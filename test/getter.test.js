import {getCheckValue, getInputValue} from '../lib/getter';
import {setContext} from '../lib/__mocks__/bro';
import Check from './templates/Check.snap';
import Select from './templates/Select.snap';

jest.mock('../lib/bro');

test('getCheckValue', () => {
  setContext(Check());
  expect(getCheckValue('[name="check-control"]')).toBe(false);
});

test('getInputValue', () => {
  setContext(Select());
  expect(getInputValue('[name="select-control"]')).toBe('jawa');
});
