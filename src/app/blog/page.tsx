import { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "AI Blog - News, Tutorials & Insights",
  description:
    "Stay updated with the latest AI news, tutorials, and industry insights. Learn about Generative AI, LLMs, RAG systems, AI agents, and more from the SachiAI team.",
  keywords: [
    "AI blog",
    "AI news",
    "AI tutorials",
    "Generative AI articles",
    "LLM guides",
    "RAG tutorials",
    "AI development tips",
  ],
  openGraph: {
    title: "AI Blog | SachiAI",
    description:
      "Latest AI news, tutorials, and insights from the SachiAI team.",
    url: "https://sachiai.com/blog",
  },
};

export default function Blog() {
  return <BlogPage />;
}
