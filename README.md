# replace-text@1.0.0
 [![npm version](https://badge.fury.io/js/replace-text.svg)](https://npmjs.org/package/replace-text)  [![minzipped size](https://img.shields.io/bundlephobia/minzip/replace-text.svg)](https://bundlephobia.com/result?p=replace-text)

Finds text that matches a regular expression in the browser. Allows content to be changed with a callback function.

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install replace-text --save
```

This package is provided in these module formats:

- CommonJS

## TL-DR ##

```js
const { replaceText } = require('../dist/index');
const { cpf, cnpj } = require('cpf-cnpj-validator');

const CpfCnpjRegex = /(\d{3}\.\d{3}\.\d{3}\-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})/g;
replaceText(CpfCnpjRegex, (payload, element) => {
    /* callback */
    element.style.color = "red";
    element.style.fontWeight = "bold";
    element.onclick = function () { alert(payload); }
}, (payload) => cpf.isValid(payload) || cnpj.isValid(payload));
```

## Dependencies

None

## Dev Dependencies

- [typescript](https://github.com/Microsoft/TypeScript): TypeScript is a language for application scale JavaScript development

## License
[MIT](https://opensource.org/licenses/MIT)
