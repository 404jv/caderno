'use strict';
const zmq = require('zeromq');
const filename = process.argv[2];
// Create request endpoint.
const requester = zmq.socket('req');
// Handle replies from the responder.
requester.on('message', data => {
  const response = JSON.parse(data);
  console.log('Received response:', response);
});
requester.connect('tcp://localhost:60401');
// Send a request for content.
console.log(`Sending a request for ${filename}`);
requester.send(JSON.stringify({ path: filename }));