eval-expression
===============

**Eval an expression and get what you expect.**

**Be warned:** Take [all precausions which apply to using `eval`][]. `eval-expression` is no safer, no more performant and no easier to debug. It's just more predictable.


[all precausions which apply to using `eval`]: http://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/




Installation
------------


```sh
> npm install eval-expression
```




Usage
-----

```js
var evalExpression = require('eval-expression');


var sayHello = evalExpression("function () { console.log('Hello!'); }");
sayHello();  // Logs: Hello!


var fruit = evalExpression("{sort: 'pear'}");
fruit;  // Outputs: {sort: 'pear'}


// evalExpression is only intended to evaluate single expressions.
var good;
// So don't do this:
evalExpression("if (fruit.sort == 'pear') { good = true }");  // Throws an error
// Do this instead:
good = evalExpression("fruit.sort == 'pear' ? true : false");  // Outputs: true
// …or even:
good = evalExpression("fruit.sort == 'pear'");  // Outputs: true
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
