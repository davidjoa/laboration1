var tentamen = [10, 2, 89, 9, 65, 13, 3];
var total = 0;
for (var i = 0; i < tentamen.length; i++) {
    total += tentamen[i];
}
var avg = total / tentamen.length;
var resMinMax = [];
resMinMax[0] = Math.floor(avg);
resMinMax[1] = Math.max.apply(Math, tentamen);
resMinMax[2] = Math.min.apply(Math, tentamen);

console.log(resMinMax);