const { logMock } = require('../index')
const { helloWorld } = require('../../001_syntax/001_base');

const origin = console.log
afterEach(() => (console.log = origin))

describe('helloWorld', () => {
  let outputs = []
  beforeEach(() => (console.log = logMock(outputs)))
  test('call console.log', () => {
    helloWorld();

    expect(outputs[0]).toEqual('Hello World')
  });
});
