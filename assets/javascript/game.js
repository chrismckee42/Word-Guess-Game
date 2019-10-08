const htmlNode = document.getElementById("game");
const alphabet = "qwertyuiopasdfghjklzxcvbnm"

var game = {
    wins: 0,
    losses: 0,
    remainingGuesses: 10,
    wordProgress: ["_", "_", "_", "_"],
    actualWord: ["j", "a", "z", "z"],
    wrongGuesses: [],

    guessLetter: function (letter) {

        if (this.actualWord.indexOf(letter) === -1) {
            if (this.wrongGuesses.indexOf(letter) === -1) {
                this.wrongGuesses.push(letter);
                this.remainingGuesses += -1
                if (this.remainingGuesses === 0) {
                    //game over code here
                    htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                    htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                    htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
                    htmlNode.innerHTML += "<h2>Game Over</h2>";
                } else {
                    //game continues
                    htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                    htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                    htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
                }

            };
        } else if (this.wordProgress.indexOf(letter) === -1) {
            //console.log("ping1");
            for (let i = 0; i < this.actualWord.length; i++) {
                if (this.actualWord[i] === letter) {
                    this.wordProgress[i] = letter;
                    //console.log("pingx", this.wordProgress, letter);
                }

            }
            if (this.wordProgress.indexOf("_") === -1) {
                //console.log("ping2");
                //win
                htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
                htmlNode.innerHTML += "<h2>Win!</h2>";
            } else {
                //console.log("ping3");
                //game continues
                htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
            }
        };


    },

};

htmlNode.innerHTML = "<h2>Word: " + game.wordProgress.join("") + "</h2>";
htmlNode.innerHTML += "<h2>Guessed Letters: " + game.wrongGuesses + "</h2>";
htmlNode.innerHTML += "<h2>Reamining Guesses: " + game.remainingGuesses + "</h2>";
htmlNode.innerHTML += "<h2>Wins: " + game.wins + "</h2>";
htmlNode.innerHTML += "<h2>Losses: " + game.losses + "</h2>";


document.onkeyup = function (event) {
    const inputKey = event.key;
    if (alphabet.indexOf(inputKey) !== -1) {
        game.guessLetter(inputKey);
    }
};

