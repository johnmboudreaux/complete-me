
class Branch {
  constructor(letter = null) {
    this.letter = letter;
    this.isFinishedWord = false;
    this.child = {};
  }
}


module.exports = Branch;
