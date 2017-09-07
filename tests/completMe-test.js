const { assert, expect } = require('chai');

// const CompleteMe = require('../lib/completeMe.js');
import CompleteMe from '../lib/completeMe.js'
const Branch = require('../lib/branch');

// const App = require('../lib/app.js');
let completion;
const text = "/usr/share/dict/words"
const fs = require('fs')
const dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('completeMe', () => {

  beforeEach( () => {
    completion = new CompleteMe;
  })

  it('should be an object', () => {
    assert.isObject(completion);
  })

  it('should have a root node defaulted to null', () => {
    expect(completion.root).to.equal(null);
  });

  it('should increment the counter when a word is completed', () => {
    let num = 'onethough'
    let num2 = 'twothough'

    console.log(completion.wordCount)
    completion.insert(num)
    console.log(completion.wordCount);
    completion.insert(num2)
    console.log(completion.wordCount);
  })

  it('should have a suggest function', () => {
    

  })

})


// describe('CompleteMe', () => {
//
//   beforeEach ( () => {
//     completion = new CompleteMe
//   })
//
//   it('should be a object', () => {
//
//     assert.isObject(completion);
//   });
//
//   it('should instantiate a new branch', () => {
//     let branch = new Branch();
//
//   })
//
//   it('should have insert function', () => {
//     should have a function that will insert a new word as a string
//     let branch = new Branch()
//
//     expect(completion.insert).to.be.a('function');
//
//     completion.populate(['apply', 'apple', 'bananas', 'cat', 'frog']);
//     completion.insert('anyword');
//     completion.populate(dictionary);
//
//     expect(completion.words.length).to.equal(235886);
//     expect(completion.words[0]).to.equal(dictionary)
//   })
//
//   it('should have count function', () => {
//     should have a function that will keep count of what we are doing
//     expect(completion.count).to.be.a('function');
//   })
//
// });
//
//
// describe('suggestAWord', () => {
//
//   beforeEach ( () => {
//     completion = new CompleteMe
//   })
//
//   it('should be a function', () => {
//     completion.insert('string')
//     completion.insert('strap')
//     completion.suggestAWord('str')
//     // assert.isFunction(suggestAWord);
//   });
//
//
// })
