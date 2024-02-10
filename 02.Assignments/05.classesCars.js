var car = /** @class */ (function () {
    function car(make, model) {
        this.make = make;
        this.model = model;
    }
    car.prototype.start = function () {
        console.log("enginer started");
    };
    return car;
}());
var myCar = new car("tyota", "camry");
console.log(myCar.model, myCar.make);
myCar.start();
