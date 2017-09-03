const Branch = require('./branch');

class CompleteMe {
  constructor() {
    this.words = [];
    this.wordEntryPoint = null;
    this.count = 0;
  }

  insert(word) {
    const branch = new Branch();

    this.words.push(word)

    if (!this.wordEntryPoint) {
      this.wordEntryPoint = branch;
    }

    let letters = [...word.toLowerCase()];

    let currentBranch = this.wordEntryPoint;

    letters.forEach(letter => {
      if (!currentBranch.children[letter]) {
        currentBranch.children[letter] = new Branch(letter);
      }
      currentBranch = currentBranch.children[letter];
    });

    if (!currentBranch.isFinishedWord) {
      currentBranch.isFinishedWord = true;
      this.count++;
    }
  }

  count() {
  	return this.count;
  }

  // suggest(word) {
  // 	let wordsArray = [...word];
  // 	let currentBranch = this.wordEntryPoint;
  // 	let suggestions = [];
  //
  // 	for (let i = 0; i < wordsArray.length; i++) {
  // 		currentBranch = currentBranch.children[wordsArray[i]];
  // 	}
  // }

  	// const traverseTheTrie = (word, currentBranch) => {
  	// 	const keys = Object.keys(currentBranch.children);
  //
  	// 	for (let k = 0; k < keys.length; k++) {
  	// 		const child = currentBranch.children[keys[k]];
  	// 		const newString = word + child.letter;
  //
  	// 		if (child.isWord) {
  	// 			suggestions.push({value: newString, frequency: child.frequency, lastTouched: child.lastTouched});
  	// 		}
  	// 		traverseTheTrie(newString, child);
  	// 	}
  	// };
  //
  	// if (currentBranch && currentBranch.isWord) {
  	// 	suggestions.push({value: word, frequency: currentBranch.frequency, lastTouched: currentBranch.lastTouched});
  	// }
  	// if (currentBranch) {
  	// 	traverseTheTrie(word, currentBranch);
  	// }
  	// suggestions.sort((a, b) => {
  	// 	return b.frequency - a.frequency || b.lastTouched - a.lastTouched;
  	// });
  	// return suggestions.map(obj => {
  	// 	return obj.value;
  	// });
  //
  //
  // select(word) {
  // 	let wordsArray = [...word];
  // 	let currentBranch = this.wordEntryPoint;
  //
  // 	for (let i = 0; i < wordsArray.length; i++) {
  // 		currentBranch = currentBranch.children[wordsArray[i]];
  // 	}
  // 	currentBranch.frequency++;
  // 	currentBranch.lastTouched = Date.now();
  // }
  //
  // populate(dictionary) {
  // 	dictionary.forEach(word => {
  // 		this.insert(word);
  // 	});
  // }


}


module.exports = CompleteMe;
