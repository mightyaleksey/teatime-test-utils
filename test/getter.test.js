import {getInputValue} from '../lib/getter';
import {setContext} from '../lib/__mocks__/bro';
import Select from './templates/Select.snap';

jest.mock('../lib/bro');

test('getInputValue', () => {
  setContext(Select());
  getInputValue('[name="select-control"]');
});
