# jscmd
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

`js(1)` is a tool for managing JavaScript source code. Similar to `go(1)`.

## Installation
```bash
npm install -g jscmd
```

## Usage
```
Js is a tool for managing JavaScript source code.

Usage:

      js <command> [<input>]

Commands:

    clean       remove installed modules
    doc         create documentation
    fmt         run jsfmt on module resources
    get         install modules
    init        generate a module
    install     install dependencies
    lint        lint modules
    list        list modules
    test        test modules
    version     print versions

Example:

    js fmt index.js
    js doc -http=:6060
    js lint -w index.js

Use "js help [topic]" for more information about that topic.
```

## Why?
`go(1)` provides strong tooling for the Go language. JavaScript deserves the same.

## See also
- [eslint](http://ghub.io/eslint)
- [esdoc](http://ghub.io/esdoc)
- [esget](http://ghub.io/esget)
- [initialize](http://ghub.io/initialize)
- [jsfmt](http://ghub.io/jsfmt)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/ea.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ea
[travis-image]: https://img.shields.io/travis/yoshuawuyts/ea.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/ea
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/ea.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/ea?branch=master
[downloads-image]: http://img.shields.io/npm/dm/ea.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/ea
