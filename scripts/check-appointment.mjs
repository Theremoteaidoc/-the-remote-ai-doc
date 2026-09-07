#!/usr/bin/env node
/**
 * R-CTA: Stage 1 chrome (Home + SiteLayout) must request an appointment
 * on the founder calendar, not "Book a demo" or the demo calendar slug.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPOINTMENT = 'https://calendar.app.google/QfxzbNEejLnwudC49';
const DEMO_SLUG = 'qKsdjfwcYu5hUq298';
const FILES = ['src/pages/Home.jsx', 'src/components/SiteLayout.jsx', 'src/components/appointment.js'];

let failed = false;
for (const rel of FILES) {
  const text = readFileSync(join(ROOT, rel), 'utf8');
  if (!text.includes(APPOINTMENT) && rel !== 'src/components/appointment.js') {
    // Home/SiteLayout import the constant; appointment.js owns the URL.
  }
  if (rel === 'src/components/appointment.js' && !text.includes(APPOINTMENT)) {
    console.error(`check-appointment: ${rel} must export ${APPOINTMENT}`);
    failed = true;
  }
  if (rel !== 'src/components/appointment.js') {
    if (!/APPOINTMENT_URL/.test(text) || !/Request an appointment/.test(text)) {
      console.error(`check-appointment: ${rel} must use APPOINTMENT_URL and "Request an appointment"`);
      failed = true;
    }
    if (/Book a demo/i.test(text)) {
      console.error(`check-appointment: ${rel} still contains "Book a demo"`);
      failed = true;
    }
  }
  if (text.includes(DEMO_SLUG)) {
    console.error(`check-appointment: ${rel} contains the demo calendar slug`);
    failed = true;
  }
}

const modal = readFileSync(join(ROOT, 'src/components/BookDemoModal.jsx'), 'utf8');
if (!modal.includes('APPOINTMENT_URL')) {
  console.error('check-appointment: BookDemoModal must end on APPOINTMENT_URL');
  failed = true;
}
if (modal.includes(DEMO_SLUG)) {
  console.error('check-appointment: BookDemoModal contains the demo calendar slug');
  failed = true;
}

if (failed) process.exit(1);
console.log('check-appointment: ok (QfxzbNEejLnwudC49, no demo slug, no Book a demo on Home/nav).');
