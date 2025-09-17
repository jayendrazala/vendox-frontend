import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"]
  },
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
  }
}

export default nextConfig
