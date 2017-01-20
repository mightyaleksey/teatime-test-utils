import {selector} from '../lib/className';

test('selector', () => {
  expect(selector('control')).toBe('.control');
  expect(selector('control selected')).toBe('.control.selected');
});
