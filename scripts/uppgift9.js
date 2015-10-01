var tInput = [
    ["Förnamn", "Efternamn", "Telefon"],
    ["Joakim", "Davidsson", 55555],
    ["Haris", "Kljajic", 33333],
    ["Robert", "Lewa", 99999],
    ["Ida", "Svensson", 77777],
    ["Mikael", "Svensson", 98765],
    ["Pennan", "Pennsson", 56789],
    ["Testperson", "Testsson", 98765]
];


generateTable(tInput);

function generateTable(tBook) {

    document.write("<table><thead><tr>");

    for (var i = 0; i < 3; i++) {
        document.write("<th>" + tBook[0][i] + "</th>");
    }
    document.write("</tr></thead>");
    document.write("<tbody>");


    for (var i = 1; i < tInput.length; i++) {
        if (i % 2 == 0) {
            document.write("<tr bgcolor= \"#BBB\">");
        }

        for (var j = 0; j < 3; j++) {
            document.write("<td>" + tBook[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</tbody></table>");

}
