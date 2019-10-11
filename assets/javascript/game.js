const htmlNode = document.getElementById("game");
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
                //sort
                //split("")
                //join("")
                this.remainingGuesses += -1
                if (this.remainingGuesses === 0) {
                    //game over code here
                    this.losses++;
                    htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                    htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                    htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                    htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
                    htmlNode.innerHTML += "<h2>Game Over</h2>";
                    htmlNode.innerHTML += "<h3>Press any key to continue</h3>";
                    this.inProgress = false;


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
            if (this.wordProgress.indexOf("-") === -1) {
                //console.log("ping2");
                //win
                this.wins++;
                htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
                htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
                htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
                htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
                htmlNode.innerHTML += "<h2>Win!</h2>";
                htmlNode.innerHTML += "<h3>Press any key to continue</h3>";
                this.inProgress = false;
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
        htmlNode.innerHTML = "<h2>Word: " + this.wordProgress.join("") + "</h2>";
        htmlNode.innerHTML += "<h2>Guessed Letters: " + this.wrongGuesses + "</h2>";
        htmlNode.innerHTML += "<h2>Reamining Guesses: " + this.remainingGuesses + "</h2>";
        htmlNode.innerHTML += "<h2>Wins: " + this.wins + "</h2>";
        htmlNode.innerHTML += "<h2>Losses: " + this.losses + "</h2>";
    },

};

htmlNode.innerHTML = "<h2>Word: " + game.wordProgress.join("") + "</h2>";
htmlNode.innerHTML += "<h2>Guessed Letters: " + game.wrongGuesses + "</h2>";
htmlNode.innerHTML += "<h2>Reamining Guesses: " + game.remainingGuesses + "</h2>";
htmlNode.innerHTML += "<h2>Wins: " + game.wins + "</h2>";
htmlNode.innerHTML += "<h2>Losses: " + game.losses + "</h2>";


document.onkeyup = function (event) {
    const inputKey = event.key;
    if (alphabet.indexOf(inputKey) !== -1 & game.inProgress) {
        game.guessLetter(inputKey);
    } else if (!game.inProgress) {
        game.newGame();
    }
};

