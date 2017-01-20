import {getInputValue} from '../lib/getter';
import {setContext} from '../lib/__mocks__/bro';
import {setSelectValue} from '../lib/setter';
import Select from './templates/Select.snap';
import SelectSearchable from './templates/SelectSearchable.snap';

jest.mock('../lib/bro');

test.skip('setSelectValue', () => {
  setContext(Select());
  setSelectValue('[name="select-control"]', 'honda');
  expect(getInputValue('[name="select-control"]')).toBe('honda');
});
