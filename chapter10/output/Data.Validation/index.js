// Generated by psc-make version 0.6.9.3

/**
 *  | This module defines an applicative functor for _applicative validation_.
 *  |
 *  | Applicative validation differs from monadic validation using `Either` in
 *  | that it allows us to collect multiple errors using a `Semigroup`, whereas
 *  | `Either` terminates on the first error.
 */
"use strict";
var Prelude = require("Prelude");

/**
 *  | The `V` functor, used for applicative validation
 *  |
 *  | The `Applicative` instance collects multiple failures in
 *  | an arbitrary `Semigroup`.
 *  |
 *  | For example:
 *  |
 *  | ```purescript
 *  | validate :: Person -> V [Error] Person
 *  | validate person = { first: _, last: _, email: _ }
 *  |   <$> validateName person.first
 *  |   <*> validateName person.last
 *  |   <*> validateEmail person.email
 *  | ```
 */
var Invalid = (function () {
    function Invalid(value0) {
        this.value0 = value0;
    };
    Invalid.create = function (value0) {
        return new Invalid(value0);
    };
    return Invalid;
})();

/**
 *  | The `V` functor, used for applicative validation
 *  |
 *  | The `Applicative` instance collects multiple failures in
 *  | an arbitrary `Semigroup`.
 *  |
 *  | For example:
 *  |
 *  | ```purescript
 *  | validate :: Person -> V [Error] Person
 *  | validate person = { first: _, last: _, email: _ }
 *  |   <$> validateName person.first
 *  |   <*> validateName person.last
 *  |   <*> validateEmail person.email
 *  | ```
 */
var Valid = (function () {
    function Valid(value0) {
        this.value0 = value0;
    };
    Valid.create = function (value0) {
        return new Valid(value0);
    };
    return Valid;
})();
var showV = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return new Prelude.Show(function (_31) {
            if (_31 instanceof Invalid) {
                return "Invalid (" + (Prelude.show(__dict_Show_0)(_31.value0) + ")");
            };
            if (_31 instanceof Valid) {
                return "Valid (" + (Prelude.show(__dict_Show_1)(_31.value0) + ")");
            };
            throw new Error("Failed pattern match");
        });
    };
};

/**
 *  | Unpack the `V` type constructor, providing functions to handle the error
 *  | and success cases.
 */
var runV = function (f) {
    return function (g) {
        return function (_29) {
            if (_29 instanceof Invalid) {
                return f(_29.value0);
            };
            if (_29 instanceof Valid) {
                return g(_29.value0);
            };
            throw new Error("Failed pattern match");
        };
    };
};

/**
 *  | Test whether validation was successful or not
 */
var isValid = function (_30) {
    if (_30 instanceof Valid) {
        return true;
    };
    return false;
};

/**
 *  | Fail with a validation error
 */
var invalid = Invalid.create;
var functorV = new Prelude.Functor(function (f) {
    return function (_32) {
        if (_32 instanceof Invalid) {
            return new Invalid(_32.value0);
        };
        if (_32 instanceof Valid) {
            return new Valid(f(_32.value0));
        };
        throw new Error("Failed pattern match");
    };
});
var applyV = function (__dict_Semigroup_2) {
    return new Prelude.Apply(function (_33) {
        return function (_34) {
            if (_33 instanceof Invalid && _34 instanceof Invalid) {
                return new Invalid(Prelude["<>"](__dict_Semigroup_2)(_33.value0)(_34.value0));
            };
            if (_33 instanceof Invalid) {
                return new Invalid(_33.value0);
            };
            if (_34 instanceof Invalid) {
                return new Invalid(_34.value0);
            };
            if (_33 instanceof Valid && _34 instanceof Valid) {
                return new Valid(_33.value0(_34.value0));
            };
            throw new Error("Failed pattern match");
        };
    }, function () {
        return functorV;
    });
};
var applicativeV = function (__dict_Semigroup_3) {
    return new Prelude.Applicative(function () {
        return applyV(__dict_Semigroup_3);
    }, Valid.create);
};
module.exports = {
    isValid: isValid, 
    runV: runV, 
    invalid: invalid, 
    showV: showV, 
    functorV: functorV, 
    applyV: applyV, 
    applicativeV: applicativeV
};
