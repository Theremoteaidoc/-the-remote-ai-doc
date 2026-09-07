#!/usr/bin/env node
/**
 * A6: reduced-motion and save-data each keep the header poster only
 * (video element absent). Default path attaches the clip.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  headerMediaTag,
  shouldAttachHeaderClip,
} from '../src/components/headerVideoPolicy.js';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '../src/components/HeaderVideo.jsx'), 'utf8');
const posterBranch = src.split("if (mode !== 'video')")[1]?.split('return (')[1]?.split('return (')[0] ?? '';

assert.equal(headerMediaTag({ reducedMotion: true, saveData: false }), 'img');
assert.equal(shouldAttachHeaderClip({ reducedMotion: true, saveData: false }), false);

assert.equal(headerMediaTag({ reducedMotion: false, saveData: true }), 'img');
assert.equal(shouldAttachHeaderClip({ reducedMotion: false, saveData: true }), false);

assert.equal(headerMediaTag({ reducedMotion: true, saveData: true }), 'img');
assert.equal(headerMediaTag({ reducedMotion: false, saveData: false }), 'video');
assert.equal(shouldAttachHeaderClip({ reducedMotion: false, saveData: false }), true);

assert.match(src, /shouldAttachHeaderClip/);
assert.match(src, /prefers-reduced-motion:\s*reduce/);
assert.match(src, /navigator\.connection\?\.saveData/);
assert.match(posterBranch, /<img/);
assert.equal(/<video/.test(posterBranch), false, 'reduced-motion/save-data branch must not render <video>');

console.log('check-header-video: ok (reduced-motion poster, save-data poster, default video).');
