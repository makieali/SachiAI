import { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free AI Development Consultation",
  description:
    "Start your AI project with SachiAI. Get a free consultation and project estimate. We respond within 24 hours. Contact us for Generative AI, RAG, chatbots, Flutter apps, and more.",
  keywords: [
    "contact SachiAI",
    "AI development consultation",
    "free AI consultation",
    "hire AI developers",
    "AI project estimate",
  ],
  openGraph: {
    title: "Contact SachiAI | Free AI Development Consultation",
    description:
      "Get a free consultation for your AI project. We respond within 24 hours with a detailed project estimate.",
    url: "https://sachiai.com/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
