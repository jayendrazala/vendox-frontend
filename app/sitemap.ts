import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Define your static routes here
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    }
  ]

  // You can add dynamic routes here if you have them
  // For example, if you have blog posts or product pages
  // const dynamicRoutes = await getDynamicRoutes()

  return staticRoutes
}

// Helper function to get dynamic routes (uncomment and modify as needed)
// async function getDynamicRoutes() {
//   // Example for blog posts
//   const posts = await fetch('your-api-endpoint/posts').then(res => res.json())
//   return posts.map((post: any) => ({
//     url: `${siteConfig.url}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changeFrequency: 'weekly' as const,
//     priority: 0.6,
//   }))
// }
