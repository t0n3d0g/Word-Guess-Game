// Computer selects random letter
// User clicks keyboard to guess the letter
// If User guessed correct letter, then User Wins increases by 1
//      Game Resets
// If User guessed incorrect letter, Numer of Guesses decrements then
// User tries again until Remaining Guesses reaches zero
// Then User losses increases by 1
//      Game Resets

// Letters and Variables.
var cpuGuess = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess;
var discardLetters = [""];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;

// Generate computer's choice
var cpuSelects = cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
console.log(cpuSelects);


document.onkeyup = function(event) {
    
    var userGuess = event.key;

    if (remainingGuesses === 0) {
        //Number of Losses increments
        losses++;
        // Losses count sent to HTML
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        // User gets alerts telling them of the loss
        alert("Better luck next time!");
        // Used Letters array resets
        discardLetters = [""];
        // Guesses remaining resets
        remainingGuesses = 9;
        // Used Letter & Guesses Remaining updated in HTML
        document.getElementById("lettersUsed").innerHTML = "Used Letters: " + discardLetters;
        document.getElementById("remGuess").innerHTML = "Guesses Left: " + remainingGuesses;
        // Resets Computer's random letter 
        cpuSelects = cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
        console.log(cpuSelects);
    }
    
    if (userGuess === cpuSelects){
        //   When User's guess matches the Computer's guess, User Wins!!!
        console.log("You won!");
        alert("You won!")
        // Reports the win to HTML
        document.getElementById("wins").innerHTML = "Wins: " + wins++;
        // Resets discardedLetters array
        discardLetters = [];
        // Resets HTML Letter Used div
        document.getElementById("lettersUsed").innerHTML = "Used Letters: " + discardLetters;
        // Resets Remaining Guesses & sends to HTML
        remainingGuesses = 9;
        document.getElementById("remGuess").innerHTML = "Guesses left: " + remainingGuesses;
        // Resets Computer's random letter
        cpuSelects = cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
        console.log(cpuSelects);
            } 
    else {
        // User guessed wrong. Remaining Guesses decrements
        // console.log("Did not match computer guess");
        document.getElementById("remGuess").innerHTML = "Guesses Left: " + remainingGuesses--;
        // Incorrect Guess added to discard array
        discardLetters.push(userGuess);
        // Guessed Letters gets updated in HTML
        document.getElementById("lettersUsed").innerHTML = "Letters Used: " + discardLetters + " ";
    }
    
    
}