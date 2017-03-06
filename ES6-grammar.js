/** Created by wxh on 2017/3/6. */

console.log("-----------------------------------");
var data = "2017-2-6";
var str = "今天开始学习ES6";
console.log(str);

var [a, b, c] = [1, 2, 3];
console.log(`${a} ${b} ${c}`);

var {key} = {key: "I am the key of the hello world"};
console.log(key);

var func = () => "Hello World!";
console.log(func());