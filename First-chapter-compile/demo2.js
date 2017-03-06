/** Created by wxh-s022 on 2017/3/6. */
class Calculate{
    constructor(){
        console.log("Calculate Constructor class为类");
    }
    add(a, b){
        return a + b;
    }
}
var c = new Calculate();
console.log(c.add(4, 5));