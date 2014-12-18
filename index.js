module.exports = function evalExpression (code) { 'use strict';
    return (new Function
        ( 'return ('
        +   code
        +   ');'
        ))();
    };
