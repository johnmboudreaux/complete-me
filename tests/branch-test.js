const { assert, expect } = require('chai');
const Branch = require('../lib/branch');
let branch;

describe('Branch', () => {

  beforeEach( () => {
    branch = new Branch('j');
  })


  it('should have a letter by default', () => {

    expect(branch.letter).to.equal('j');
  })

  it('should not have a complete word by default', () => {

    assert.isFalse(branch.isWord, false)
  })


})
