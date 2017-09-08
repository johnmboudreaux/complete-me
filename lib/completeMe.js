const Branch = require('./branch');

class CompleteMe {
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

  find(word) {
    let wordsArray = [...word];
    let currentBranch = this.root;

    for (let i = 0; i < wordsArray.length; i++) {
      currentBranch = currentBranch.child[wordsArray[i]];
    }
    return currentBranch;
  }

  suggest(word) {
    let currentBranch = this.find(word);
    let suggestion = [];

    if (currentBranch.isWord === true) {
      suggestion.push({value: word, frequency: currentBranch.frequency, lastTouched: currentBranch.lastTouched});
    }

    const trieTraversal = (word, currentBranch) => {
      const keys = Object.keys(currentBranch.child);


      for (let i = 0; i < keys.length; i++) {
        const child = currentBranch.child[keys[i]];
        const newString = word + child.letter;

        if (child.isWord) {
          suggestion.push({value: newString, frequency: child.frequency, lastTouched: child.lastTouched});
        }
        trieTraversal(newString, child);

      }
    }

    if (currentBranch) {
      trieTraversal(word, currentBranch);
    }
    suggestion.sort((a, b) => {
      return b.frequency - a.frequency;
    })
    let suggestionArray = suggestion.map(obj => {
      return obj.value;
    });

    console.log(suggestionArray);
    return suggestionArray;
  }

  select(word) {
    let currentBranch = this.find(word)

    currentBranch.frequency++;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    })
  }


}

module.exports = CompleteMe;
