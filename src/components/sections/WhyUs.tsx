"use client";

import { motion } from "framer-motion";
import {
  Zap,
  DollarSign,
  Shield,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Zap,
    title: "AI-Powered Speed",
    description:
      "Our developers use Claude, Cursor, and GitHub Copilot to write code 3X faster than traditional development—without cutting corners.",
    stat: "3X",
    statLabel: "Faster",
  },
  {
    icon: DollarSign,
    title: "Unbeatable Pricing",
    description:
      "AI acceleration means lower costs for you. Get premium quality at 40-60% less than traditional agencies charge.",
    stat: "50%",
    statLabel: "Savings",
  },
  {
    icon: Shield,
    title: "Expert Quality Assurance",
    description:
      "Every line of AI-generated code is reviewed, tested, and validated by our senior developers. Zero compromise on quality.",
    stat: "100%",
    statLabel: "Reviewed",
  },
  {
    icon: Users,
    title: "Human + AI Partnership",
    description:
      "The best of both worlds: AI efficiency combined with human creativity, experience, and critical thinking.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    description:
      "Launch weeks earlier than competitors. Our streamlined AI workflow means rapid iterations and quick deployments.",
    stat: "70%",
    statLabel: "Faster Launch",
  },
  {
    icon: Award,
    title: "Battle-Tested Process",
    description:
      "We've refined our AI-human workflow to eliminate bugs and security vulnerabilities before they reach production.",
    stat: "99.9%",
    statLabel: "Uptime",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The SachiAI"
          titleHighlight="Advantage"
          description="We're not just another dev shop. We've cracked the code on AI-augmented development—delivering enterprise-grade quality at startup-friendly prices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl p-8 bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
                {/* Stat badge */}
                <div className="absolute top-6 right-6">
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      {reason.stat}
                    </div>
                    <div className="text-xs text-slate-500">{reason.statLabel}</div>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-indigo-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
