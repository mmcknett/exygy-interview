"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('The Person', () => {
    it('Has a sayIt method that outputs the expected string', () => {
        let mike = {
            age: 24,
            name: "Mikey",
            say: function () {
                return "My name is " + this.name +
                    " and I'm " + this.age + " years old!";
            }
        };
        expect((0, _1.sayIt)(mike)).toBe("My name is Mikey and I'm 24 years old!");
    });
});
