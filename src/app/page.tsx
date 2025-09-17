import {
  Features,
  GetStartedToday,
  HowItWorks,
  NumbersTell,
  Revolutionize,
  Testimonials,
  WhyChoose
} from "@/components/home"
import { generateMetadata } from "@/lib/seo"

// Page-specific SEO metadata
export const metadata = generateMetadata({
  title: "VendorX - Revolutionize Your Vendor Management",
  description:
    "Transform your business operations with VendorX. The ultimate platform for seamless vendor management, improved relationships, and accelerated growth. Get started today!",
  image: "https://vendorx.com/og-home.jpg" // Update with your actual home page OG image
})

export default function Home() {
  return (
    <>
      <Revolutionize />
      <NumbersTell />
      <WhyChoose />
      <Features />
      <HowItWorks />
      <Testimonials />
      <GetStartedToday />
    </>
  )
}
