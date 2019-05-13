

        // My array that lists out all of the options .
        var GoTNames = ["Roose", "Tywin", "Davos", "Beric", "Jaqen", "Hodor", "Euron", "Jorah", "Theon", "Petyr", "Varys", "Sansa", "Bronn", "Jaime", "Stark"];
        var blanks = []
        var usedLetters = []

        var computerChoice
        var userGuess

        var guessesLeft = 0

        // To display the text for the user
        var guessesRemainingText = document.getElementById("guesses-remaining")
        var letterGuessedText = document.getElementById("letter-guessed")
        var allLettersGuessedText = document.getElementById("all-letters-guessed")



        var letterArray = []
        

        // The alert that appears if you win
        function win() {
            alert("You guessed " + computerChoice + " and you're right! You've lived to see another day! Valar dohaeris.")
            wins++
            document.querySelector(".wins").innerHTML = "Wins: "+wins; //displays wins
            
            start()
        }

        function lose() {
            alert("You guessed " + computerChoice + " and you were wrong! A debt is owed to the Many-Faced God.")
            losses++
            document.querySelector(".losses").innerHTML = "Losses: "+losses; //displays losses
            
            start()
        }

        function start() {
            computerChoice = GoTNames[Math.floor(Math.random() * GoTNames.length)].toLowerCase();
            console.log(computerChoice)
            letterArray = computerChoice.split("");
            // blanks = ["__"]

            guessesLeft = 8;
            blanks=[]//this resets the array
            for (let i = 0; i < letterArray.length; i++) {
                blanks.push(" __");

            }
            document.querySelector("#guesses-remaining").innerHTML = "Guesses Left: "+guessesLeft;
            document.querySelector("#game-display").innerHTML = blanks; // display blanks
        }

        // This function is run whenever the user presses a key.
        start()

        document.onkeyup = function (event) {
            // Determines which key was pressed.
            userGuess = event.key.toLowerCase();
            console.log(userGuess);

            if (usedLetters.includes(userGuess)) {

                alert("You already guessed this letter!");
                return;
            }
            usedLetters.push(userGuess);

            if (letterArray.includes(userGuess)) {
                for (let i = 0; i < letterArray.length; i++) {
                    if (userGuess === letterArray[i]) {
                        blanks[i] = userGuess;

                    }

                }
                if (!blanks.includes(" __")) {
                    win()
                }
            }
            else {
                guessesLeft--;
                if (guessesLeft === 0) {
                    lose();
                }
            }
            console.log(blanks)
            
        }


    