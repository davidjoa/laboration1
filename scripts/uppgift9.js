

var tInput = [
    ["Förnamn", "Efternamn", "Telefon"],
    ["Joakim", "Davidsson", 55555],
    ["Haris", "Kljajic", 33333],
    ["Robert", "Lewa", 99999],
    ["Ida", "Svensson", 77777],
    ["Mikael", "Svensson", 98765]
];



var generateTable = function(tInput) {

    console.log(tInput);

    var table = document.write("<table><thead><tr></tr>");

    for (var i = 0; i < tInput.length; i++) {
        (tInput[i] += table);

    }
};
