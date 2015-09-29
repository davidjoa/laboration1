var month = prompt("Vilken månad fyller du år (1-12)?");
month = parseInt(month, 10) - 1;

var day = prompt("Vilken dag fyller du år?");


var today = new Date();
var bDay = new Date(today.getFullYear(), month, day);
if (today.getTime() > bDay.getTime()) {
    bDay.setFullYear(bDay.getFullYear() + 1);
}
var dif = bDay.getTime() - today.getTime();
var days = Math.floor(dif / (1000 * 60 * 60 * 24)) + 1;
alert(days + " dagar till din födelsedag!");
console.log(days);