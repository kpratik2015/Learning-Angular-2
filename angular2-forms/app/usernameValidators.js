"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

    Validation passes: return null
    Validation fails: return { <validationRule> : <value> }

*/
//shouldBeUnique we need to return a promise. A promise is a result of an asynchronous operation
//When calling the server you are working with an async. operation
/*

    The constructor of Promise class:

    executor: (resovle: (value?:T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void

    Key thing here is concept in typescript called arrow function expression or lambda expression
    With this, we can take an annonymous function and make it bit shorter
    e.g.
    function(message) {
    
    }

    to

    (message) => {
    
    }

    Left side of arrow: Parameters
    Right side of arrow: Body of function

    Simpler constructor:
    executor: ( resolve, reject ) => void
    That is, for instance, reject function returns void, type is void and optionally takes a parameter
    
    resolve and reject are functions.

    setTimeout function is of javascript. The function takes a callback, and number of miliseconds to wait before calling the callback function.
    Imagine, we call the server and it takes 1 second to get the results.
*/
class UsernameValidators {
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value == "pratik")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidators.js.map