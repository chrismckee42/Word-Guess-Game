const htmlNode = document.getElementById("game");
const alphabet = "qwertyuiopasdfghjklzxcvbnm"

var game = {
    wins: 0,
    losses: 0,
    remainingGuesses: '',
    wordProgress: [],
    actualWord: [],
    wrongGuesses: [],

    guessLetter: function (letter) {

        if (this.actualWord.indexOf(letter) === -1) {
            if (this.wrongGuesses.indexOf(letter) === -1) {
                this.wrongGuesses.push(letter);
                this.remainingGuesses += -1
                if (this.remainingGuesses === 0) {
                    //game over code here
                }

            };
        } else if (this.wordProgress.indexOf(letter) === -1) {
            for (let i = 0; i < this.actualWord.length; i++) {
                if (this.actualWord[i] === letter) {
                    this.wordProgress[i] = letter;
                }

            }
            if (this.wordProgress.indexOf("_") === -1) {
                //win
            }
        };

        // alert("Old Mileage: " + this.mileage);

        // this.mileage = this.mileage + 24000;

        // alert("New Mileage: " + this.mileage);
        // alert("Car needs a tuneup!");

        // this.isWorking = false;
    },

};

document.onkeyup = function (event) {
    const letter = event.key;
    if (alphabet.indexOf(letter) !== -1) {
        game.guessLetter(letter);
    }
};

