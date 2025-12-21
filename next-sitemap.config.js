/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://sachiai.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://sachiai.com/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
  },
  exclude: ["/api/*", "/admin/*"],
  generateIndexSitemap: false,
};
