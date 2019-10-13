const wordNode = document.getElementById("word");
const guessedNode = document.getElementById("guessed");
const guessesNode = document.getElementById("guesses");
const winsNode = document.getElementById("wins");
const lossesNode = document.getElementById("losses");
const gameStateNode = document.getElementById("gameState");
const alphabet = "qwertyuiopasdfghjklzxcvbnm"
const GUESSTOTAL = 10

var game = {
    inProgress: true,
    wins: 0,
    losses: 0,
    remainingGuesses: GUESSTOTAL,
    wordProgress: ["-", "-", "-", "-"],
    actualWord: ["j", "a", "z", "z"],
    wrongGuesses: [],
    words: ["handsomely", "truculent", "glass", "haircut", "careless", "line", "develop", "sound", "splendid", "accessible", "van", "synonymous"],
    wordIndex: 0,

    guessLetter: function (letter) {
        if (this.actualWord.indexOf(letter) === -1) {
            if (this.wrongGuesses.indexOf(letter) === -1) {
                // Wrong Guess
                this.wrongGuesses.push(letter);
                this.wrongGuesses.sort();
                this.remainingGuesses += -1
                if (this.remainingGuesses === 0) {
                    //game over code here
                    this.losses++;
                    wordNode.innerHTML = "<h4>Word: " + this.wordProgress.join("") + "</h4>";
                    guessedNode.innerHTML = "<h4>Guessed Letters: " + this.wrongGuesses + "</h4>";
                    guessesNode.innerHTML = "<h4>Reamining Guesses: " + this.remainingGuesses + "</h4>";
                    winsNode.innerHTML = "<h4>Wins: " + this.wins + "</h4>";
                    lossesNode.innerHTML = "<h4>Losses: " + this.losses + "</h4>";
                    gameStateNode.innerHTML = "<h3>Game Over</h3>";
                    gameStateNode.innerHTML += "<h5>Press any key to continue</h5>";
                    this.inProgress = false;
                } else {
                    //game continues
                    wordNode.innerHTML = "<h4>Word: " + this.wordProgress.join("") + "</h4>";
                    guessedNode.innerHTML = "<h4>Guessed Letters: " + this.wrongGuesses + "</h4>";
                    guessesNode.innerHTML = "<h4>Reamining Guesses: " + this.remainingGuesses + "</h4>";
                    winsNode.innerHTML = "<h4>Wins: " + this.wins + "</h4>";
                    lossesNode.innerHTML = "<h4>Losses: " + this.losses + "</h4>";
                    gameStateNode.innerHTML = "";
                }
            };
        } else if (this.wordProgress.indexOf(letter) === -1) {
            for (let i = 0; i < this.actualWord.length; i++) {
                if (this.actualWord[i] === letter) {
                    this.wordProgress[i] = letter;
                }
            }
            if (this.wordProgress.indexOf("-") === -1) {
                //win
                this.wins++;
                wordNode.innerHTML = "<h4>Word: " + this.wordProgress.join("") + "</h4>";
                guessedNode.innerHTML = "<h4>Guessed Letters: " + this.wrongGuesses + "</h4>";
                guessesNode.innerHTML = "<h4>Reamining Guesses: " + this.remainingGuesses + "</h4>";
                winsNode.innerHTML = "<h4>Wins: " + this.wins + "</h4>";
                lossesNode.innerHTML = "<h4>Losses: " + this.losses + "</h4>";
                gameStateNode.innerHTML = "<h3>Win!</h3>";
                gameStateNode.innerHTML += "<h5>Press any key to continue</h5>";
                this.inProgress = false;
            } else {
                //game continues
                wordNode.innerHTML = "<h4>Word: " + this.wordProgress.join("") + "</h4>";
                guessedNode.innerHTML = "<h4>Guessed Letters: " + this.wrongGuesses + "</h4>";
                guessesNode.innerHTML = "<h4>Reamining Guesses: " + this.remainingGuesses + "</h4>";
                winsNode.innerHTML = "<h4>Wins: " + this.wins + "</h4>";
                lossesNode.innerHTML = "<h4>Losses: " + this.losses + "</h4>";
                gameStateNode.innerHTML = "";
            }
        };
    },

    newGame: function () {
        this.remainingGuesses = GUESSTOTAL;
        this.wrongGuesses = [];
        this.actualWord = this.words[this.wordIndex].split("");
        this.wordIndex++;
        this.wordProgress = Array(this.actualWord.length);
        for (let i = 0; i < this.wordProgress.length; i++) {
            this.wordProgress[i] = "-";
        }
        this.inProgress = true;
        wordNode.innerHTML = "<h4>Word: " + this.wordProgress.join("") + "</h4>";
        guessedNode.innerHTML = "<h4>Guessed Letters: " + this.wrongGuesses + "</h4>";
        guessesNode.innerHTML = "<h4>Reamining Guesses: " + this.remainingGuesses + "</h4>";
        winsNode.innerHTML = "<h4>Wins: " + this.wins + "</h4>";
        lossesNode.innerHTML = "<h4>Losses: " + this.losses + "</h4>";
        gameStateNode.innerHTML = "";
    },
};

wordNode.innerHTML = "<h4>Word: " + game.wordProgress.join("") + "</h4>";
guessedNode.innerHTML = "<h4>Guessed Letters: " + game.wrongGuesses + "</h4>";
guessesNode.innerHTML = "<h4>Reamining Guesses: " + game.remainingGuesses + "</h4>";
winsNode.innerHTML = "<h4>Wins: " + game.wins + "</h4>";
lossesNode.innerHTML = "<h4>Losses: " + game.losses + "</h4>";

document.onkeyup = function (event) {
    const inputKey = event.key;
    if (alphabet.indexOf(inputKey) !== -1 & game.inProgress) {
        game.guessLetter(inputKey);
    } else if (!game.inProgress) {
        game.newGame();
    }
};