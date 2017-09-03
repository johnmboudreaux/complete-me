const { assert, expect } = require ('chai');
const CompleteMe = require ('../lib/completeMe.js');
const Branch = require('../lib/branch');
// const App = require('../lib/app.js');
let completion;
const text = "/usr/share/dict/words"
const fs = require('fs')
const dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('CompleteMe', () => {

  beforeEach ( ()=> {
    completion = new CompleteMe
  })

  it('should be a object', () => {

    assert.isObject(completion);
  });

  it('should instantiate a new branch', () => {
    let branch = new Branch();

    assert.instanceOf(branch, Branch, 'heeeelp')
  })

  it('should have insert function', () => {
    //should have a function that will insert a new word as a string
    // let branch = new Branch()

    expect(completion.insert).to.be.a('function');

    // completion.populate(['apply', 'apple', 'bananas', 'cat', 'frog']);
    completion.insert('anyword');
    completion.insert('anywhere');

    // expect(completion.words.length).to.equal(235886);
    // expect(completion.words[0]).to.equal(dictionary)
  })

  // it('should have count function', () => {
  //   //should have a function that will keep count of what we are doing
  //   expect(completion.count).to.be.a('function');
  // })

});
