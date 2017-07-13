console.log("overly-excited.js");

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

let sentenceWords1 = [
	"The",
	"walrus",
	"danced",
	"through",
	"the",
	"trees",
	"in",
	"the",
	"light",
	"of",
	"the",
	"moon"
];

function addExcitement(wordArray) {

	let sentence1 = "";

	for (let i = 0; i < wordArray.length; i++) {

		let nextWord1 = wordArray[i] + ' ';
		
		sentence1 += nextWord1;
		
		console.log(sentence1);
	}

};

addExcitement(sentenceWords1);