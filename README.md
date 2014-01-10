# jQuery Timer Plugin [![Gittip](http://badgr.co/gittip/jbrooksuk.png)](https://www.gittip.com/jbrooksuk/)
A simple and effective way of handling JavaScript internals using jQuery. Version 1.0.0

## Creating a new timer
Timers are created with an easy to remember syntax.

```js
var timer = $.timer(timeout, callback, disabled);
```

- `timeout` is the time to set the interval to run at, in milliseconds.
- `callback` can be either a reference to another function, or an anonymous function.
- `disabled` if set to true, the timer is created inactive, needs a `.reset()` to trigger first. Optional.

## Timer methods
In the chance that you need to stop or reset your timer, you can use the following two methods:

- `.stop()`
- `.reset([timeout])`
- `.pause()`
- `.resume()`

The timeout option for `reset` is optional, as it'll use the default internal option `reset`.

# Contributors

- James Brooks [@jbrooksuk](http://github.com/jbrooksuk) - [http://james.brooks.so](http://james.brooks.so)
- [@gaboom](http://github.com/gaboom) - [http://gablog.eu/](http://gablog.eu/)

# License
MIT - [http://jbrooksuk.mit-license.org](http://jbrooksuk.mit-license.org)
