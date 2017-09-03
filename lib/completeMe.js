const Branch = require('./branch');

class CompleteMe {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(word) {
    const branch = new Branch();


    if (this.root === null) {
      this.root = branch;
    }

    let letters = [...word];
    let childBranch = this.root;

    letters.forEach( (letter) => {
      if (!childBranch.child[letter]) {
        childBranch.child[letter] = new Branch(letter)

      }
      childBranch = childBranch.child[letter]
    })

    if (!childBranch.isFinishedWord) {
      branch.isFinishedWord = true;
      this.count++;
    }



  }

  count() {
  	return this.count;
  }

}


module.exports = CompleteMe;
