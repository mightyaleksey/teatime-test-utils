teatime-test-utils
==================

Collection of implemented Page Objects for the [teatime-components](https://github.com/sullenor/teatime-components). Designed to be used in automatic tests with [WebDriver.io](http://webdriver.io/). Under development.


## Setup

For the easy use add to your `wdio.config.js` [preset.js](preset.js) file:

```javascript
'use strict';

exports.config = {
  specs: [],

  // ...

  before: () => require('teatime-test-utils/preset'),
};
```

**note**: that you should configure your build tools in a proper way:

- Setup [CSS Modules](https://github.com/css-modules/css-modules) generic names to `[name]--[local]`. In webpack, for example, add `localIdentName` option to [css-loader](https://github.com/webpack/css-loader#local-scope): `css-loader?modules&localIdentName=[name]--[local]`.
- Also note, that preset uses [babel-register](https://babeljs.io/docs/usage/require/) to attach [power-assert](https://github.com/power-assert-js/power-assert#using-babel-preset-power-assert-or-babel-plugin-espower). In case you have a local `.babelrc`, it will overwrite all the options from the preset file. In that case you should manually add [babel-preset-power-assert](https://github.com/power-assert-js/babel-preset-power-assert#via-babelrc-recommended) to your `.babelrc`.


## Useful links

- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors
- https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol


## License

> The MIT License
