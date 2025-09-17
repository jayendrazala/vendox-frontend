import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./mobile-menu"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="VendoX Logo"
              width={132}
              height={32}
            />
          </div>

          {/* Spacer for center alignment */}
          <div className="flex-1"></div>

          {/* CTA Button and Navigation on the right */}
          <div className="flex items-center ">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-[rgb(55,65,81)] hover:text-[rgb(31,41,55)] transition-colors"
              >
                Why Us
              </Link>
              <Link
                href="#"
                className="text-[rgb(55,65,81)] hover:text-[rgb(31,41,55)] transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-[rgb(55,65,81)] hover:text-[rgb(31,41,55)] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="text-[rgb(55,65,81)] hover:text-[rgb(31,41,55)] transition-colors"
              >
                Contact Us
              </Link>
              <Button className="cursor-pointer bg-primary hover:bg-primary-400 text-white hidden sm:inline-flex">
                Get VendoX
              </Button>
            </nav>
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
