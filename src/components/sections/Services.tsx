"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Bot,
  Database,
  MessageSquare,
  Smartphone,
  Eye,
  FileText,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "Generative AI",
    description:
      "Custom LLM integration, fine-tuning, and AI-powered content generation using GPT-4, Claude, Gemini, and open-source models.",
    href: "/services/generative-ai",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Autonomous AI agents that reason, plan, and execute complex tasks using CrewAI, LangGraph, AutoGen, and MCP integration.",
    href: "/services/agentic-ai",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "RAG Systems",
    description:
      "Knowledge-powered AI with vector databases (Pinecone, Weaviate, Qdrant) for accurate, hallucination-free responses.",
    href: "/services/rag",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI for WhatsApp, Telegram, and web—automating customer support and engagement 24/7.",
    href: "/services/chatbots",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    description:
      "Beautiful, high-performance cross-platform mobile apps with AI integration for iOS and Android from a single codebase.",
    href: "/services/flutter",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Object detection, image classification, OCR, and video analytics using TensorFlow, PyTorch, and YOLO models.",
    href: "/services/computer-vision",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: FileText,
    title: "NLP Services",
    description:
      "Sentiment analysis, text classification, entity recognition, and language translation for text intelligence.",
    href: "/services/nlp",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Business process automation with n8n, Make, Zapier workflows and custom API integrations powered by AI.",
    href: "/services/automation",
    color: "from-amber-500 to-orange-500",
  },
];

export function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything AI, Delivered"
          titleHighlight="Exceptionally"
          description="From intelligent chatbots to autonomous agents, we build AI solutions that transform businesses. All developed 3X faster with our AI-powered workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="relative h-full rounded-2xl p-6 bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-700 text-white hover:bg-slate-800/50 transition-all font-semibold"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
