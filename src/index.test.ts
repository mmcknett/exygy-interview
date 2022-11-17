import { sayIt } from ".";

describe('The Person', () => {
  it('Has a sayIt method that outputs the expected string', () => {
    let mike = {
      age: 24, 
      name:"Mikey", 
      say: function() { 
          return "My name is " + this.name + 
                 " and I'm " + this.age + " years old!"
      }
    }

    expect(sayIt(mike)).toBe("My name is Mikey and I'm 24 years old!");
  });
});