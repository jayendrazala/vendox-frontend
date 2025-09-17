import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"]
  },
  // Vercel handles output automatically
  // Handle font loading issues gracefully
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Font-Display",
            value: "swap"
          }
        ]
      }
    ]
  },
  // Ensure proper trailing slash handling
  trailingSlash: false,
  // Optimize for production
  compress: true
}

export default nextConfig
