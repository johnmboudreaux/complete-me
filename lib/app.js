const CompleteMe = require('./completeMe');
const branch = require('./Branch');
const CompleteMeObj = new CompleteMe();

CompleteMeObj.insert('string')
// completion.insert('stringy')
// completion.insert('strap')
// completion.insert('star')
// completion.insert('star')
// completion.insert('steel')
// completion.insert('stop')
// completion.insert('street')
// completion.insert('stratus')
CompleteMeObj.suggest('st')
