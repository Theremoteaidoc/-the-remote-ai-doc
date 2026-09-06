#!/usr/bin/env node
/** npm test entry: check-names (honours --dist) then check-mechanism. */
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const extra = process.argv.slice(2);

function run(script, args = []) {
  const r = spawnSync(process.execPath, [join(here, script), ...args], { stdio: 'inherit' });
  if (r.status) process.exit(r.status ?? 1);
}

run('check-names.mjs', extra);
run('check-mechanism.mjs');
