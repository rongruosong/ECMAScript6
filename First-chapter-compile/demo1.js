/**Created on 2017/3/6. */

"use strict";

var str = "今天开始学习ES6";
console.log(str);

var [a, b, c] = [1, 2, 3];
console.log(`${a} ${b} ${c}`);

var { key } = { key: "I am the key of the hello world" };
console.log(key);

console.log([1, 2, 3].map(function (x) {return x * x}));