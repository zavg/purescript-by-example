// Generated by psc-make version 0.6.9.3
"use strict";
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var Data_Maybe = require("Data.Maybe");
var Monoid = function (__superclass_Prelude$dotSemigroup_0, mempty) {
    this["__superclass_Prelude.Semigroup_0"] = __superclass_Prelude$dotSemigroup_0;
    this.mempty = mempty;
};
var monoidUnit = new Monoid(function () {
    return Prelude.semigroupUnit;
}, Prelude.unit);
var monoidString = new Monoid(function () {
    return Prelude.semigroupString;
}, "");
var monoidMaybe = function (__dict_Semigroup_0) {
    return new Monoid(function () {
        return Data_Maybe.semigroupMaybe(__dict_Semigroup_0);
    }, Data_Maybe.Nothing.value);
};
var monoidArray = new Monoid(function () {
    return Data_Array.semigroupArray;
}, [  ]);
var mempty = function (dict) {
    return dict.mempty;
};
var monoidArr = function (__dict_Monoid_1) {
    return new Monoid(function () {
        return Prelude.semigroupArr(__dict_Monoid_1["__superclass_Prelude.Semigroup_0"]());
    }, Prelude["const"](mempty(__dict_Monoid_1)));
};
module.exports = {
    Monoid: Monoid, 
    mempty: mempty, 
    monoidString: monoidString, 
    monoidArray: monoidArray, 
    monoidUnit: monoidUnit, 
    monoidArr: monoidArr, 
    monoidMaybe: monoidMaybe
};
