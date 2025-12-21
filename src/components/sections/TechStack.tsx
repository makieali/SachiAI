"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const technologies = {
  "AI & ML": [
    "OpenAI GPT-4",
    "Claude",
    "Gemini",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "AutoGen",
    "Hugging Face",
    "TensorFlow",
    "PyTorch",
  ],
  "Vector DBs": [
    "Pinecone",
    "Weaviate",
    "Qdrant",
    "Chroma",
    "Milvus",
  ],
  "Mobile": [
    "Flutter",
    "Dart",
    "Firebase",
    "Supabase",
  ],
  "Web": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
  ],
  "Cloud": [
    "AWS",
    "Google Cloud",
    "Azure",
    "Vercel",
    "Docker",
  ],
  "Automation": [
    "n8n",
    "Make",
    "Zapier",
    "MCP",
  ],
};

export function TechStack() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology Stack"
          title="Built with the"
          titleHighlight="Best Tools"
          description="We use cutting-edge technologies to deliver robust, scalable, and future-proof solutions."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="col-span-1"
            >
              <div className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800 h-full">
                <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="text-sm text-slate-400 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
