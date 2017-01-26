teatime-test-utils
==================

Collection of implemented Page objects for the [Teatime Components](https://github.com/sullenor/teatime-components). Designed to be used in automatic tests with [WebDriverIO](http://webdriver.io/) bindings.


## Table of contents

- [Usage](#usage)
- [Setup](#setup)
- [Extensibility](#extensibility)
- [Useful links](#useful-links)


## Usage

Usually, interaction with the web-interfaces results in getting or setting some state of its elements. In order to implement these actions using WebDriver bindings, you require locators for the elements and certain commands.

Locators provide you possibility to identify an element in the content of the web application. Usually, it is a CSS selector. [Teatime Test Utils](https://github.com/sullenor/teatime-test-utils/) contains all the necessary CSS selectors for interaction with [Teatime Components](https://github.com/sullenor/teatime-components). You may find them at [pageObject](pageObject) folder. Since [Teatime Components](https://github.com/sullenor/teatime-components) use [CSS Modules](https://github.com/css-modules/css-modules), it guarantees that all the CSS selectors will be unique. Simple examples should look like this:


### example of the action-button click in the interface

```javascript
const Button = require('teatime-test-utils/pageObject/Button');

it('should click the button', () => {
  browser.click(Button.action);
  // assert it was clicked
});
```


In order to make more complex interactions like setting the `input`s value or choosing particular `option` in the `select`s menu, [Teatime Test Utils](https://github.com/sullenor/teatime-test-utils/) provide you functions `getValue` and `setValue`. Unlike [WebDriverIO](http://webdriver.io/)s same commands, these contain information about inner implementation of [Teatime Components](https://github.com/sullenor/teatime-components). To use them, you should provide attribute `name` selector like in the example below:


### example of setting inputs value

```javascript
const {getValue, setValue} = require('teatime-test-utils');

it('should set input value', () => {
  setValue()('[name="username"]', 'Alexey');
  // assert it was setted
});
```


## Setup

Use of [Teatime Test Utils](https://github.com/sullenor/teatime-test-utils/) requires compilation of your code.

In the first place, you should add a posibility to threat your CSS files as a commonJS modules. Keep in mind that CSS tokens in tests should be generated in the same way as in the tested web application.

Addtionaly, I suggest you to compile the code of your tests with [babel-preset-power-assert](https://github.com/power-assert-js/babel-preset-power-assert#via-babelrc-recommended) in order to receive detailed information in the error-reports.


## Extensibility

Should mention about [tool/index.js](tool/index.js). Coming soon.


## Useful links

- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors
- https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
- https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/
- https://medium.com/@griggheo/running-selenium-webdriver-tests-using-firefox-headless-mode-on-ubuntu-d32500bb6af2#.52djxp6rs
- https://medium.com/@griggheo/setting-up-jenkins-to-run-headless-selenium-tests-in-docker-containers-99528390bce7#.ae9nyy30m


## License

> The MIT License
