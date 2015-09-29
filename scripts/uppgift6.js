function triangel() {
    var kat1 = prompt("Ange längden på kateter 1:");
    var kat2 = prompt("Ange längden på kateter 2:");
    var hypot = Math.sqrt(kat1 * kat1 + kat2 * kat2);

    alert("Hypotenusan är " + hypot);
}

triangel();