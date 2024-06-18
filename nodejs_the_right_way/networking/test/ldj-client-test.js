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
    stream.emit('end');
  });

  it('should emit a message event from split data events', done => {
    client.on('message', message => {
      assert.deepEqual(message, { foo: 'bar' });
    });
    stream.emit('data', '{"foo":');
    process.nextTick(() => {
      stream.emit('data', '"bar"}\n');
      stream.emit('end');
    });
    done();
  });

  it('should split the message over two or more data', done => {
    client.on('message', message => {
      assert.deepEqual(message, { foo: 'bar' });
    });
    stream.emit('data', '{"foo":');
    process.nextTick(() => {
      stream.emit('data', '"bar"');
      process.nextTick(() => {
        stream.emit('data', '}\n');
        stream.emit('end');
      });
    });
    done();
  });

  it('should throw error when LDJClient constructor is null', done => {
    assert.throws(() => {
      new LDJClient(null);
    }, new Error('LDJClient should not be null'));
    done();
  });

  it('should throw if the data is not a properly formatted JSON', done => {
    assert.throws(() => {
      stream.emit('data', '{"foo":}\n');
      stream.emit('end');
    }, new Error('data must be a JSON'));
    done();
  });

  it('should throw if the data does not have a new line', done => {
    assert.throws(() => {
      const data = '{"foo":';
      stream.emit('data', data);
      stream.emit('data', '"bar"}');
      stream.emit('end');
    }, new Error('Data does not end with a newline'));
    done();
  });
})
