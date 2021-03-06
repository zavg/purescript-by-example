// Generated by psc-make version 0.6.9.3
"use strict";
var Data_Foreign = require("Data.Foreign");
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");
var Data_Either = require("Data.Either");
var Null = function (x) {
    return x;
};
var runNull = function (_42) {
    return _42;
};
var readNull = function (f) {
    return function (value) {
        if (Data_Foreign.isNull(value)) {
            return Prelude.pure(Data_Either.applicativeEither)(Data_Maybe.Nothing.value);
        };
        return Prelude["<$>"](Data_Either.functorEither)(Prelude["<<<"](Prelude.semigroupoidArr)(Null)(Data_Maybe.Just.create))(f(value));
    };
};
module.exports = {
    Null: Null, 
    readNull: readNull, 
    runNull: runNull
};
