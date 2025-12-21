"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Newspaper,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories = [
  { name: "All Posts", slug: "all", icon: BookOpen, count: 12 },
  { name: "AI News", slug: "ai-news", icon: Newspaper, count: 5 },
  { name: "Tutorials", slug: "tutorials", icon: Lightbulb, count: 4 },
  { name: "Case Studies", slug: "case-studies", icon: TrendingUp, count: 3 },
];

const featuredPosts = [
  {
    title: "The Complete Guide to RAG Systems in 2025",
    excerpt:
      "Learn how Retrieval Augmented Generation is revolutionizing AI applications with accurate, knowledge-grounded responses.",
    category: "Tutorials",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    slug: "complete-guide-rag-systems-2025",
    featured: true,
  },
  {
    title: "Agentic AI: The Future of Autonomous Systems",
    excerpt:
      "Discover how AI agents are transforming enterprise workflows with autonomous decision-making and task execution.",
    category: "AI News",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    slug: "agentic-ai-future-autonomous-systems",
    featured: false,
  },
  {
    title: "How We Reduced Development Costs by 50% with AI",
    excerpt:
      "A deep dive into our AI-powered development workflow and how it delivers premium quality at lower costs.",
    category: "Case Studies",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    slug: "reduced-development-costs-50-percent-ai",
    featured: false,
  },
  {
    title: "Building Multi-Agent Systems with CrewAI",
    excerpt:
      "Step-by-step tutorial on creating collaborative AI agents that work together to solve complex problems.",
    category: "Tutorials",
    date: "Dec 3, 2025",
    readTime: "15 min read",
    slug: "building-multi-agent-systems-crewai",
    featured: false,
  },
  {
    title: "MCP Integration: Connecting AI to Everything",
    excerpt:
      "How the Model Context Protocol is becoming the universal standard for AI tool integration.",
    category: "AI News",
    date: "Nov 30, 2025",
    readTime: "7 min read",
    slug: "mcp-integration-connecting-ai-everything",
    featured: false,
  },
  {
    title: "Flutter + AI: Building Smart Mobile Apps",
    excerpt:
      "How to integrate AI features into Flutter apps for intelligent, personalized user experiences.",
    category: "Tutorials",
    date: "Nov 28, 2025",
    readTime: "11 min read",
    slug: "flutter-ai-building-smart-mobile-apps",
    featured: false,
  },
];

export function BlogPage() {
  const featuredPost = featuredPosts.find((p) => p.featured);
  const regularPosts = featuredPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-slate-300">AI Insights & News</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              The SachiAI <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400"
            >
              Stay ahead with the latest AI news, in-depth tutorials, and
              insights from our team of AI experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 border border-indigo-500/20"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-slate-400 mb-6">
                Get weekly AI insights, tutorials, and exclusive content delivered
                to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${
                  index === 0
                    ? "bg-indigo-500/20 border-indigo-500/50 text-white"
                    : "border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="text-xs opacity-60">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 p-8 md:p-12 border border-slate-800 hover:border-indigo-500/30 transition-all">
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <span className="text-indigo-400">{featuredPost.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-400 mb-6">{featuredPost.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-indigo-400 font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="h-full rounded-2xl p-6 bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center gap-3 text-sm mb-4">
                      <span className="px-2 py-1 rounded-full bg-slate-800 text-indigo-400 text-xs">
                        {post.category}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{post.date}</span>
                      <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="pb-24">
        <div className="text-center">
          <button className="px-8 py-4 rounded-full border border-slate-700 text-white hover:bg-slate-800/50 transition-all font-semibold">
            Load More Articles
          </button>
        </div>
      </section>
    </>
  );
}
