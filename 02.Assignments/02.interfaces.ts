// Interfaces:
// Create an interface representing a Person with properties like name, age, and email. Then create an object of type Person and log its details.
interface Person{
    name: string;
    age: number;
    email: string;
}
// we created a structure object 
let shravan: Person={
    name:"shravan",
    age:19,
    email:"shravam@gmail.com"
}
console.log(shravan.name, shravan.age, shravan.email)