// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const assert = require('assert');
const fs = require('fs');

const tmpdir = require('../common/tmpdir');
tmpdir.refresh();

{
  const s = fs.createWriteStream(tmpdir.resolve('rw'));

  s.close(common.mustCall());
  s.close(common.mustCall());
}

{
  const s = fs.createWriteStream(tmpdir.resolve('rw2'));

  let emits = 0;
  s.on('close', () => {
    emits++;
  });

  s.close(common.mustCall(() => {
    assert.strictEqual(emits, 1);
    s.close(common.mustCall(() => {
      assert.strictEqual(emits, 1);
    }));
    process.nextTick(() => {
      s.close(common.mustCall(() => {
        assert.strictEqual(emits, 1);
      }));
    });
  }));
}

{
  const s = fs.createWriteStream(tmpdir.resolve('rw'), {
    autoClose: false
  });

  s.close(common.mustCall());
  s.close(common.mustCall());
}
