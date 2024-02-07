var person = {
    name: "aman yadav jadav",
    age: 345
};
function greeting(person) {
    return "hello " + person.name + " glad you age is " + person.age;
}
var answer = greeting(person);
console.log(answer);
// incase another function has to use the same person objeject it again has to do the same data type definitions of each object prooerty
// instead we use interfaces which let you define the object data type of an entity and then use it whenever 
