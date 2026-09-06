#!/usr/bin/env node
/**
 * Name gate: client and lead names must not appear in src/, public/, or dist/.
 * Wired as `npm test`. Scans text files only (images/video/archives skipped:
 * those are listed and eyeballed in the PR body).
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

const NAMES = [
  'Royal Caribbean',
  'OneCare',
  'MHG',
  'Maritime Healthcare',
  'Carnival',
  'NCLH',
  'Hanseatic',
  'Compass',
  'Virgin Voyages',
  'Fred Olsen',
];

const SKIP_DIRS = new Set(['node_modules', '.git', '.vercel']);
const BINARY_EXT = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.avif',
  '.mp4', '.webm', '.mov', '.mp3', '.wav',
  '.gz', '.tar', '.zip', '.woff', '.woff2', '.ttf', '.eot', '.otf',
  '.pdf', '.bin',
]);
const TEXT_EXT = new Set([
  '.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx',
  '.json', '.html', '.css', '.svg', '.xml', '.txt', '.md', '.map',
  '.webmanifest', '.csv',
]);

const PATTERNS = NAMES.map((name) => ({
  name,
  re: new RegExp(`\\b${name.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b`, 'gi'),
}));

async function walk(dir, files) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(full, files);
      continue;
    }
    if (!entry.isFile()) continue;
    const ext = extname(entry.name).toLowerCase();
    if (BINARY_EXT.has(ext)) continue;
    if (ext && !TEXT_EXT.has(ext)) continue;
    files.push(full);
  }
}

function hitsIn(text) {
  const found = [];
  for (const { name, re } of PATTERNS) {
    re.lastIndex = 0;
    if (re.test(text)) found.push(name);
  }
  return found;
}

async function main() {
  const requireDist = process.argv.includes('--dist') || process.argv.includes('--require-dist');
  const roots = ['src', 'public'];
  const distPath = join(ROOT, 'dist');
  let distExists = false;
  try {
    distExists = (await stat(distPath)).isDirectory();
  } catch {
    distExists = false;
  }
  if (distExists) roots.push('dist');
  if (requireDist && !distExists) {
    console.error('check-names: --dist set but dist/ is missing. Run npm run build first.');
    process.exit(2);
  }

  const files = [];
  for (const root of roots) {
    await walk(join(ROOT, root), files);
  }

  const hits = [];
  for (const file of files) {
    let text;
    try {
      text = await readFile(file, 'utf8');
    } catch {
      continue;
    }
    const names = hitsIn(text);
    if (names.length) {
      hits.push({ file: relative(ROOT, file), names: [...new Set(names)] });
    }
  }

  if (hits.length) {
    console.error(`check-names: ${hits.length} file(s) contain banned client/lead names:`);
    for (const hit of hits) {
      console.error(`  ${hit.file}: ${hit.names.join(', ')}`);
    }
    process.exit(1);
  }

  const PILOT_RE = /pilot/i;
  const BLOG_HISTORY = new Set(['src/data/blogPosts.js']);
  const pilotHits = [];
  for (const file of files) {
    const rel = relative(ROOT, file);
    if (!rel.startsWith('src/')) continue;
    if (BLOG_HISTORY.has(rel)) continue;
    let text;
    try {
      text = await readFile(file, 'utf8');
    } catch {
      continue;
    }
    if (PILOT_RE.test(text)) pilotHits.push(rel);
  }
  if (pilotHits.length) {
    console.error('check-names: "pilot" must not appear in src/ outside blog history:');
    for (const file of pilotHits) console.error(`  ${file}`);
    process.exit(1);
  }

  console.log(
    `check-names: ok (${files.length} text files in ${roots.join(', ')}; ${NAMES.length} names).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
