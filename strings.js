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


function reversal(string) {	
	let reversedString = string.split("").reverse().join("");
	return reversedString;
}


function alphabits(string) {
	let alphabetized = string.split("").sort().join("");
	return alphabetized;
}


function palindrome(string) {
		let reversedString = reversal(string);
		return reversedString == string ? true : false;
}

function runIt () {
	
	let str = input.value;

	if (isNaN(str)) {

	let alpha = alphabits(str);
	let rev = reversal(str);
	let pal = palindrome(str);

	output.innerHTML = `<p>alphabetized: ${alpha}</p>
						<p>reversed: ${rev}</p>
						<p>palindrome: ${pal}</p>`;
	input.value = "";

	} else {
		alert("letters only please");
		input.value = "";
		output.innerHTML = "";
	}
}


