var number = Math.floor(Math.random() * 100); 
var count = 0;
var correctAnswer = false;
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
        alert("Correct guess, lucky you! It took you " + count + " turns");
        count += 1 ;
        correctAnswer = true;
    }
}