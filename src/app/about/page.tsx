import { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us - AI-Powered Development Company",
  description:
    "Meet SachiAI - a new kind of software company where AI and human expertise combine to deliver premium solutions 3X faster at 50% lower cost. Learn our story and mission.",
  keywords: [
    "about SachiAI",
    "AI development company",
    "AI-powered development",
    "software development team",
    "AI consultants",
  ],
  openGraph: {
    title: "About SachiAI | AI-Powered Development",
    description:
      "Meet the team behind SachiAI - combining AI efficiency with human expertise to transform software development.",
    url: "https://sachiai.com/about",
  },
};

export default function About() {
  return <AboutPage />;
}
