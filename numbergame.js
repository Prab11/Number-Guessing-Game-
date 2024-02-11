//  Generate a Random Number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//  Handle Guess Function
function handleGuess() {
    var userGuess = document.getElementById("guessInput").value;
    console.log("User's guess:", userGuess);

    // Assuming randomNumber is declared globally or in an accessible scope
    if (userGuess == randomNumber) {
        document.getElementById("feedbackArea").textContent = "Congratulations! You guessed it!";
    } else if (userGuess < randomNumber) {
        document.getElementById("feedbackArea").textContent = "Too low. Try again!";
    } else {
        document.getElementById("feedbackArea").textContent = "Too high. Try again!";
    }
}

//  Attach Event Listener
document.getElementById("submitGuess").addEventListener("click", function() {
    handleGuess();
});


//  Generate a random number when the page loads
var randomNumber = generateRandomNumber();
console.log("Random number:", randomNumber);
