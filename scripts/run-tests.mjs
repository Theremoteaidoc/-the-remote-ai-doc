#!/usr/bin/env node
/** npm test entry: check-names, check-mechanism, then public intro-asset tripwire. */
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, '..');
const extra = process.argv.slice(2);

function run(script, args = []) {
  const r = spawnSync(process.execPath, [join(here, script), ...args], { stdio: 'inherit' });
  if (r.status) process.exit(r.status ?? 1);
}

function walk(dir, files) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (entry.isFile()) files.push(full);
  }
}

function assertNoPublicIntro() {
  const files = [];
  walk(join(ROOT, 'public'), files);
  const hits = files
    .map((f) => relative(ROOT, f))
    .filter((rel) => /intro/i.test(rel.split(/[/\\]/).pop() || ''));
  if (hits.length) {
    console.error('check-intro: public/ must not contain *intro* files:');
    for (const hit of hits) console.error(`  ${hit}`);
    process.exit(1);
  }
  console.log('check-intro: ok (no public/**/*intro* files).');
}

run('check-names.mjs', extra);
run('check-mechanism.mjs');
run('check-header-video.mjs');
run('check-appointment.mjs');
run('check-mark.mjs');
assertNoPublicIntro();
