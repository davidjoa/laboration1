var newString = "Jag tEsTaR lITe hÄr bara";

var UpperToLowerLowerToUpper = function(newString) {
    var emptyStr = "";

    for (var i = 0; i < newString.length; i++) {

        if (newString[i] == newString[i].toLowerCase()) {
            emptyStr += newString[i].toUpperCase();
        }
        else {
            emptyStr += newString[i].toLowerCase();

        }


    }
    return (emptyStr);
}

var res = newString.replace(/[aA]/g, "#");
console.log(UpperToLowerLowerToUpper(res));
