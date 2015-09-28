/*console.log("Hello World"); //Uppgift 1 moment 1
alert("Rad 1\nRad 2"); //Uppgift 1 moment 2*/


/*var average = function (a,b,c,d){

var val = (a+b+c+d) / 4;
console.log(val);
};

average(4,4,4,4); */ //Uppgift 2 moment 1. Är denna OK?

/*var average = function(a,b,c,d) {
    return (a+b+c+d) / 4;
};

var answer = average(4,4,4,4);
console.log(answer);*/ //Uppgift 2 moment 1, Eller denna?





/*var fras = function(text1, text2) {
    console.log(text1 + text2);
};

fras("Funkar", ",fint")*/ //Uppgift 2 moment 2

/*var number = Math.floor(Math.random() * 100)
var count = 0;
var correctAnswer = false
while (!correctAnswer) {
    var guess = prompt("Guess what number i'm thinking off between 1 - 100");

    if (guess < number) {
        alert("Higher!");
        count += 1;
    }

    else if (guess > number) {
        alert("Lower!");
        count += 1;
    }

    else {
        alert("Correct guess, lucky you! It took you " + count + " turns")
        count += 1 
        correctAnswer = true;
    }
}*/

do {
    var userChoice = prompt("0.Exit\n\n1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit\n3.Guess number");

    switch (userChoice) {
        case "1":

            if (userChoice === "1") {
                var fahrenheit = prompt("Fahrenheit?");
                var celsius = (fahrenheit - 32) * 5 / 9;
                alert(fahrenheit + " degrees Fahrenheit is equal to " + celsius + " degrees Celsius");
            }

            break;
        case "2":

            if (userChoice === "2") {
                var celsius = prompt("Celsius?");
                var fahrenheit = (celsius + 32) * 5 / 9;
                alert(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit");

            }

            break;
        case "3":
            


            break;
        default:

    }
}
while (userChoice !== "0")
