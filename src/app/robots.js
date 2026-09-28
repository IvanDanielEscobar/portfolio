export default function robots() {
  const baseUrl = "https://ivanescobarportfolio.netlify.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
