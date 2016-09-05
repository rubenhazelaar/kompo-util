# Kompo

Kompo is a react js like library which tries to stay as simple as possible. No virtual DOM or JSX. 
Kompo loves the DOM & makes it possible to build interfaces through components.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/rubenhazelaar/kompo-util/master/LICENSE)
[![Build Status](https://travis-ci.org/rubenhazelaar/kompo.svg?branch=master)](https://travis-ci.org/rubenhazelaar/kompo-util)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Dependency Status](https://david-dm.org/rubenhazelaar/kompo.svg?style=flat-square)](https://david-dm.org/rubenhazelaar/kompo-util)
[![devDependency Status](https://david-dm.org/rubenhazelaar/kompo-util/dev-status.svg?style=flat-square)](https://david-dm.org/rubenhazelaar/kompo-util#info=devDependencies)

It's lightweight (3KB minified & gzipped), easy to understand & use. The only build tool you'll need is a bundler 
like browserify or webpack.
 
Kompo's core concept is that of components. Together with a simple Router (inspired by Ember & React routers)
 and some helpers Kompo helps to build interfaces, which load fast and stay fast.
 
This repository contains utility functions which are provided for ease-of-use or syntactic sugar, more or less specific for the Kompo library.
 
## Install

```bash
npm install --save kompo
```

## Build

```bash
npm run build
```

Need the UMD or minified build? Use:

```bash
npm run build-umd
```

```bash 
npm run build-min
```

Build the examples with the following command:

```bash
npm run examples-build

```
Or use the one below if you want to experiment.

```bash
npm run examples-watch
```

## Test

```bash
npm test
```

Please note: testing is still a work-in-progress and you can help out! Please check out the 'Contribute' section below.

## How to use

TODO

## Contribute

Would you like to contribute? Great!

Please keep the following in mind:

* Please follow the existing code style.  You can also use `npm run lint` to help.
* Write your code in a fashion which is easy to read and understand.
* Commit your changes by using `npm run commit`.
* Create pull requests for proposals or possible additions to the code base.
* Testing, testing, testing. Still a lot of work here. However each feature should come with a test.