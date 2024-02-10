// Generics are variable containers used to sotore data type dynamically
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const arr: string[] = ["rgerg", "ergerg", "gtrgher"];
console.log(getFirstElement(arr));
// descrigbing what a function will return
