// // pick allow a user to create a new type from an exsiting type infact the new type can user properties from parent
// interface User1 {
//   id: number;
//   name: string;
//   age: number;
//   password: string;
//   email: string;
// }
// type UpdateUser = Pick<User1, "name" | "age" | "password">;
// type partialProps = Partial<UpdateUser>;
// function greeter(greets: partialProps) {
//   console.log(greets.name);
//   console.log(greets.age);
//   greets.password ? console.log(greets.password) : "";
// }

// greeter({ age: 21, name: "shravanKumade" });
// // instead of creating a new interface for new function get update user into you create a subinterface
