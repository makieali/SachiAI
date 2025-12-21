import { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "AI Development Services - Generative AI, RAG, Flutter & More",
  description:
    "Explore SachiAI's comprehensive AI development services: Generative AI, Agentic AI, RAG systems, AI chatbots, Flutter apps, computer vision, NLP, and automation. Built 3X faster at 50% lower cost.",
  keywords: [
    "AI development services",
    "Generative AI solutions",
    "RAG development",
    "Agentic AI",
    "Flutter app development",
    "AI chatbot development",
    "Computer vision services",
    "NLP services",
    "AI automation",
  ],
  openGraph: {
    title: "AI Development Services | SachiAI",
    description:
      "Full-stack AI development services delivered 3X faster at 50% lower cost. Generative AI, RAG, chatbots, Flutter apps & more.",
    url: "https://sachiai.com/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
