"use strict";

var test = require("tape-catch");

var evalExpression = require("./index.js");


test("Works with various data types", function (is) {
  is.equal
    ( evalExpression("null")
    , null
    , "null"
    );

  is.equal
    ( evalExpression("undefined")
    , undefined
    , "undefined"
    );

  is.equal
    ( evalExpression("true")
    , true
    , "booleans"
    );

  is.equal
    ( evalExpression("54")
    , 54
    , "integer numbers"
    );

  is.equal
    ( evalExpression("688.3")
    , 688.3
    , "floating-point numbers"
    );

  is.equal
    ( evalExpression("Infinity")
    , Infinity
    , "Infinity"
    );

  is.equal
    ( evalExpression("'anything'")
    , "anything"
    , "single-quoted strings"
    );

  is.equal
    ( evalExpression('"some gibberish"')
    , "some gibberish"
    , "double-quoted strings"
    );

  is.deepEqual
    ( evalExpression('[1, true, null, "something"]')
    , [1, true, null, "something"]
    , "array literals"
    );

  is.equal
    ( evalExpression("function add2 (x) {return x + 2;}")(10)
    , (function add2 (x) {return x + 2;})(10)
    , "function expressions"
    );

  is.deepEqual
    ( evalExpression('{a: 1, "b-b": 2, c: 3}')
    , {a: 1, "b-b": 2, c: 3}
    , "object literals"
    );

  is.deepEqual
    ( evalExpression('new Date("2015-01-01")')
    , new Date("2015-01-01")
    , "constructed objects"
    );

  is.deepEqual
    ( evalExpression("/test/")
    , /test/
    , "regular expression literals"
    );

  is.end();
  });


test("Works with compound expressions", function (is) {
  is.equal
    ( evalExpression('true ? "ok" : "not ok"')
    , true ? "ok" : "not ok"
    , "the ternary operator"
    );

  is.equal
    ( evalExpression("true && 100")
    , true && 100
    , "logical operators"
    );

  is.equal
    ( evalExpression("5 + 5")
    , 5 + 5
    , "mathematical operators"
    );

  is.equal
    ( evalExpression('"a" + "b"')
    , "a" + "b"
    , "string operators"
    );

  is.deepEqual
    ( evalExpression('"a.b.c".split(".")')
    , "a.b.c".split(".")
    , "string operators"
    );

  is.equal
    ( evalExpression("[1, 2, 3].join()")
    , [1, 2, 3].join()
    , "array functions"
    );

  is.equal
    ( evalExpression('/fine/.test("refine")')
    , /fine/.test("refine")
    , "regex functions"
    );

  is.end();
  });
