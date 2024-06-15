// // pick allow a user to create a new type from an exsiting type infact the new type can user properties from parent
// interface User1 {
//   id: number;
//   name: string;
//   age: number;
//   password: string;
//   email: string;
// }
// type UpdateUser = Pick<User1, "name" | "age" | "password">;
// function greeter(greets: UpdateUser) {
//   console.log(greets.name);
//   console.log(greets.age);
//   console.log(greets.password);
// }

// greeter({ age: 1, password: ":password", name: "name" });
// // instead of creating a new interface for new function get update user into you create a subinterface
