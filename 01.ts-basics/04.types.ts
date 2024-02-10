type personInterface = {
  name: string;
  age: number;
};
function karl(person: personInterface) {
  return `hello you age is ${person.age} and name is ${person.name}`;
}
console.log(karl({ name: "shravan", age: 324 }));
