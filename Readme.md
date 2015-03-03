[![Build status](https://img.shields.io/travis/tomekwi/eval-expression.js/master.svg?style=flat-square)](https://travis-ci.org/tomekwi/eval-expression.js)
 [![David DM](https://img.shields.io/david/tomekwi/eval-expression.js.svg?style=flat-square)](http://david-dm.org/tomekwi/eval-expression.js)




eval-expression
===============

**Evaluate an expression and get what you expect.**

**Be warned:** Take [all precausions which apply to using `eval`][eval-precautions]. `eval-expression` is no safer, no more performant and no easier to debug.

But it is more predictable. And, just as `eval`, it sometimes is useful for rapid prototyping.


[eval-precautions]: http://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/




Installation
------------


```sh
> npm install eval-expression
```




Usage
-----

```js
var evalExpression = require("eval-expression");


// `eval` fails with function expressions – `evalExpression` handles them.
var sayHello = evalExpression('function () {console.log("Hello!");}');
sayHello();  // Logs: Hello!

// `eval` fails with object literals – `evalExpression` does what you expect.
var fruit = evalExpression('{sort: "pear"}');
fruit;  // Outputs: {sort: "pear"}


// You can access variables in the current scope.
console.log(evalExpression("fruit"));  // Outputs: {sort: "pear"}


// `evalExpression` is only intended to evaluate expressions, not other
// statements.
var tasty;

// So don't do this:
evalExpression('if (fruit.sort == "pear") {tasty = true}');  // Throws

// Do this instead:
tasty = evalExpression('fruit.sort == "pear" ? true : false');  // Outputs: true

// …or even:
tasty = evalExpression('fruit.sort == "pear"');  // Outputs: true
```




API
---

### evalExpression(expression)

#### expression
> Type: `String`  
> Required

A single expression. It will be evaluated in an enclosed scope.




Why use it
----------

`eval` doesn't always work as you'd expect. See these cases:

- [`eval`ing an object][],
- [`eval`ing a function expression][].

[`eval`ing an object]: http://stackoverflow.com/q/964397/2816199
[`eval`ing a function expression]: http://stackoverflow.com/q/2760953/2816199




License
-------

[MIT][] © [Tomek Wiszniewski][].


[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
