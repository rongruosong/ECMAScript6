/**Created on 2017/3/6. */

"use strict";

var str = "今天开始学习ES6";
console.log(str);

var a = 1,
    b = 2,
    c = 3;

console.log(a + " " + b + " " + c);

var _key = { key: "I am the key of the hello world" },
    key = _key.key;

console.log(key);

console.log([1, 2, 3].map(function (x) {
  return x * x;
}));
