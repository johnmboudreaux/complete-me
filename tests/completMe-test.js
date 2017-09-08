const { assert, expect } = require('chai');
const CompleteMe = require('../lib/completeMe.js');

const text = "/usr/share/dict/words"
const fs = require('fs')
const dictionary = fs.readFileSync(text).toString().trim().split('\n')
let completion;


describe('CompleteMe', () => {

  beforeEach ( () => {
    completion = new CompleteMe;
  })

  it('should be a object', () => {

    assert.isObject(completion);
  });

  it('should instantiate a new branch', () => {

  })

  it('should have a root node defaulted to null', () => {
    expect(completion.root).to.equal(null);
  });

  it('should have insert function', () => {

    expect(completion.insert).to.be.a('function');
  });

  it('insert should assign a root node/branch', () => {
    expect(completion.root).to.equal(null);
    completion.insert('word');
    expect(completion.root).not.to.equal(null);
  })

  it('insert should increment the counter when a word is completed', () => {
    let num = 'onethough';
    let num2 = 'twothough';

    completion.insert(num);
    completion.insert(num2);

    expect(completion.wordCount).to.equal(2);
  });

  it('should have a suggest function', () => {

    expect(completion.suggest).to.be.a('function');
  });

  it('suggest should return an array of words starting with st', () => {
    completion.insert('string')
    completion.insert('stringy')
    completion.insert('strap')
    completion.insert('star')
    completion.insert('star')
    completion.insert('steel')
    completion.insert('stop')
    completion.insert('street')
    completion.insert('stratus')

    let testArray = [ 'string', 'stringy', 'strap', 'stratus', 'street', 'star', 'steel', 'stop' ]

    assert.deepEqual(completion.suggest('st'), testArray)
  })

  it('should have select function', () => {
    expect(completion.select).to.be.a('function');
  })

  it('select should increment frequency', () => {
    completion.insert('stop')
    expect(completion.root.child.s.child.t.child.o.child.p.frequency).to.equal(0)

    completion.select('stop')
    completion.select('stop')
    completion.select('stop')

    expect(completion.root.child.s.child.t.child.o.child.p.frequency).to.equal(3)
  })

  it('should have a populate function', (done) => {

    completion.populate(dictionary);

    expect(completion.wordCount).to.equal(235886);
    done()
  }).timeout(40000)

  it("select should dictate the order of an array an array of 2", () => {
    completion.populate(['start', 'stop'])
    assert.deepEqual(completion.suggest('st'), ['start', 'stop'])
    completion.select('stop')

    assert.deepEqual(completion.suggest('st'), ['stop', 'start'])
  })

  it("select should dictate the order of an array", () => {
    completion.populate(['stoop', 'stopping', 'stopped', 'stop'])
    completion.select("stop")
    completion.select("stop")
    completion.select("stop")
    completion.select("stopped")
    completion.select("stopped")
    completion.select("stopping")
    assert.deepEqual(completion.suggest('st'), ['stop', 'stopped', 'stopping', 'stoop'] ||  [])
  })

});
