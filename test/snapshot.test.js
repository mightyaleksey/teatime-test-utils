import {basename} from 'path';
import {compose, first, split} from 'lodash/fp';
import {sync as glob} from 'glob';
import renderer from 'react-test-renderer';

const testName = compose(first, split('.'), basename);
const views = glob('test/templates/*.snap.js', {absolute: true});

views.forEach(view => test(testName(view), () => {
  const tree = renderer.create(require(view).default()).toJSON();
  expect(tree).toMatchSnapshot();
}));
