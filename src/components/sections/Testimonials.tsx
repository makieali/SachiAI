"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    content:
      "SachiAI delivered our AI chatbot in half the time we expected. The quality exceeded our enterprise standards, and the cost savings were incredible. Their AI-powered development process is the real deal.",
    rating: 5,
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Michael Roberts",
    role: "Founder, DataSync",
    content:
      "We needed a complex RAG system for our legal documents. SachiAI's team not only understood our requirements perfectly but delivered a solution that reduced our research time by 70%. Truly impressive.",
    rating: 5,
    image: "/testimonials/michael.jpg",
  },
  {
    name: "Emma Williams",
    role: "Product Manager, HealthFirst",
    content:
      "The Flutter app they built for us is beautiful and performs flawlessly. What impressed me most was how they integrated AI features seamlessly. Our users love the smart recommendations.",
    rating: 5,
    image: "/testimonials/emma.jpg",
  },
  {
    name: "David Park",
    role: "CEO, RetailPro",
    content:
      "Their agentic AI solution automated 60% of our customer service. The ROI was visible within the first month. SachiAI is now our go-to partner for all AI initiatives.",
    rating: 5,
    image: "/testimonials/david.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Success Stories"
          title="Trusted by Innovators"
          titleHighlight="Worldwide"
          description="Don't just take our word for it. Here's what our clients say about working with SachiAI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl p-8 bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-500/20" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
