[![Build Status](https://travis-ci.org/antonioru/deep-waters.svg?branch=master)](https://travis-ci.org/antonioru/deep-waters)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/deep-waters)
![GitHub stars](https://img.shields.io/github/stars/antonioru/deep-waters?style=social)

# Deep waters

<div align="center">
  <p align="center">
    <img src="./logo.png" alt="deep-waters" width="280px" />
  </p>
</div>
<div>
  <h3 align="center">
    an easy-to-compose modular validation system for javascript developers
  </h3>
  <a href="https://antonioru.gitbook.io/deep-waters/" target="_blank">📖 Documentation</a>
</div>

![Usage example](./usage_example.png)

## 💡 What is Deep Waters?


An easy-to-compose modular validation system for javascript developers. 

It allows to easily create custom and reusable validators from the pre-existing ones by using a functional approach 
and the composition principle. 

## ☕️ Features

* Full functional
* Small and lightweight
* Concise API
* Modular


## Installation

You can install it by using NPM:

```bash
npm install deep-waters
```

Deep Waters exports its modules as CommonJS modules, so that each one can be easily imported individually, 
as the following:

```js
const compose = require('deep-waters/compose');
const minLength = require('deep-waters/minLength');
const ofUniqueItems = require('deep-waters/ofUniqueItems'); 

const arrayValidator = compose(minLength(3), ofUniqueItems);  

arrayValidator([1,2,3,4]); // => true;
```

Alternatively, it's possible to import all the modules at once with the same result.

```js
const DW = require('deep-waters');

const arrayValidator = DW.compose(DW.minLength(3), DW.ofUniqueItems);  

arrayValidator([1,2,3,4]); // => true;
```

## Licence

Deep Waters is released under the [MIT license](./LICENSE.md) & supports modern environments.


---

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
