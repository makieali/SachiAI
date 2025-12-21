"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock, Sparkles } from "lucide-react";

const stats = [
  { value: "3X", label: "Faster Delivery", icon: Zap },
  { value: "50%", label: "Cost Savings", icon: Shield },
  { value: "100%", label: "Quality Assured", icon: Clock },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-slate-300">
              AI-Powered Development with Expert Human Oversight
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Premium Quality.</span>
            <br />
            <span className="gradient-text glow-text">Unbeatable Speed.</span>
            <br />
            <span className="text-white">Smart Pricing.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We leverage cutting-edge AI tools to build your software{" "}
            <span className="text-indigo-400 font-semibold">3X faster</span> at{" "}
            <span className="text-violet-400 font-semibold">50% lower cost</span>
            —with every line reviewed by our expert developers.{" "}
            <span className="text-cyan-400 font-semibold">Zero compromise on quality.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative flex items-center gap-2 text-white font-semibold">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all font-semibold"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative group"
              >
                <div className="glass rounded-2xl p-4 sm:p-6 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                  <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-indigo-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
