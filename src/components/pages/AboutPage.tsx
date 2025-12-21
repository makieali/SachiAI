"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Rocket,
  Users,
  Award,
  Code,
  Brain,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/sections/CTA";

const values = [
  {
    icon: Rocket,
    title: "Speed Without Sacrifice",
    description:
      "We leverage AI to work faster, but never at the cost of quality. Every shortcut we don't take is a bug we don't ship.",
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description:
      "AI is our tool, not our replacement. Human creativity, judgment, and oversight are essential to everything we build.",
  },
  {
    icon: Award,
    title: "Quality Obsession",
    description:
      "We're not satisfied with 'good enough.' Every line of code is reviewed, every feature is tested, every solution is optimized.",
  },
  {
    icon: Code,
    title: "Transparent Process",
    description:
      "No black boxes. We explain how we work, why we make decisions, and what AI contributes to your project.",
  },
];

const stats = [
  { value: "3X", label: "Faster Delivery" },
  { value: "50%", label: "Cost Savings" },
  { value: "100%", label: "Code Reviewed" },
  { value: "24/7", label: "Support Available" },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-slate-300">About SachiAI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Where <span className="gradient-text">AI Efficiency</span> Meets{" "}
                <span className="gradient-text">Human Excellence</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                We&apos;re not just another software agency. We&apos;re pioneering a new way of
                building software—one where AI accelerates development while human
                experts ensure quality. The result? Premium solutions delivered
                faster and at lower cost, without compromise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert mx-auto"
          >
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                SachiAI was born from a simple observation: the AI revolution was
                changing how software could be built, but most companies weren&apos;t
                adapting. They were either ignoring AI entirely or using it
                recklessly without proper oversight.
              </p>
              <p>
                We saw a different path. What if we could harness AI&apos;s speed and
                efficiency while maintaining the quality that only human expertise
                can provide? What if we could deliver projects 3X faster without
                cutting corners? What if premium quality didn&apos;t have to mean
                premium prices?
              </p>
              <p>
                That&apos;s the SachiAI difference. Our developers use the most advanced
                AI coding assistants—Claude, Cursor, GitHub Copilot—to write code
                at unprecedented speed. But every single line is reviewed by senior
                engineers. Every architecture decision is made by humans. Every
                solution is tested rigorously.
              </p>
              <p className="text-white font-medium">
                The result? You get the best of both worlds: AI efficiency and
                human excellence, delivered faster and at lower cost than you
                thought possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To revolutionize software development by combining AI-powered
                efficiency with expert human oversight, delivering premium quality
                solutions at unprecedented speed and competitive pricing—making
                advanced technology accessible to businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the most trusted AI solutions provider where clients get
                enterprise-grade quality without enterprise-grade costs—proving
                that the future of software development is a partnership between
                human expertise and artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What We"
            titleHighlight="Stand For"
            description="These principles guide every decision we make and every line of code we write."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Team"
            title="Human + AI"
            titleHighlight="Partnership"
            description="A unique collaboration between experienced developers and advanced AI systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human Experts</h3>
              <p className="text-slate-400">
                Experienced developers with deep expertise in AI, mobile, and web
                development. They architect solutions, review all code, and ensure
                quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Partners</h3>
              <p className="text-slate-400">
                Claude, GPT-4, and other advanced AI assistants that accelerate
                development. They help write code faster while humans maintain
                creative control.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
