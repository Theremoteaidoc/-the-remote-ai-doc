#!/usr/bin/env node
/**
 * A12 R-MARK: wordmark uses the compass-cross at /rebuild/brand/,
 * not the Asclepius S. Nav/footer ~32 px. Favicon and apple-touch
 * are generated from the 256 px file.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BRAND = '/rebuild/brand/seascope-mark.png';
const OLD = '/rebuild/images/seascope-mark.png';
let failed = false;

function fail(msg) {
  console.error(`check-mark: ${msg}`);
  failed = true;
}

const wordmark = readFileSync(join(ROOT, 'src/components/Wordmark.jsx'), 'utf8');
if (!wordmark.includes(BRAND)) fail(`Wordmark.jsx must load ${BRAND}`);
if (wordmark.includes(OLD)) fail('Wordmark.jsx still points at the Asclepius S path');
if (!/markClassName = 'h-8'/.test(wordmark)) fail('Wordmark default mark height must be h-8 (~32 px)');
if (!/<span className="text-ink">Sea<\/span>/.test(wordmark)) fail('Wordmark "Sea" must be ink');
if (!/<span className="text-teal-strong">Scope<\/span>/.test(wordmark)) fail('Wordmark "Scope" must be teal');

const layout = readFileSync(join(ROOT, 'src/components/SiteLayout.jsx'), 'utf8');
if (/markClassName="h-6"/.test(layout)) fail('SiteLayout footer mark must be ~32 px, not h-6');

if (existsSync(join(ROOT, 'public/rebuild/images/seascope-mark.png'))) {
  fail('public/rebuild/images/seascope-mark.png must not ship');
}
for (const rel of [
  'public/rebuild/brand/seascope-mark.png',
  'public/rebuild/brand/seascope-mark-256.png',
  'public/favicon.png',
  'public/apple-touch-icon.png',
]) {
  if (!existsSync(join(ROOT, rel))) fail(`missing ${rel}`);
}

const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
if (!html.includes('href="/favicon.png"')) fail('index.html must reference /favicon.png');
if (!html.includes('rel="apple-touch-icon"') || !html.includes('href="/apple-touch-icon.png"')) {
  fail('index.html must reference /apple-touch-icon.png');
}
if (!html.includes('"logo": "https://seascope.tech/favicon.png"')) {
  fail('JSON-LD logo must stay on /favicon.png');
}

if (failed) process.exit(1);
console.log('check-mark: ok (compass-cross brand path, no Asclepius S, h-8, favicon + apple-touch).');
