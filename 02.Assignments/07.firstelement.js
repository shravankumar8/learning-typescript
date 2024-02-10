var stringArray = [];
function getFirstElement(stringArray) {
    return stringArray[0];
}
stringArray = ["fgrerg", "wrgverg", "tdhbr"];
setTimeout(function () {
    stringArray = [1, 2, 3, 4, 5, 6, 7];
    console.log(stringArray[0]);
}, 2000);
var ans = getFirstElement(stringArray);
console.log(ans);
// descrigbing what a function will return
