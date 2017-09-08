
class Branch {
  constructor(letter = null) {
    this.letter = letter;
    this.isWord = false;
    this.child = {};
    this.frequency = 0;
  }
}


module.exports = Branch;
