import capitalize from '../src/capitalize.js';
import assert from 'node:assert/strict';

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');