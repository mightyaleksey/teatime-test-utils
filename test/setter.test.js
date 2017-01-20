import {getCheckValue, getInputValue} from '../lib/getter';
import {setContext} from '../lib/__mocks__/bro';
import {setCheckValue, setSelectValue} from '../lib/setter';
import Check from './templates/Check.snap';
import Select from './templates/Select.snap';

jest.mock('../lib/bro');

test.skip('setCheckValue', () => {
  setContext(Check());
  setCheckValue('[name="check-control"]', true);
  expect(getCheckValue('[name="check-control"]')).toBe(true);
});

test.skip('setSelectValue', () => {
  setContext(Select());
  setSelectValue('[name="select-control"]', 'honda');
  expect(getInputValue('[name="select-control"]')).toBe('honda');
});
