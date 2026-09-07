#!/usr/bin/env node
/**
 * A13 R-MARK: nav wordmark is the brand mark at /rebuild/brand/
 * plus "SeaScope" (ink) "CDS" (teal). Footer is the lockup image
 * at ~110 px. Favicon and apple-touch come from the 256 px file.
 * The images/ copy of the mark must not ship.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BRAND = '/rebuild/brand/seascope-mark.png';
const LOCKUP = '/rebuild/brand/seascope-logo-lockup.png';
const OLD = '/rebuild/images/seascope-mark.png';
const ALT = 'SeaScope CDS, AI Clinical Decision Support';
let failed = false;

function fail(msg) {
  console.error(`check-mark: ${msg}`);
  failed = true;
}

const wordmark = readFileSync(join(ROOT, 'src/components/Wordmark.jsx'), 'utf8');
if (!wordmark.includes(BRAND)) fail(`Wordmark.jsx must load ${BRAND}`);
if (wordmark.includes(OLD)) fail('Wordmark.jsx still points at the retired images/ path');
if (!/markClassName = 'h-8'/.test(wordmark)) fail('Wordmark default mark height must be h-8 (~32 px)');
if (!/<span className="text-ink">SeaScope<\/span>/.test(wordmark)) fail('Wordmark "SeaScope" must be ink');
if (!/<span className="text-teal-strong">CDS<\/span>/.test(wordmark)) fail('Wordmark "CDS" must be teal');
if (/<span className="text-ink">Sea<\/span>/.test(wordmark)) fail('A12 Sea/Scope split must not remain');
if (/<span className="text-teal-strong">Scope<\/span>/.test(wordmark)) fail('A12 Sea/Scope split must not remain');

const layout = readFileSync(join(ROOT, 'src/components/SiteLayout.jsx'), 'utf8');
if (!layout.includes(LOCKUP)) fail(`SiteLayout footer must load ${LOCKUP}`);
if (!layout.includes(ALT)) fail(`SiteLayout lockup alt must be "${ALT}"`);
if (!/h-\[110px\]/.test(layout) && !/height="110"/.test(layout)) {
  fail('SiteLayout lockup must be ~110 px tall');
}
if ((layout.match(/<Wordmark/g) || []).length !== 1) {
  fail('SiteLayout must use Wordmark only in the nav, not the footer');
}

if (existsSync(join(ROOT, 'public/rebuild/images/seascope-mark.png'))) {
  fail('public/rebuild/images/seascope-mark.png must not ship');
}
for (const rel of [
  'public/rebuild/brand/seascope-mark.png',
  'public/rebuild/brand/seascope-mark-256.png',
  'public/rebuild/brand/seascope-logo-lockup.png',
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
console.log('check-mark: ok (brand mark nav, lockup footer, no images/ copy, favicon + apple-touch).');
