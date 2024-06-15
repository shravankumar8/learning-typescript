"use strict";
function greeter(greets) {
    console.log(greets.name);
    console.log(greets.age);
    greets.password ? console.log(greets.password) : "";
}
greeter({ age: 21, name: "shravanKumade" });
// instead of creating a new interface for new function get update user into you create a subinterface
