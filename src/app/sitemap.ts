import type { MetadataRoute } from "next";

import { posts } from "./blog/posts";

const BASE = "https://zammaya.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/gallery", "/franchise", "/blog", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const articles = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
