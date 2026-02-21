import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { getAllPosts } from '../data/blogPosts';

const content = {
  en: {
    seo: {
      title: 'Clinical AI from the Edge | The Remote AI Doc',
      description: 'Evidence-based analysis of healthcare AI from a physician practicing 1,000 miles from shore. Research reviews, clinical evaluations, and critical commentary.'
    },
    header: {
      subtitle: 'The Remote AI Doc',
      title: 'Clinical AI from the Edge',
      description: 'Evidence-based analysis of healthcare AI — research reviews, clinical evaluations, and critical commentary from a physician practicing 1,000 miles from shore.'
    },
    badges: {
      featured: 'Featured'
    },
    meta: {
      by: 'Dr. Javier Rosas',
      read: 'Read',
      readArticle: 'Read article'
    },
    newsletter: {
      text: 'New articles published weekly on LinkedIn',
      subscribe: 'Subscribe to the newsletter'
    }
  },
  es: {
    seo: {
      title: 'IA Clínica desde el Mar | The Remote AI Doc', 
      description: 'Análisis basado en evidencia de IA médica desde un médico practicando a 1,000 millas de la costa. Revisiones de investigación, evaluaciones clínicas y comentarios críticos.'
    },
    header: {
      subtitle: 'The Remote AI Doc',
      title: 'IA Clínica desde el Mar',
      description: 'Análisis basado en evidencia de IA médica — revisiones de investigación, evaluaciones clínicas y comentarios críticos desde un médico practicando a 1,000 millas de la costa.'
    },
    badges: {
      featured: 'Destacado'
    },
    meta: {
      by: 'Dr. Javier Rosas',
      read: 'Leer',
      readArticle: 'Leer artículo'
    },
    newsletter: {
      text: 'Nuevos artículos publicados semanalmente en LinkedIn',
      subscribe: 'Suscribirse al boletín'
    }
  }
};

export default function Blog({ currentLang = 'en', t: translations }) {
  const posts = getAllPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => p.id !== featuredPost.id);
  
  // Use translations from props if provided, otherwise fall back to content object
  const t = translations || content[currentLang];

  return (
    <>
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <link rel="canonical" href="https://theremoteaidoc.com/blog" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/blog" />
        <meta property="og:image" content="https://theremoteaidoc.com/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content="https://theremoteaidoc.com/profile.jpg" />
      </Helmet>
      
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Journal-style Header */}
          <header className="mb-16 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-600">
                {t.header.subtitle}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900 mb-3">
              {t.header.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.header.description}
            </p>
          </header>

          {/* Featured Article */}
          <Link to={`/blog/${featuredPost.slug}`} className="block group mb-14">
            <article className="pb-14 border-b border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {t.badges.featured}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-4 leading-snug">
                {featuredPost.title}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-5 max-w-3xl">
                {featuredPost.excerpt}
              </p>

              {/* Stats for evaluation post */}
              {featuredPost.stats && (
                <div className="flex gap-8 mb-5">
                  <div>
                    <span className="text-xl font-bold text-slate-900">{featuredPost.stats.platforms}</span>
                    <span className="text-sm text-slate-500 ml-1.5">platforms tested</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-slate-900">{featuredPost.stats.rubricItems}</span>
                    <span className="text-sm text-slate-500 ml-1.5">rubric items</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-emerald-600">{featuredPost.stats.performanceGap}</span>
                    <span className="text-sm text-slate-500 ml-1.5">performance gap</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="text-slate-700 font-medium">{t.meta.by}</span>
                  <span className="text-slate-300">·</span>
                  <span>{featuredPost.date}</span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="text-emerald-600 text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.meta.read} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          </Link>

          {/* Article List */}
          <div className="space-y-0 divide-y divide-slate-200">
            {otherPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                <article className="py-10">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="font-semibold tracking-wide uppercase text-xs text-emerald-600">
                      {post.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{post.date}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed mb-4 max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 font-medium">{t.meta.by}</span>
                    <span className="text-emerald-600 text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t.meta.readArticle} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 pt-12 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm mb-2">
              {t.newsletter.text}
            </p>
            <a 
              href="https://www.linkedin.com/newsletters/the-remote-ai-doc-weekly-clinical-ai-briefing-7296304837241720832/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
            >
              {t.newsletter.subscribe} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
