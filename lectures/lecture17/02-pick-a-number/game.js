function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {

    const guess = Number(document.querySelector("#guess").value);
    const messageEl = document.querySelector("#message");
    const numGuessesEl = Number(document.querySelector("#num_guesses").value);

    if (guess > secret) {
        console.log("Too high");
        messageEl.innerHTML = "Too high";
    }
    if (guess < secret) {
        console.log("Too low");
        messageEl.innerHTML = "Too low";
    }
    if (guess === secret) {
        console.log("You win");
        messageEl.innerHTML = "You win";
    }
    numGuesses = numGuesses + 1;
    numGuessesEl.innerHTML = numGuesses;

}
