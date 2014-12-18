eval-expression
===============

**Eval an expression and get what you expect.**

**Warning:** Take all precausions which apply to using `eval`. This is no safer, no more performant and no more testable. It's only more predictable.




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

- [`eval`ing an object](http://stackoverflow.com/q/964397/2816199),
- [`eval`ing a function expression](http://stackoverflow.com/q/2760953/2816199).




License
-------

[MIT][] © [Tomek Wiszniewski][].




<!-- Links -->
[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
