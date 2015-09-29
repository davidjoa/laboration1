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
                var fahrenheit = (celsius) * (9 / 5) + 32;
                alert(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit");

            }
            break;

        case "3":
            var number = Math.floor(Math.random() * 100);


            var count = 1;
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
            }


            break;
        default:

    }
}
while (userChoice !== "0")