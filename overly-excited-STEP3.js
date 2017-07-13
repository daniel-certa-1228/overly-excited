console.log("overly-excited-STEP3.js");

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
	let addExcitement = "!"
	let space = " "
	let excitementCount = 1;

	for (let i = 0; i < wordArray.length; i++) {
		let nextWord1 = wordArray[i];
		let nextWord1WithSpace = wordArray[i] + ' ';
		

		sentence1 += nextWord1WithSpace;

		if ((i+1)%3 === 0) {
			for (let j = 0; j < excitementCount; j++) {
				sentence1 += addExcitement;
			}
			
		}

		excitementCount++;

		console.log(sentence1);

	}

};

addExcitement(sentenceWords1);