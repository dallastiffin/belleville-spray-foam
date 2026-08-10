import type { MetadataRoute } from "next";

const baseUrl = "https://bellevillesprayfoaminsulation.com";

const routes = [
  "",
  "/services",
  "/attic-insulation",
  "/garage-insulation",
  "/basement-insulation",
  "/crawl-space-insulation",
  "/new-construction",
  "/closed-cell-spray-foam",
  "/open-cell-spray-foam",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
