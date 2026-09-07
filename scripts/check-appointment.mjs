#!/usr/bin/env node
/**
 * A9: Stage 1 chrome (Home + SiteLayout) must request an appointment
 * on the founder calendar. Direct <a>, no BookDemoModal, no "Book a demo",
 * no "See pricing". A10: Home carries no prices.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPOINTMENT = 'https://calendar.app.google/QfxzbNEejLnwudC49';
const DEMO_SLUG = 'qKsdjfwcYu5hUq298';
const STAGE1 = ['src/pages/Home.jsx', 'src/components/SiteLayout.jsx'];

let failed = false;

const appointmentJs = readFileSync(join(ROOT, 'src/components/appointment.js'), 'utf8');
if (!appointmentJs.includes(APPOINTMENT)) {
  console.error(`check-appointment: appointment.js must export ${APPOINTMENT}`);
  failed = true;
}
if (appointmentJs.includes(DEMO_SLUG)) {
  console.error('check-appointment: appointment.js contains the demo calendar slug');
  failed = true;
}

for (const rel of STAGE1) {
  const text = readFileSync(join(ROOT, rel), 'utf8');
  if (!/APPOINTMENT_URL/.test(text) || !/Request an appointment/.test(text)) {
    console.error(`check-appointment: ${rel} must use APPOINTMENT_URL and "Request an appointment"`);
    failed = true;
  }
  if (!/target="_blank"/.test(text) || !/rel="noopener"/.test(text)) {
    console.error(`check-appointment: ${rel} appointment links need target="_blank" rel="noopener"`);
    failed = true;
  }
  if (/BookDemoModal/.test(text)) {
    console.error(`check-appointment: ${rel} must not import BookDemoModal`);
    failed = true;
  }
  if (/Book a demo/i.test(text)) {
    console.error(`check-appointment: ${rel} still contains "Book a demo"`);
    failed = true;
  }
  if (/See pricing/i.test(text)) {
    console.error(`check-appointment: ${rel} still contains "See pricing"`);
    failed = true;
  }
  if (text.includes(DEMO_SLUG)) {
    console.error(`check-appointment: ${rel} contains the demo calendar slug`);
    failed = true;
  }
}

const home = readFileSync(join(ROOT, 'src/pages/Home.jsx'), 'utf8');
if (/\$\s*\d/.test(home) || /\$\d/.test(home)) {
  console.error('check-appointment: Home must not carry prices');
  failed = true;
}

const modal = readFileSync(join(ROOT, 'src/components/BookDemoModal.jsx'), 'utf8');
if (modal.includes(DEMO_SLUG)) {
  console.error('check-appointment: BookDemoModal contains the demo calendar slug');
  failed = true;
}

if (failed) process.exit(1);
console.log('check-appointment: ok (QfxzbNEejLnwudC49, no modal, no Book a demo, no See pricing, Home has no prices).');
