<script type="text/javascript">

// counter for guesses left
var guess.counter = 0;

// counter for losses
var loss.counter = 0;

// counter for wins     
var win.counter = 0;

// empty array for incorrect letters guessed
var voidLetters = [];

// full array for alphabet
var alphabetU= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// array full of word bank, which are strings beginning with position 0
var wordBank = ["CANDY CASTLE", "GUMDROP MOUNTAIN", "LOLLIPOP WOODS", "MOLASSES SWAMP", "PEPPERMINT FOREST", "ICE CREAM SEA", "CUPCAKE COMMONS", "PEANUT BRITTLE HOUSE", "GINGERBREAD PLUIM TREES", "DUKE OF SWIRL", "GRAMMA NUT", "JOLLY", "PLUMPY", "MAMMA GINGERTREE", "GRAMMA GOOEY", "GLOPPY", "MISTER MINT", "PRIINCESS LOLLY", "QUEEN FROSTINE", "LORD LICORICE"];

// empty variable for string (answer from word bank) not shown to user
var solution = ''

// empty variable for correctly guessed letters corresponding to positions in solution
var answer = ''

// empty variable for key pressed by user
var userGuess= ''


// game start function
function gameStart() {


// math function to select word bank string and save to variable
	solution = wordBank[Math.floor(Math.random() * wordBank.length)];


// count the string length of the selected word variable
	answer = solution.replace(/([A-Z])/g, "_")

// event get key down and save to correct variables
	document.onkeyup = function(event) {
		var userGuess = event.key;
		console.log(userGuess.toUpperCase());

// compare if varaible guessed is in alphabet array
	if (userGuess !== alphabetU) {
		alert("Invalid entry. Please type a letter")

// empty array for position of correctly guessed letters
	var position = [];
	for(var i=0; i<solution.length;i++) {
    	if (solution[i] === userGuess) position.push(i);
	}

		// IF NOT in word selected variable add to function incorrectly guessed letters

			// THEN move counter for "guesses left" down

			// THEN alert: sorry, please select a different letter


		// IF in "word selected" variable, save the position number(s) in the string to array.n


			// THEN compare to "correctly guessed letters" variable


				// IF NOT already guessed, write the variable of "guessed letter" over the corresponding position(s) in the "correctly guessed letters" variable


					// THEN compare correctly guessed variable to word selected variable (compare strings OR use a counter for underscores?)


						// IF the same, counter wins up


							// THEN alert: You won...


							// THEN empty appropriate arrays & variables


						// IF different, return to key event down


				// IF already guessed, alert: already used, select a different letter




      var targetDiv = document.getElementById("empty-div");

      targetDiv.innerHTML = "Hello friends!";

      // In this example, we instead create a new div called "newDiv".
      var newDiv = document.createElement("div");

      // We then give this newDiv the text "A pleasure to meet you!".
      newDiv.innerHTML = "A pleasure to meet you!";

      // Now we use the ".appendChild" method to combine the two divs together on the page.
      targetDiv.appendChild(newDiv);

    </script>