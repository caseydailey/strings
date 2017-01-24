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
	
//split returns an array with each letter an item
	let split = string.split("");
	
//then we can apply some basic array methods to get where we want
	let	reversed = split.reverse();
	
//we then join
	let	joined = reversed.join("");

//a little re-assignment for clarity	
	let reversedString = joined;

//and put it in the DOM
	output.innerHTML = `<p>reversed: ${reversedString}<p>`;

}

//Implement the logic in the alphabits function 
//that return the characters in alphabetical order, 
//and outputs the result in the DOM, below the text input.

function alphabits(string) {

//again, split gets us an array
	let split = string.split("");
//sort naturally returns an alphabetized array	
	let sorted = split.sort();
//join makes it be a string again	
	let joined = sorted.join("");
//a little re-assignment for clarity	
	let alphabetized = joined;
//and put it in the DOM
	output.innerHTML += `<p>alphabetized: ${alphabetized}</p>`;

}


//Implement the logic in the palindrome function 
//that determine whether the string is a palindrome. 
//If it is, display the text "Your string is a palidrome" in the DOM, 
//below the text input.

function palindrome(string) {

//same initial logic as reversal
		let split = string.split("");
		let	reversed = split.reverse();
		let	joined = reversed.join("");
		let reversedString = joined;

//get a message ready
		let message = "your string is a palindrome!";

//compare with a ternary operator
		(reversedString == string) ? output.innerHTML = message : null;
}


