const CompleteMe = require('./completeMe');
// const branch = require('./Branch');
// const words = require('./words');
const CompleteMeObj = new CompleteMe();
// const text = "/usr/share/dict/words"
// const fs = require('fs')
// const dictionary = fs.readFileSync(text).toString().trim().split('/n')

// CompleteMeObj.populate(['apply', 'apple', 'bananas', 'cat', 'frog']);
CompleteMeObj.insert('anyword');
CompleteMeObj.insert('anywhere');
CompleteMeObj.insert('bword');
