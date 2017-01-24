console.log('ready');

const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output");

//When the user presses the enter key in the text input, 
//or clicks the button, set the value of the testString variable 
//(see below) to the value of the input.
//The output of each of the functions should immediately appear as well.

button.addEventListener("click", runIt);
form.addEventListener("keypress", e => (e.keyCode == 13) ? runIt() : null);

//let testString = null;

function runIt () {
	
	testString = input.value;
	console.log('testSting:', testString);
	reversal(testString);
	alphabits(testString);
	palindrome(testString);

}


//Implement the logic in the reversal function 
//that reverses the order of the characters in the string, 
//and outputs the result in the DOM, below the text input.

function reversal(string) {
	
	console.log('testString:', testString);

	let split = string.split("");
	console.log('split:', split);
	let	reversed = split.reverse();
	console.log('reversed:', reversed);
	let	joined = reversed.join("");
	console.log('joined:', joined);
	let reversedString = joined;
	output.innerHTML = `<p>reversed: ${reversedString}<p>`;

}

//Implement the logic in the alphabits function 
//that return the characters in alphabetical order, 
//and outputs the result in the DOM, below the text input.

function alphabits(string) {

	let split = string.split("");
	console.log('split:', split);
	let sorted = split.sort();
	console.log('sorted:', sorted);
	let joined = sorted.join("");
	console.log('joined:', joined);
	let alphabetized = joined;
	output.innerHTML += `<p>alphabetized: ${alphabetized}</p>`;

}


//Implement the logic in the palindrome function 
//that determine whether the string is a palindrome. 
//If it is, display the text "Your string is a palidrome" in the DOM, 
//below the text input.

function palindrome(string) {

		let split = string.split("");
		console.log('split:', split);
		let	reversed = split.reverse();
		console.log('reversed:', reversed);
		let	joined = reversed.join("");
		console.log('joined:', joined);
		let reversedString = joined;

		let message = "your string is a palindrome!";

		(reversedString == string) ? output.innerHTML = message : null;
}


