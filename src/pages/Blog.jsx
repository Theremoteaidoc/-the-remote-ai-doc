import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Tag, BookOpen } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { getAllPosts } from '../data/blogPosts';

export default function Blog() {
  const posts = getAllPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => p.id !== featuredPost.id);

  return (
    <>
      <Helmet>
        <title>Clinical AI from the Edge | The Remote AI Doc</title>
        <meta name="description" content="Evidence-based analysis of healthcare AI from a physician practicing 1,000 miles from shore. Research reviews, clinical evaluations, and critical commentary." />
        <meta name="keywords" content="clinical AI blog, healthcare AI insights, medical AI analysis, remote medicine, clinical AI safety, healthcare automation" />
        <link rel="canonical" href="https://theremoteaidoc.com/blog" />
        <meta property="og:title" content="Clinical AI from the Edge | The Remote AI Doc" />
        <meta property="og:description" content="Evidence-based analysis of healthcare AI from a physician practicing 1,000 miles from shore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/blog" />
        <meta property="og:image" content="https://theremoteaidoc.com/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clinical AI from the Edge | The Remote AI Doc" />
        <meta name="twitter:description" content="Evidence-based analysis of healthcare AI from a physician practicing 1,000 miles from shore." />
        <meta name="twitter:image" content="https://theremoteaidoc.com/profile.jpg" />
      </Helmet>
      
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Journal-style Header */}
          <ScrollReveal>
            <header className="mb-16 pb-8 border-b border-slate-700/60">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-emerald-500">
                  The Remote AI Doc
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-3">
                Clinical AI from the Edge
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Evidence-based analysis of healthcare AI — research reviews, clinical evaluations, and critical commentary from a physician practicing 1,000 miles from shore.
              </p>
            </header>
          </ScrollReveal>

          {/* Featured Article */}
          <ScrollReveal delay={100}>
            <Link to={`/blog/${featuredPost.slug}`} className="block group mb-14">
              <article className="pb-14 border-b border-slate-800/60">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-4 leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-base text-slate-400 leading-relaxed mb-5 max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                {/* Stats for evaluation post */}
                {featuredPost.stats && (
                  <div className="flex gap-8 mb-5">
                    <div>
                      <span className="text-xl font-bold text-white">{featuredPost.stats.platforms}</span>
                      <span className="text-sm text-slate-500 ml-1.5">platforms tested</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-white">{featuredPost.stats.rubricItems}</span>
                      <span className="text-sm text-slate-500 ml-1.5">rubric items</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-emerald-400">{featuredPost.stats.performanceGap}</span>
                      <span className="text-sm text-slate-500 ml-1.5">performance gap</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>Dr. Javier Rosas</span>
                    <span className="text-slate-700">·</span>
                    <span>{featuredPost.date}</span>
                    <span className="text-slate-700">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="text-emerald-400 text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          </ScrollReveal>

          {/* Article List */}
          <div className="space-y-0 divide-y divide-slate-800/60">
            {otherPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={150 + index * 80}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <article className="py-10">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="font-semibold tracking-wide uppercase text-xs text-emerald-500">
                        {post.category}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-500">{post.date}</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-serif font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-base text-slate-400 leading-relaxed mb-4 max-w-3xl">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Dr. Javier Rosas</span>
                      <span className="text-emerald-400 text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Newsletter CTA */}
          <ScrollReveal delay={300}>
            <div className="mt-16 pt-12 border-t border-slate-700/60 text-center">
              <p className="text-slate-500 text-sm mb-2">
                New articles published weekly on LinkedIn
              </p>
              <a 
                href="https://www.linkedin.com/newsletters/the-remote-ai-doc-weekly-clinical-ai-briefing-7296304837241720832/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                Subscribe to the newsletter <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
