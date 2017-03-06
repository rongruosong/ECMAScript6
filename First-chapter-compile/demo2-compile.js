"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/** Created by wxh-s022 on 2017/3/6. */
var Calculate = function () {
    function Calculate() {
        _classCallCheck(this, Calculate);

        console.log("Calculate Constructor class为类");
    }

    _createClass(Calculate, [{
        key: "add",
        value: function add(a, b) {
            return a + b;
        }
    }]);

    return Calculate;
}();

var c = new Calculate();
console.log(c.add(4, 5));
