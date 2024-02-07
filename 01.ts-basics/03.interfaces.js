var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "hello " + this.name + " you age is " + this.age;
    };
    return Person;
}());
var personobj = new Person("shravan", 34);
console.log(personobj.greet());
