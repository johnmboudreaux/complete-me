const Branch = require('./branch');

export default class CompleteMe {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  insert(word) {
    const branch = new Branch();

    if (this.root === null) {
      this.root = branch;
    }

    let letters = [...word.toLowerCase()];

    // let letters = [...word];

    let childBranch = this.root;

    letters.forEach(letter => {
      if (!childBranch.child[letter]) {
        childBranch.child[letter] = new Branch(letter);
      }
      childBranch = childBranch.child[letter];
    })

    if (!childBranch.isWord) {
      childBranch.isWord = true;
      this.wordCount++
    }

  }

  count() {
    return this.wordCount;
  }

  suggest(word) {
    let wordsArray = [...word];
    let currentBranch = this.root;
    let suggestions = [];

    for (let i = 0; i < wordsArray.length; i++) {
      currentBranch = currentBranch.child[wordsArray[i]];
    }


    const traverseTheTrie = (word, currentBranch) => {
      const keys = Object.keys(currentBranch.child);

      for (let i = 0; i < keys.length; k++) {
        const child = currentBranch.child[keys[i]];
        const newString = word + child.letter;

        if (child.isWord) {
          suggestions.push({value: newString, frequency: child.frequency, lastTouched: child.lastTouched});
        }
        traverseTheTrie(newString, child);
      }
    }

    if (currentBranch && currentBranch.isWord) {
      suggestions.push({value: word, frequency: currentBranch.frequency, lastTouched: currentBranch.lastTouched});
    }
    if (currentBranch) {
      traverseTheTrie(word, currentBranch);
    }
    suggestions.sort((a, b) => {
      return b.frequency - a.frequency || b.lastTouched - a.lastTouched;
    })
    return suggestions.map(obj => {
      return obj.value;
    });
  }

  select(word) {
    let wordsArray = [...word];
    let currentBranch = this.root;

    for (let i = 0; i < wordsArray.length; i++) {
      currentBranch = currentBranch.child[wordsArray[i]];
    }
    currentBranch.frequency++;
    currentBranch.lastTouched = Date.now()
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    })
  }


}


module.exports = CompleteMe;
