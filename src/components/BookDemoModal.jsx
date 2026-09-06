import { useEffect, useRef, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

/**
 * Book-a-Demo lead capture modal.
 *
 * Controlled via `open` / `onClose`. On submit:
 *   1. POST /api/v1/leads/demo-request → backend emails sales
 *   2. Redirect the browser to the returned Google Calendar URL so the
 *      prospect can pick a slot
 *
 * The form is deliberately short: name / email / phone / company are
 * required; everything else optional. Long forms kill conversion.
 */

const API_BASE = 'https://app.seascope.tech';

export default function BookDemoModal({ open, onClose, source = 'book-demo' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleet_size: '',
    vessel_type: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const firstFieldRef = useRef(null);

  // Autofocus first input when modal opens; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const resp = await fetch(`${API_BASE}/api/v1/leads/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      });
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        if (resp.status === 429) {
          throw new Error('Too many requests. Please try again in a minute.');
        }
        throw new Error(data?.detail?.[0]?.msg || 'Could not submit. Please try again.');
      }
      const { calendar_url } = await resp.json();
      // Redirect to the booking page in the same tab. Google Calendar
      // sends the prospect a confirmation email automatically.
      window.location.href = calendar_url;
    } catch (err) {
      setError(err.message || 'Something went wrong. Please email hello@seascope.tech.');
      setSubmitting(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-900/80 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-ink-700/60 bg-ink-900 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1.5 text-ink-50/60 transition hover:bg-ink-800 hover:text-ink-50"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="eyebrow mb-3">BOOK A DEMO</div>
        <h2 id="book-demo-title" className="font-display text-3xl font-normal leading-tight text-ink-50">
          Let's find a time that works.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-50/70">
          Tell us a bit about your operation and we'll route you to the calendar.
          Thirty minutes. Consultative, no slides.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Your name"
              required
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
              inputRef={firstFieldRef}
            />
            <Field
              label="Company"
              required
              value={form.company}
              onChange={update('company')}
              autoComplete="organization"
            />
            <Field
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
            />
            <Field
              label="Phone"
              type="tel"
              required
              value={form.phone}
              onChange={update('phone')}
              autoComplete="tel"
            />
            <Field
              label="Fleet size"
              placeholder="e.g. 25 vessels"
              value={form.fleet_size}
              onChange={update('fleet_size')}
            />
            <Field
              label="Vessel type"
              placeholder="e.g. Cargo, cruise, offshore"
              value={form.vessel_type}
              onChange={update('vessel_type')}
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-eyebrow text-ink-50/60">
              Anything we should know before the call?
            </label>
            <textarea
              value={form.notes}
              onChange={update('notes')}
              rows={3}
              className="mt-1.5 w-full rounded-lg border border-ink-700 bg-ink-800/50 px-3 py-2 text-sm text-ink-50 placeholder-ink-50/40 focus:border-sea-500 focus:outline-none focus:ring-1 focus:ring-sea-500"
              placeholder="Optional: operational context, timeline, specific challenges…"
              maxLength={2000}
            />
          </div>

          {error && (
            <p className="rounded-md border border-red-600/40 bg-red-600/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Continue to calendar'}
            {!submitting && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="text-center text-xs text-ink-50/50">
            We'll redirect you to the booking calendar after you submit.
            No spam. We only use this to prep the call.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, type = 'text', value, onChange, placeholder, autoComplete, inputRef }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-eyebrow text-ink-50/60">
        {label}{required && <span className="text-sea-300"> *</span>}
      </label>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-lg border border-ink-700 bg-ink-800/50 px-3 py-2 text-sm text-ink-50 placeholder-ink-50/40 focus:border-sea-500 focus:outline-none focus:ring-1 focus:ring-sea-500"
      />
    </div>
  );
}
