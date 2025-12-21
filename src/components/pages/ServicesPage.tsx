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
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/sections/CTA";

const services = [
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description:
      "Harness the power of large language models to transform your business. We integrate, fine-tune, and deploy custom AI solutions that understand your domain.",
    href: "/services/generative-ai",
    color: "from-indigo-500 to-violet-500",
    features: [
      "Custom LLM integration (GPT-4, Claude, Gemini, Llama)",
      "Model fine-tuning for your specific use case",
      "AI-powered content generation",
      "Intelligent document processing",
      "Custom AI assistants and copilots",
    ],
  },
  {
    icon: Bot,
    title: "Agentic AI Development",
    description:
      "Build autonomous AI agents that can reason, plan, and execute complex multi-step tasks. From research agents to workflow automation.",
    href: "/services/agentic-ai",
    color: "from-violet-500 to-purple-500",
    features: [
      "Multi-agent systems (CrewAI, LangGraph, AutoGen)",
      "Autonomous task execution",
      "MCP (Model Context Protocol) integration",
      "Tool-using AI agents",
      "Decision-making automation",
    ],
  },
  {
    icon: Database,
    title: "RAG Systems",
    description:
      "Connect your AI to your company's knowledge. Build retrieval-augmented generation systems that provide accurate, hallucination-free responses.",
    href: "/services/rag",
    color: "from-purple-500 to-pink-500",
    features: [
      "Vector database implementation (Pinecone, Weaviate, Qdrant)",
      "Custom knowledge base development",
      "Document intelligence systems",
      "Enterprise search solutions",
      "Hybrid search optimization",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Deploy intelligent conversational AI across all channels. From customer support to sales, our chatbots understand context and deliver results.",
    href: "/services/chatbots",
    color: "from-pink-500 to-rose-500",
    features: [
      "WhatsApp Business chatbots",
      "Telegram bot development",
      "Website chat widgets",
      "Multi-channel integration",
      "24/7 automated support",
    ],
  },
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Beautiful, high-performance mobile apps for iOS and Android from a single codebase. AI-powered features included.",
    href: "/services/flutter",
    color: "from-cyan-500 to-blue-500",
    features: [
      "Cross-platform iOS & Android apps",
      "AI-integrated mobile features",
      "E-commerce applications",
      "FinTech & Healthcare apps",
      "Real-time features & push notifications",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Turn images and video into actionable insights. From quality inspection to facial recognition, we build vision systems that see.",
    href: "/services/computer-vision",
    color: "from-blue-500 to-indigo-500",
    features: [
      "Object detection & recognition",
      "Image classification",
      "OCR & document processing",
      "Video analytics",
      "Quality inspection systems",
    ],
  },
  {
    icon: FileText,
    title: "NLP Services",
    description:
      "Extract meaning from text at scale. Sentiment analysis, classification, entity recognition, and more for text intelligence.",
    href: "/services/nlp",
    color: "from-emerald-500 to-teal-500",
    features: [
      "Sentiment analysis",
      "Text classification",
      "Named entity recognition",
      "Language translation",
      "Content moderation",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automate complex business processes with AI. Connect your tools, eliminate manual work, and let AI handle the repetitive tasks.",
    href: "/services/automation",
    color: "from-amber-500 to-orange-500",
    features: [
      "n8n / Make / Zapier workflows",
      "Custom API integrations",
      "Business process automation",
      "Data pipeline automation",
      "AI-powered decision workflows",
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="AI Solutions That"
            titleHighlight="Transform Businesses"
            description="From generative AI to mobile apps, we deliver end-to-end solutions built 3X faster with AI-powered development—all reviewed by expert engineers."
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`relative rounded-3xl p-8 bg-gradient-to-br ${service.color} opacity-10`}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-slate-900/90" />
                    <div className="relative aspect-video rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-slate-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Transparent, <span className="gradient-text">Fair Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Every project is unique. We provide detailed quotes based on your
              specific requirements—no hidden fees, no surprises. Our AI-powered
              development means you get premium quality at 40-60% lower cost than
              traditional agencies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-2xl font-bold text-white mb-2">Hourly</div>
                <div className="text-slate-400">$50-150/hour</div>
                <div className="text-sm text-slate-500 mt-2">
                  Based on complexity
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-indigo-500/50">
                <div className="text-2xl font-bold gradient-text mb-2">
                  Project-Based
                </div>
                <div className="text-slate-400">Custom Quote</div>
                <div className="text-sm text-slate-500 mt-2">Most popular</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-2xl font-bold text-white mb-2">Retainer</div>
                <div className="text-slate-400">From $2,000/mo</div>
                <div className="text-sm text-slate-500 mt-2">
                  Ongoing support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
