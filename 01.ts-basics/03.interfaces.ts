interface PersonInterface{
    name:string,
    age:number
}
class Person implements PersonInterface {
    name:string;age:number;
    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }
    greet(){
        return "hello "+this.name+ " your age is "+this.age
    }
}
const personobj=new Person("shravan",34)
console.log(personobj.greet())