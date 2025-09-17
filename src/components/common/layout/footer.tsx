import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          {/* Left Side - Logo and Tagline */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center mb-3">
              <Image
                src="/images/logo.svg"
                alt="VendoX Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-paragraph/80 text-sm">
              Streamline Your Services, Boost Your Business
            </p>
          </div>

          {/* Right Side - App Store Buttons */}
          <div className="flex  gap-3">
            <Link href="#">
              <Image
                src="/images/app-store.svg"
                alt="App Store"
                width={105}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/play-store.svg"
                alt="Google Play"
                width={105}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-paragraph/80 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-paragraph/80 hover:text-gray-900 transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@vendox.com"
                  className="text-paragraph/80 hover:text-gray-900 transition-colors"
                >
                  support@vendox.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918001234567"
                  className="text-paragraph/80 hover:text-gray-900 transition-colors"
                >
                  +91-800-123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-paragraph/80 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-paragraph/80 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-paragraph/80 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-paragraph/80 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-4 flex-col sm:flex-row text-sm text-paragraph/80">
            <p className="text-paragraph/80 text-sm">© 2024 VendoX</p>
            <div className="flex items-center gap-4">
              <span className="w-1 h-1 bg-gray-400 rounded-full sm:block hidden"></span>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
