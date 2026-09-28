export default function sitemap() {
  const baseUrl = "https://ivanescobarportfolio.netlify.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
