
class Branch {
  constructor(letter = null) {
    this.letter = letter;
    this.isFinishedWord = false;
    this.children = {};
  }
}


module.exports = Branch;
