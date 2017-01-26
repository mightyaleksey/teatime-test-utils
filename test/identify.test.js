import {isBoolean, isString} from 'lodash/fp';
import {identify} from '../lib/identify';

test('identify', () => {
  const mapOfIdentities = {
    Boolean: isBoolean,
    String: isString,
  };

  expect(identify(mapOfIdentities)(false)).toBe('Boolean');
  expect(identify(mapOfIdentities)('some string')).toBe('String');
});
