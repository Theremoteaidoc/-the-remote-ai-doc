/**
 * Testimonials — practicing-physician social proof, rendered on the
 * SeaScope CDS product page between founder credibility and the final CTA.
 *
 * Brand-compliant with the repo's existing design system:
 *   - ink-900 / ink-800 / ink-700 slate palette
 *   - sea-300 teal accent for eyebrow + quote marks
 *   - font-display (DM Sans) for the pull quote
 *   - eyebrow utility for the tracked small-caps label
 *
 * Pull quotes are curated highlights; full context sits below each.
 * Named attribution (specific over generic — brand voice rule).
 */

import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    pull:
      'A tool I would genuinely trust in remote and maritime settings.',
    full:
      'SeaScope CDS has really impressed me with the accuracy and clinical relevance of its recommendations, even in complex cases. The built-in safety checks and guardrails feel robust and practical.',
    author: 'Dr. Cameron',
    affiliation: 'Maritime Physician',
  },
  {
    pull:
      'A reliable adjunct to clinical judgment — structured, evidence-based, safety-first.',
    full:
      'SeaScope CDS provides valuable clinical support by assisting in diagnostic assessment and treatment guidance, particularly in remote or resource-limited settings. I recommend the use of this AI diagnostic and clinical decision-support tool.',
    author: 'Dr. Jaramillo',
    affiliation: 'Maritime Physician',
  },
  {
    pull:
      'A clear panorama of the patient condition — with the reasoning behind every recommendation.',
    full:
      'SeaScope is a helpful AI tool in critical scenarios. It allows the physician to analyse the situation and take the best decision for the patient — interventions come with explanations of the reasoning behind every recommendation.',
    author: 'Dra. Arrieta',
    affiliation: 'Maritime Physician',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-ink-700/40 bg-ink-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-4">From physicians at sea</div>
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
            Trusted by practicing{' '}
            <span className="accent-sea">physicians.</span>
          </h2>
          <p className="mt-6 text-base text-ink-50/70">
            Practicing maritime physicians evaluating SeaScope CDS in
            live clinical settings.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="flex h-full flex-col rounded-2xl border border-ink-700/60 bg-ink-800/40 p-8 transition hover:border-sea-500/40"
            >
              <Quote
                className="mb-5 h-8 w-8 text-sea-300/50"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <blockquote className="font-display text-xl font-normal leading-snug text-ink-50">
                &ldquo;{t.pull}&rdquo;
              </blockquote>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-50/60">
                {t.full}
              </p>
              <figcaption className="mt-8 border-t border-ink-700/50 pt-5">
                <div className="text-sm font-medium text-ink-50">
                  {t.author}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-50/50">
                  {t.affiliation}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-ink-50/40">
          Practicing maritime physicians evaluating SeaScope CDS in live
          clinical settings. Published with each individual physician&rsquo;s
          consent. Institutional affiliations are listed for identification
          only; no employer or professional organization has endorsed
          SeaScope. Individual experiences may vary.
        </p>
      </div>
    </section>
  );
}
