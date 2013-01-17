# jQuery Timer Plugin
A simple and effective way of handling JavaScript internals using jQuery. Version 1.0.0

## Creating a new timer
Timers are created with an easy to remember syntax.

    var timer = $.timer(timeout, callback);

- `timeout` is the time to set the interval to run at, in milliseconds.

The callback option can obviously be either a reference to another function, or an anonymous function.

## Timer methods
In the chance that you need to stop or reset your timer, you can use the following two methods:
- `.stop()`
- `.reset([timeout])`

The timeout option for `reset` is optional, as it'll use the default internal option `reset`.

## License
jQuery Timer Plugin is licensed under the MIT License.
Copyright (c) 2011 James Brooks, [http://james.brooks.so](http://james.brooks.so) <ukjbrooks@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
