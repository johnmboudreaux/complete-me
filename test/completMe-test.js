const { assert, expect } = require ('chai');
const CompleteMe = require ('../lib/completeMe.js');
// const text = "/usr/share/dict/words"
// const fs = require('fs')
// const dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('CompleteMe', () => {

  it('should be a function', () => {
    let completeMe = new CompleteMe();

    assert.isFunction(completeMe);

  });

});
