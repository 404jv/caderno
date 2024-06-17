'use strict';
const EventEmitter = require('events').EventEmitter;
const assert = require('assert');
const LDJClient = require('../lib/ldj-client.js');

describe('LDJClient', () => {
  let stream = null;
  let client = null;

  beforeEach(() => {
    stream = new EventEmitter();
    client = new LDJClient(stream);
  });

  it('should emit a message event from a single data event', done => {
    client.on('message', message => {
      assert.deepEqual(message, { foo: 'bar' });
      done();
    });
    stream.emit('data', '{"foo":"bar"}\n');
  })
})
