const CompleteMe = require('./completeMe');
const branch = require('./Branch');
const completion = new CompleteMe();

console.log('Adding words into the dictionary');
completion.insert('string');
completion.insert('stringy');
completion.insert('strap');
completion.insert('star');

console.log("Show suggestions");
completion.suggest('st');

console.log('Add a repeat word');
completion.insert('star');

console.log("Show suggestions");
completion.suggest('st');

console.log('Add a few more words');
completion.insert('steel')
completion.insert('stop')
completion.insert('street')
completion.insert('stratus')

console.log("Show suggestions");
completion.suggest('st')

console.log('Select a word (moves to top of array)');
completion.select('street');

console.log("Show suggestions");
completion.suggest('st');

console.log('Select a few word (orders correctly)');
completion.select('street');
completion.select('street');
completion.select('stratus');
completion.select('stop');

console.log("Show suggestions");
completion.suggest('st');
