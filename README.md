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
    An easy-to-compose functional validation system for javascript developers
    <br />
    <h4 align="center">
        <a href="https://antonioru.gitbook.io/deep-waters/" target="_blank">
            📖 Documentation
        </a>
    </h4>
  </h3>
</div>

![Usage example](./usage_example.png)

## 💡 What is Deep Waters?


An easy-to-compose functional validation system for javascript developers

It allows to easily create custom and reusable validators from the pre-existing ones by using a functional approach 
and the composition principle. 


<h4 align="center">
    <a href="https://antonioru.gitbook.io/deep-waters/" target="_blank">
        📖 Documentation
    </a>
</h4>


## ☕️ Features

* Full functional
* Strict types validation based on `Object.prototype.toString` instead of `typeof` to avoid unexpected behaviours
* Tiny and lightweight
* Extremely modular
* Concise API



## 🕺 Installation

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

<h4 align="center">
    <a href="https://antonioru.gitbook.io/deep-waters/" target="_blank">
        📖 Documentation
    </a>
</h4>


## 🔰 Licence

Deep Waters is released under the [MIT license](./LICENSE.md) & supports modern environments.


## 🧑‍🤝‍🧑 Contributing

Contributions are very welcome and wanted. 

To submit your custom hook, please make sure your read our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

**Before submitting** a new merge request, please make sure:

1. You have updated the package.json version and reported your changes into the [CHANGELOG](./CHANGELOG.md) file
2. make sure you run `npm test` before submitting your merge request.
3. In case you're creating a new validator please make sure it is well documented and tested

---

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.freepik.com](http://www.freepik.com)
