// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
const common = require('../common');
const assert = require('assert');
const EventEmitter = require('events');

// Test emit called by other context
const EE = new EventEmitter();

// Works as expected if the context has no `constructor.name`
{
  const ctx = { __proto__: null };
  assert.throws(
    () => EE.emit.call(ctx, 'error', new Error('foo')),
    common.expectsError({ name: 'Error', message: 'foo' })
  );
}

assert.strictEqual(EE.emit.call({}, 'foo'), false);
