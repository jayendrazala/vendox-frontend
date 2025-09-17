import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/", "/_next/", "/static/"]
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url
  }
}
