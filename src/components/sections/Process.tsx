"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We dive deep into your requirements, understand your business goals, and identify the perfect AI solution for your needs.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Our experts design the optimal architecture, select the right AI models, and create a detailed roadmap for your project.",
    number: "02",
  },
  {
    icon: Code,
    title: "AI-Powered Development",
    description:
      "Our developers build your solution 3X faster using AI coding assistants, with every line reviewed by senior engineers.",
    number: "03",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your solution is bug-free, secure, and performs flawlessly at scale.",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Smooth launch with monitoring, performance optimization, and seamless handover documentation.",
    number: "05",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We stay with you—providing maintenance, updates, and continuous optimization to keep your AI solution evolving.",
    number: "06",
  },
];

export function Process() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="From Idea to Launch,"
          titleHighlight="Simplified"
          description="A battle-tested workflow that combines AI speed with human expertise. Every project follows our proven 6-step process."
        />

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-cyan-500/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-4 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-6xl font-bold text-slate-800">
                      {step.number}
                    </span>
                    <div
                      className={`${index % 2 === 0 ? "lg:text-right" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 max-w-md">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 ring-4 ring-slate-900" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
