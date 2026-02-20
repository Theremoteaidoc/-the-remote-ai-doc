import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { getAllPosts } from '../data/blogPosts';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Helmet>
        <title>Clinical AI Blog | The Remote AI Doc</title>
        <meta name="description" content="Insights on clinical AI safety, healthcare automation, and remote medicine from Dr. Javier Rosas." />
        <meta name="keywords" content="clinical AI blog, healthcare AI insights, medical AI analysis, remote medicine, clinical AI safety, healthcare automation" />
        <link rel="canonical" href="https://theremoteaidoc.com/blog" />
        <meta property="og:title" content="Clinical AI Blog | The Remote AI Doc" />
        <meta property="og:description" content="Insights on clinical AI safety, healthcare automation, and remote medicine from Dr. Javier Rosas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/blog" />
        <meta property="og:image" content="https://theremoteaidoc.com/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clinical AI Blog | The Remote AI Doc" />
        <meta name="twitter:description" content="Insights on clinical AI safety, healthcare automation, and remote medicine from Dr. Javier Rosas." />
        <meta name="twitter:image" content="https://theremoteaidoc.com/profile.jpg" />
      </Helmet>
      
      <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <ScrollReveal>
            <div className="text-sm text-teal-400 tracking-wider uppercase">Blog</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl lg:text-6xl tracking-tight">
              Clinical AI<br />
              <span className="text-slate-500">from the Edge</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Insights on healthcare AI, remote medicine, and the tools shaping tomorrow's clinical practice — written from 1,000 miles offshore.
            </p>
          </ScrollReveal>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.slug}`} className="block group">
                <article className="relative p-8 lg:p-10 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                  <div className="relative">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                      <span className="flex items-center gap-1.5 text-teal-400">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-500">{post.date}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-2xl lg:text-3xl text-white group-hover:text-teal-400 transition-colors duration-300 mb-4">
                      {post.title}
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Stats Preview */}
                    {post.stats && (
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-teal-400 text-2xl font-bold">{post.stats.platforms}</div>
                          <div className="text-slate-500 text-xs">Platforms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-teal-400 text-2xl font-bold">{post.stats.rubricItems}</div>
                          <div className="text-slate-500 text-xs">Rubric Items</div>
                        </div>
                        <div className="text-center">
                          <div className="text-teal-400 text-2xl font-bold">{post.stats.performanceGap}</div>
                          <div className="text-slate-500 text-xs">Performance Gap</div>
                        </div>
                      </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-teal-400 group-hover:gap-3 transition-all duration-300">
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Coming Soon Placeholder */}
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-slate-900/40 border border-slate-800/50 rounded-full">
              <span className="text-slate-500">More articles coming soon...</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
