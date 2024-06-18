'use strict';
const EventEmitter = require('events').EventEmitter;

class LDJClient extends EventEmitter {
  constructor(stream) {
    if (!stream) {
      throw new Error('LDJClient should not be null');
    }
    super();
    let buffer = '';
    let fullMessage = '';
    stream.on('data', data => {
      buffer += data;
      fullMessage += data;
      let boundary = buffer.indexOf('\n');
      while (boundary !== -1) {
        const input = buffer.substring(0, boundary);
        buffer = buffer.substring(boundary + 1);
        const inputJson = this.#convertToJsonOrThrow(input)
        this.emit('message', inputJson);
        boundary = buffer.indexOf('\n');
      }
    });

    stream.on('end', () => {
      if (!fullMessage.endsWith('\n')) {
        throw new Error('Data does not end with a newline');
      }
    });
  }
  static connect(stream) {
    return new LDJClient(stream);
  }

  #convertToJsonOrThrow(data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      throw new Error('data must be a JSON')
    }
  }
}

module.exports = LDJClient;
