import { Metadata } from "next"

export const siteConfig = {
  name: "VendorX",
  description:
    "Revolutionize your vendor management with VendorX - the ultimate platform for seamless business operations, vendor relationships, and growth.",
  url: "https://vendorx.com", // Update with your actual domain
  ogImage: "https://vendorx.com/og-image.jpg", // Update with your actual OG image
  links: {
    twitter: "https://twitter.com/vendorx", // Update with your actual Twitter
    github: "https://github.com/vendorx" // Update with your actual GitHub
  },
  keywords: [
    "vendor management",
    "business operations",
    "vendor relationships",
    "supply chain",
    "procurement",
    "business growth",
    "vendor platform",
    "B2B solutions"
  ]
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageImage = image || siteConfig.ogImage

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/"
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@vendorx" // Update with your actual Twitter handle
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification code
      yandex: "your-yandex-verification-code", // Add if needed
      yahoo: "your-yahoo-verification-code" // Add if needed
    }
  }
}

export function generateStructuredData({
  type = "WebSite",
  name = siteConfig.name,
  description = siteConfig.description,
  url = siteConfig.url,
  image = siteConfig.ogImage,
  additionalData = {}
}: {
  type?: string
  name?: string
  description?: string
  url?: string
  image?: string
  additionalData?: Record<string, any>
} = {}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    image,
    ...additionalData
  }

  return baseStructuredData
}
