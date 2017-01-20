'use strict';

const {
  arrow,
  baseline,
  control,
  emptyItem,
  hasPlaceholder,
  isClosedMenu,
  isFixedMenu,
  isFocusedMenuItem,
  isOpenedMenu,
  isPseudoFocusedSearch,
  isSelectedMenuItem,
  menu,
  menuItem,
  search,
  selector,
  wrapper,
} = require('teatime-components/style/select/select.css');

const {mapValuesToSelectors} = require('../lib/className');

module.exports = mapValuesToSelectors({
  arrow,
  baseline,
  control,
  emptyItem,
  hasPlaceholder,
  isClosedMenu,
  isFixedMenu,
  isFocusedMenuItem,
  isOpenedMenu,
  isPseudoFocusedSearch,
  isSelectedMenuItem,
  menu,
  menuItem,
  search,
  selector,
  wrapper,
});
