import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  // Instead of using a redirect, we'll return an XML sitemap that references the sitemap-index.xml
  const siteUrl = import.meta.env.SITE || "https://erbetowski.pl";
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-index.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}; 