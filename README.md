# downlinkMax
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]

## About

downlinkMax is a 0.26KB Network Information API polyfill for `navigator.connection.downlinkMax` written in both CoffeeScript and JavaScript with AMD support.

Unlike most polyfills that try to add in missing functionally, this script is currently focused on standardizing the available information across specification versions of the Network Information API and returning the estimated maximum downlink speed for the device.

This information can then be used to make educated decisions about how to dynamically optimize the user experience. It could be something as simple as defaulting video playback to HD when the user has enough bandwidth, or removing costly elements from the page such as unnecessary images when the user's mobile browser is on 2G, to completely disabling site features because the experience would be unacceptable (such as video upload).

## Examples

### JavaScript

```JavaScript
// get the maximum downlink speed
var speed = downlinkmax();

// check if it is enough for our amazing feature
if (speed < sufficient) {
  disableFeature();
}
```

### CoffeeScript

```CoffeeScript
# get the maximum downlink speed
speed = downlinkmax()

# check if it is enough for our amazing feature
disableFeature() if speed < sufficient
```

## Should Do List?

  * Try to estimate bandwidth by timing the download of a predefined image

## Install Choices
- `bower install downlinkmax`
- [download the zip](https://github.com/daniellmb/downlinkmax/archive/master.zip)

## Tasks

All tasks can be run by simply running `gulp` or with the `npm test` command, or individually:

  * `gulp lint` will lint source code for syntax errors and anti-patterns.
  * `gulp gpa` will analyze source code against complexity thresholds.
  * `gulp test` will run the jasmine unit tests against the source code.
  * `gulp test-coffee` will run the jasmine unit tests against the CoffeeScript source code.
  * `gulp test-min` will run the jasmine unit tests against the minified code.

## License

(The MIT License)

Copyright (c) 2014 Daniel Lamb dlamb.open.source@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[build-url]: https://travis-ci.org/daniellmb/downlinkmax
[build-image]: http://img.shields.io/travis/daniellmb/downlinkmax.png

[gpa-url]: https://codeclimate.com/github/daniellmb/downlinkmax
[gpa-image]: https://codeclimate.com/github/daniellmb/downlinkmax.png

[coverage-url]: https://codeclimate.com/github/daniellmb/downlinkmax/code?sort=covered_percent&sort_direction=desc
[coverage-image]: https://codeclimate.com/github/daniellmb/downlinkmax/coverage.png

[depstat-url]: https://david-dm.org/daniellmb/downlinkmax
[depstat-image]: https://david-dm.org/daniellmb/downlinkmax.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/downlinkmax/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/downlinkmax.png

[bower-url]: http://bower.io/search/?q=downlinkmax
[bower-image]: https://badge.fury.io/bo/downlinkmax.png

[downloads-url]: https://www.npmjs.org/package/downlinkmax
[downloads-image]: http://img.shields.io/npm/dm/downlinkmax.png

[npm-url]: https://www.npmjs.org/package/downlinkmax
[npm-image]: https://badge.fury.io/js/downlinkmax.png

[irc-url]: http://webchat.freenode.net/?channels=downlinkmax
[irc-image]: http://img.shields.io/badge/irc-%23downlinkmax-brightgreen.png

[gitter-url]: https://gitter.im/daniellmb/downlinkMax
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/downlinkmax-brightgreen.png

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.png