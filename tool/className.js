'use strict';

const assert = require('power-assert');

module.exports = className;

/**
 * @param  {string} className
 * @return {string}
 */
function className(className) {
  assert(typeof className === 'string');
  return '.' + className.split(' ').join('.');
}
