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

  it('should have a helper function find', () => {
    assert.isFunction(completion.find);
  })

  it('should have a suggest function', () => {

    expect(completion.suggest).to.be.a('function');
  });

  it('should have select function', () => {
    expect(completion.select).to.be.a('function');
  })

  it('should have a populate function', () => {

    assert.isFunction(completion.populate);
  });

});

describe('insert', () => {

  beforeEach ( () => {
    completion = new CompleteMe;
  })

  it('inserting the same word should not increase the count', () => {
    completion.insert('pizza')
    assert.equal(completion.wordCount, 1);
    completion.insert('pizza')
    assert.equal(completion.wordCount, 1);
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
  
})

describe('suggest', () => {

  beforeEach ( () => {
    completion = new CompleteMe;
  })

  it('should return word and words beyond when the partial string is a word', () => {
    completion.insert('star')
    completion.insert('stars')
    assert.deepEqual(completion.suggest('star'), ['star', 'stars']);
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

  it('should return word as lower case to recuce duplicates', () => {
    completion.insert('Star')
    completion.insert('stars')
    assert.deepEqual(completion.suggest('star'), ['star', 'stars']);
  });

});

describe('select', () => {
  beforeEach ( () => {
    completion = new CompleteMe;
  })

  it('select should increment frequency', () => {
    completion.insert('stop')
    expect(completion.root.child.s.child.t.child.o.child.p.frequency).to.equal(0)

    completion.select('stop')
    completion.select('stop')
    completion.select('stop')

    expect(completion.root.child.s.child.t.child.o.child.p.frequency).to.equal(3)
  })

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
  });

});

describe('populate', () => {
  it('should populate a dictionary', (done) => {

    completion.populate(dictionary);

    expect(completion.wordCount).to.equal(234371);
    done()
  }).timeout(40000)

});
