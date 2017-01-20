'use strict';

const {
  compose,
  cond,
  constant,
  map,
  toPairs,
} = require('lodash/fp');

const rearg = ([name, identity]) => [identity, constant(name)];
const pairs = compose(map(rearg), toPairs);

const identify = mapOfIdentities => {
  const getType = cond(pairs(mapOfIdentities));
  return (...args) => getType(...args);
};

exports.identify = identify;
exports.pairs = pairs;
