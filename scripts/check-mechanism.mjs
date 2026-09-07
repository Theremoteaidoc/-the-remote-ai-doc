#!/usr/bin/env node
/**
 * Mechanism gate: public product copy must not name internals a competitor
 * can reuse. Wired from `npm test` after check-names.
 *
 * Scans src/pages and src/components, case-insensitive word-boundary match.
 * D-5: Blog.jsx, BlogPost.jsx, and src/data/blogPosts.js are excluded.
 *
 * A3 keeps HTML ids eval-tracker and data-flow (and #fragment links to them)
 * so those attribute/hash forms are stripped before matching.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

const TERMS = [
  'engine',
  'pipeline',
  'LLM',
  'OCR',
  'deterministic',
  'guardrail',
  'agentic',
  'gemini',
  'openai',
  'chatgpt',
  'gpt',
  'anthropic',
  'claude',
  'eval-tracker',
  'data-flow',
];

const SKIP_FILES = new Set([
  'src/pages/Blog.jsx',
  'src/pages/BlogPost.jsx',
  'src/data/blogPosts.js',
]);

const PATTERNS = TERMS.map((term) => ({
  term,
  re: new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b`, 'gi'),
}));

const ID_OR_HASH = /\bid=["'](?:eval-tracker|data-flow)["']|#(?:eval-tracker|data-flow)\b/gi;

function scrubAllowedAnchors(text) {
  return text.replace(ID_OR_HASH, '');
}

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
      await walk(full, files);
      continue;
    }
    if (entry.isFile() && /\.(jsx?|mjs|cjs|tsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
}

function hitsIn(text) {
  const found = [];
  for (const { term, re } of PATTERNS) {
    re.lastIndex = 0;
    if (re.test(text)) found.push(term);
  }
  return found;
}

async function main() {
  const files = [];
  await walk(join(ROOT, 'src/pages'), files);
  await walk(join(ROOT, 'src/components'), files);

  const hits = [];
  for (const file of files) {
    const rel = relative(ROOT, file);
    if (SKIP_FILES.has(rel)) continue;
    let text;
    try {
      text = await readFile(file, 'utf8');
    } catch {
      continue;
    }
    const names = hitsIn(scrubAllowedAnchors(text));
    if (names.length) {
      hits.push({ file: rel, names: [...new Set(names)] });
    }
  }

  if (hits.length) {
    console.error(`check-mechanism: ${hits.length} file(s) contain banned mechanism words:`);
    for (const hit of hits) {
      console.error(`  ${hit.file}: ${hit.names.join(', ')}`);
    }
    process.exit(1);
  }

  console.log(
    `check-mechanism: ok (${files.length} files in src/pages, src/components; ${TERMS.length} terms).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
