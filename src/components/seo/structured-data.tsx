import { generateStructuredData } from "@/lib/seo"

interface StructuredDataProps {
  data?: Record<string, any>
  type?: string
  name?: string
  description?: string
  url?: string
  image?: string
}

export function StructuredData({
  data,
  type,
  name,
  description,
  url,
  image
}: StructuredDataProps) {
  const structuredData =
    data ||
    generateStructuredData({
      type,
      name,
      description,
      url,
      image
    })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

export function WebsiteStructuredData() {
  const websiteData = generateStructuredData({
    type: "WebSite",
    additionalData: {
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://vendorx.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  })

  return <StructuredData data={websiteData} />
}

export function OrganizationStructuredData() {
  const organizationData = generateStructuredData({
    type: "Organization",
    additionalData: {
      logo: "https://vendorx.com/logo.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-XXX-XXX-XXXX", // Update with actual phone
        contactType: "customer service",
        availableLanguage: "English"
      },
      sameAs: [
        "https://twitter.com/vendorx",
        "https://linkedin.com/company/vendorx",
        "https://github.com/vendorx"
      ]
    }
  })

  return <StructuredData data={organizationData} />
}
