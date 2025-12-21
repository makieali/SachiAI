import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sachiai.com";

  const routes = [
    "",
    "/services",
    "/services/generative-ai",
    "/services/agentic-ai",
    "/services/rag",
    "/services/chatbots",
    "/services/flutter",
    "/services/computer-vision",
    "/services/nlp",
    "/services/automation",
    "/about",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
