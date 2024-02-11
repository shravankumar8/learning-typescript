interface Todo {
  title: string;
  description: string;
  id: number;
}
type todoupdate = Partial<Todo>;

function updatetodo(id: number, newprop: todoupdate) {
  // console.log(newprop);
}
updatetodo(1, {
  title: "dewdf",
});

let firstNamwee: string = "rfg";
// explixit assignment of type
let inplicit = "shravan";
// implicit assignment of type
// implicit assignment of type
// having typsecript guess the data type is called infer
// TS will through an error if the data type dosnt not match
// but JS wont throguht an error if such condition is met

const names: string[] = ["hii", "ka"];
names.push("hii");
//
console.log(names);
type bioData = { name: string; age: number; phoneNumber?: number };

const shravan1: bioData = {
  name: "shravan",
  age: 19,
};
// console.log(shravan1);
// optional property="?"if you want to give the value or utilize the value specefic then
// TS throws and error telling you that you have not given the value of some missing property
// to avaoid such error you use a ? to escape the error
//  enums
enum CardinalDir {
  North = 100,
  // value of north is 100 and Eash 101 and sooon
  East,
  South,
  West,
}
let currenctDir = CardinalDir.East;
// console.log(currenctDir);
// extender Interfaces
interface person {
  name?: string;
  age?: number;
  phone?: number;
  UID?: number;
  alcholic?: boolean;
}
interface student extends person {
  student_id?: number;
  fatherNane?: string;
  fatherNumb?: number;
}
let shravanStudent: student = {
  name: "shravan",
  age: 19,
  phone: 34,
  UID: 234,
  alcholic: false,
  student_id: 2343,
  fatherNane: "weufgvyf",
  fatherNumb: 34435,
};
// unions |
// when a data type can be more than a single type all the time
let phonenumber: number | string = "3564645";
// console.log(phonenumber);

// function ins TS and their type returns