const { assert, expect } = require('chai');
const CompleteMe = require('../lib/completeMe.js');
const Branch = require('../lib/branch');

const text = "/usr/share/dict/words"
const fs = require('fs')
const dictionary = fs.readFileSync(text).toString().trim().split('\n')
let completion;


describe('CompleteMe', () => {

  beforeEach ( () => {
    completion = new CompleteMe
  })

  it('should be a object', () => {

    assert.isObject(completion);
  });

  it('should instantiate a new branch', () => {
    let branch = new Branch();

  })

  it('should have a root node defaulted to null', () => {
    expect(completion.root).to.equal(null);
  });

  it('should have insert function', () => {
    let branch = new Branch()

    expect(completion.insert).to.be.a('function');
  })

  it.only('should have a suggest function', () => {
    expect(completion.suggest).to.be.a('function');

    completion.insert('string')

    // expect(completion.children.s.children.t.children.r.children.i)
    completion.insert('stringy')
    completion.insert('strap')
    completion.insert('star')
    completion.insert('star')
    completion.insert('steel')
    completion.insert('stop')
    completion.insert('street')
    completion.insert('stratus')

    completion.suggest('st')
  })

  it('should have count function', () => {
    expect(completion.count).to.be.a('function');
  })

  it('should increment the counter when a word is completed', () => {
    let num = 'onethough'
    let num2 = 'twothough'

    // console.log(completion.wordCount)
    completion.insert(num)
    // console.log(completion.wordCount);
    completion.insert(num2)
    // console.log(completion.wordCount);
  })

  it('should have a populate function', (done) => {

    completion.populate(dictionary);

    expect(completion.wordCount).to.equal(235886);
    // console.log(completion.words);
    done()
  }).timeout(40000)

});
