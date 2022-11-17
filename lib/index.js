"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayIt = void 0;
let mike = {
    age: 25,
    name: "Mike",
    say: function () {
        return "My name is " + this.name +
            " and I'm " + this.age + " years old!";
    }
};
function sayIt(person) {
    return person.say();
}
exports.sayIt = sayIt;
console.log(sayIt(mike));
