'use-strict'
const fs = require('fs');

fs.writeFile('target.txt', 'Hello, World!', (err) => {
  if (err) {
    throw err;
  }
  console.log('File saved!')
});
