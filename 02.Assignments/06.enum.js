/*Enums:
Define an enum for days of the week. Create a variable and assign it a day from the enum, then log it to the console.*/
var week;
(function (week) {
    week[week["sunday"] = 0] = "sunday";
    week[week["monday"] = 1] = "monday";
    week[week["tuesday"] = 2] = "tuesday";
    week[week["webnesday"] = 3] = "webnesday";
    week[week["thuruday"] = 4] = "thuruday";
    week[week["friday"] = 5] = "friday";
    week[week["saturday"] = 6] = "saturday";
})(week || (week = {}));
function dayPicker(day) {
    console.log(day);
}
dayPicker(week.saturday);
