var wins = 0;
var losses = 0;
var guessCount = 0;
var maxGuesses = 10;
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = []
var randomLetter = letter[Math.floor(Math.random() * letter.length)];

//Tried to get to display the userGuesses array, on the website. I ran into the same problem working on the hangman game as well.
var html =
	"<p>You have guessed: " + userGuesses + "</p>";
document.getElementById("userGuesses").innerHTML = html;

function guessLetter(){
  var guess = document.getElementById("guess").value;
  userGuesses.push(guess);
  //I console.logged the array out so I can see it there at least. I also 
  console.log(userGuesses);

  if (guess == randomLetter){
    document.getElementById("message").innerHTML= "That's it! It took you " +guessCount+ " guesses";
    guessCount = 0;
    wins += 1;
    var html = 
        	"<p>wins: " + wins + "</p>";
    return;
	}
    //Here I tried to set the parameter that if a letter has already been guessed the game will tell you to guess another. I couldn't get this to work.
  // } else if (guess == userGuesses[i]){
  // 	alert("You have already guessed that letter, guess another! You have " + maxGuesses + " guesses left!");
  // }

  else if (guess != randomLetter){
  	maxGuesses-=1;
  	alert("Wrong letter! You have " + maxGuesses + " guesses left!");
  } 
  guessCount += 1;

    if (guessCount >= maxGuesses) {
    document.getElementById("message").innerHTML= "Sorry, you ran out of guesses. The letter was " + randomLetter;
        losses += 1;
        var html = 
        	"<p>losses: " + losses + "</p>";
    //Here I tried to reset the game but I'm not sure I accomplished that. I think that now when someone loses the random number immediately resets and they only get one guess
    guessCount = 0;
    randomLetter = letter[Math.floor(Math.random() * letter.length)];
 
    document.getElementById("score").innerHTML = html;
	}
 
}

