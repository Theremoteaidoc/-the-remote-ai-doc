import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Linkedin, Twitter } from 'lucide-react';
import { getBlogPost } from '../data/blogPosts';

// Simple markdown-like parser for article format
const parseMarkdown = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-100">$1</em>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-3"><span class="text-emerald-400 mt-1">→</span><span>$1</span></li>')
    .replace(/\n\n/g, '</p><p class="text-lg text-slate-200 leading-relaxed">');
};

// Article format renderer
const ArticleRenderer = ({ post }) => {
  const { content } = post;
  
  return (
    <article className="relative py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="prose-custom space-y-8">
          {/* Intro */}
          <div className="text-lg text-slate-200 leading-relaxed space-y-6">
            {content.intro.split('\n\n').map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(para) }} />
            ))}
          </div>

          {/* Sections */}
          {content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">{section.title}</h2>
              <div className="text-lg text-slate-200 leading-relaxed">
                {section.body.includes('\n-') || section.body.includes('**') ? (
                  <div dangerouslySetInnerHTML={{
                    __html: parseMarkdown(section.body).split('\n').map(line => {
                      if (line.startsWith('<li')) return line;
                      if (line.trim()) return `<p class="text-lg text-slate-200 leading-relaxed mb-4">${line}</p>`;
                      return '';
                    }).join('')
                  }} />
                ) : (
                  section.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-lg text-slate-200 leading-relaxed mb-4" dangerouslySetInnerHTML={{
                      __html: parseMarkdown(para)
                    }} />
                  ))
                )}
              </div>
            </div>
          ))}

          {/* Bottom Line */}
          {content.bottomLine && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-10">
              <div className="text-emerald-400 font-bold mb-3">The Bottom Line</div>
              <p className="text-white text-lg leading-relaxed">
                {content.bottomLine}
              </p>
            </div>
          )}

          {/* My Take */}
          {content.myTake && (
            <div>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">My Take from 1,000 Miles Out</h2>
              <div className="text-lg text-slate-200 leading-relaxed space-y-6">
                {content.myTake.split('\n\n').map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(para) }} />
                ))}
              </div>
            </div>
          )}

          {/* What to Watch Next */}
          {content.watchNext && (
            <div>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">What to Watch Next</h2>
              <ul className="space-y-3 ml-1">
                {content.watchNext.map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg text-slate-200">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links */}
          {content.quickLinks && (
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mt-12">
              <div className="text-white font-bold text-lg mb-4">Quick Links</div>
              <ul className="space-y-3">
                {content.quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg">
                      {link.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Author Box */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-2xl">JR</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">Dr. Javier Rosas</div>
              <div className="text-emerald-400 text-sm font-medium mb-3">Ship Physician & Clinical AI Specialist</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                I practice medicine 1,000 miles from shore and train AI systems that will help the next generation of doctors do the same. I work with leading AI companies on medical LLM evaluation, RLHF, and clinical AI safety.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/javier-rosas-remote-ai-doc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/RemoteAiDoc" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">Get More Clinical AI Insights</h3>
          <p className="text-emerald-100/80 mb-6">Subscribe to "Clinical AI from the Edge" — weekly on LinkedIn.</p>
          <a
            href="https://www.linkedin.com/newsletters/the-remote-ai-doc-weekly-clinical-ai-briefing-7296304837241720832/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Subscribe on LinkedIn
          </a>
        </div>

        {/* Share */}
        <div className="mt-12 text-center">
          <div className="text-slate-400 text-sm mb-4">Share this article</div>
          <div className="flex justify-center gap-4">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://theremoteaidoc.com/blog/' + post.slug)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-emerald-400 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://theremoteaidoc.com/blog/' + post.slug)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-emerald-400 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

// Original format renderer
const OriginalRenderer = ({ post }) => {
  const { content } = post;

  return (
    <article className="relative py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Stats */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-emerald-400 text-4xl font-bold">{post.stats.platforms}</div>
              <div className="text-slate-400 text-sm mt-1">Platforms Tested</div>
            </div>
            <div>
              <div className="text-emerald-400 text-4xl font-bold">{post.stats.rubricItems}</div>
              <div className="text-slate-400 text-sm mt-1">Rubric Items</div>
            </div>
            <div>
              <div className="text-emerald-400 text-4xl font-bold">{post.stats.performanceGap}</div>
              <div className="text-slate-400 text-sm mt-1">Performance Gap</div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-8">
          {/* Intro */}
          <div className="text-lg text-slate-200 leading-relaxed space-y-6">
            {content.intro.split('\n\n').map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: para
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="text-slate-100">$1</em>')
              }} />
            ))}
          </div>

          {/* Results Box */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 my-10">
            <div className="text-center mb-6">
              <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Final Scores</div>
              <div className="text-white text-xl font-bold">20-Item FDA Prescribing Information Rubric</div>
            </div>

            <div className="space-y-3">
              {post.results.map((result, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    result.type === 'CLINICAL AI'
                      ? i === 0
                        ? 'bg-emerald-500/10 border border-emerald-500/30'
                        : 'bg-emerald-500/5 border border-emerald-500/20'
                      : result.score < 25
                        ? 'bg-red-500/10 border border-red-500/20'
                        : 'bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${result.rank <= 2 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {result.rank === 1 ? '🥇' : result.rank === 2 ? '🥈' : result.rank === 3 ? '🥉' : `${result.rank}.`}
                    </span>
                    <span className="text-white font-semibold">{result.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      result.type === 'CLINICAL AI'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {result.type}
                    </span>
                  </div>
                  <span className={`font-bold text-xl ${
                    result.type === 'CLINICAL AI'
                      ? 'text-emerald-400'
                      : result.score < 25
                        ? 'text-red-400'
                        : 'text-slate-300'
                  }`}>
                    {result.score}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-emerald-400 font-bold text-2xl">70.5</div>
                <div className="text-slate-400 text-sm">Clinical AI Average</div>
              </div>
              <div>
                <div className="text-slate-300 font-bold text-2xl">29.8</div>
                <div className="text-slate-400 text-sm">General LLM Average</div>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why This Matters</h2>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              {content.whyMatters.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para.replace(/\*(.*?)\*/g, '<em class="text-slate-100">$1</em>')
                }} />
              ))}
            </div>
          </div>

          {/* Clinical Scenario */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Clinical Scenario</h2>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 my-8">
              <div className="flex items-center gap-2 text-white font-bold mb-4">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                The Case
              </div>
              <div className="space-y-3 text-slate-200 text-sm">
                <p><strong className="text-white">Patient:</strong> {content.clinicalScenario.patient}</p>
                <p><strong className="text-white">Presentation:</strong> {content.clinicalScenario.presentation}</p>
                <p><strong className="text-white">Workup:</strong> {content.clinicalScenario.workup}</p>
                <p><strong className="text-white">Exam findings:</strong> {content.clinicalScenario.exam}</p>
                <p><strong className="text-white">The question:</strong> {content.clinicalScenario.question}</p>
              </div>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed">{content.scenarioContext}</p>
          </div>

          {/* Methodology */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Methodology</h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">{content.methodology}</p>
            <p className="text-lg text-slate-200 mb-4">The rubric covered:</p>
            <ul className="space-y-2">
              {content.rubricCovered.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong className="text-white">{item.title}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical AI Strengths */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What the Clinical AI Tools Got Right</h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-4">
              <strong className="text-white">EvidenceMD</strong> led the field with 80/100, capturing 16 of 20 rubric items. Its key strengths:
            </p>
            <ul className="space-y-2 mb-6">
              {content.clinicalAIStrengths.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate-200 leading-relaxed">
              <strong className="text-white">OpenEvidence</strong> scored 61/100, with solid coverage of boxed warnings and dosing parameters but gaps in safety depth.
            </p>
          </div>

          {/* LLM Failures */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Where the General LLMs Failed</h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-8">
              This is where the data gets concerning. All four frontier LLMs — models that dominate AI headlines — scored below 35%. They didn't just miss nuances. They made errors that could directly harm patients.
            </p>

            <div className="space-y-4">
              {content.llmErrors.map((error, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 ${
                    error.isBestLLM
                      ? 'bg-amber-500/10 border border-amber-500/20'
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-slate-800 text-white text-sm font-bold px-3 py-1 rounded">{error.model}</span>
                    <span className={`font-semibold ${error.isBestLLM ? 'text-amber-400' : 'text-red-400'}`}>
                      Score: {error.score}/100 {error.isBestLLM && '(Best LLM)'}
                    </span>
                  </div>
                  <p className="text-white font-medium mb-2">{error.error}</p>
                  <p className={`text-sm ${error.isBestLLM ? 'text-amber-300' : 'text-red-300'}`}>{error.consequence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Universal Failure */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Universal Failure: Lewy Body Dementia</h2>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              {content.universalFailure.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                }} />
              ))}
            </div>
          </div>

          {/* What This Means */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What This Means</h2>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              {content.whatThisMeans.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                }} />
              ))}
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-10">
            <div className="text-emerald-400 font-bold mb-3">The Bottom Line</div>
            <p className="text-white text-lg leading-relaxed">
              {content.bottomLine}
            </p>
          </div>

          {/* Limitations */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Limitations and Next Steps</h2>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              {content.limitations.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* From the Ship */}
          <div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">From the Ship</h2>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              {content.fromTheShip.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Author Box */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-2xl">JR</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">Dr. Javier Rosas</div>
              <div className="text-emerald-400 text-sm font-medium mb-3">Ship Physician & Clinical AI Specialist</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                I practice medicine 1,000 miles from shore and train AI systems that will help the next generation of doctors do the same. I work with leading AI companies on medical LLM evaluation, RLHF, and clinical AI safety.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/javier-rosas-remote-ai-doc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/RemoteAiDoc" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">Get More Clinical AI Insights</h3>
          <p className="text-emerald-100/80 mb-6">Subscribe to "Clinical AI from the Edge" — weekly on LinkedIn.</p>
          <a
            href="https://www.linkedin.com/newsletters/the-remote-ai-doc-weekly-clinical-ai-briefing-7296304837241720832/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Subscribe on LinkedIn
          </a>
        </div>

        {/* Share */}
        <div className="mt-12 text-center">
          <div className="text-slate-400 text-sm mb-4">Share this article</div>
          <div className="flex justify-center gap-4">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://theremoteaidoc.com/blog/' + post.slug)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-emerald-400 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://theremoteaidoc.com/blog/' + post.slug)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-emerald-400 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <section className="relative py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  if (post.format === 'article') {
    return <ArticleRenderer post={post} />;
  } else {
    return <OriginalRenderer post={post} />;
  }
}
