import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

const Revolutionize = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 p-1 bg-gray-100 text-neutral-400 text-sm w-max rounded-2xl">
                <span className="px-2 py-1 rounded-full bg-white text-gray-700 border border-gray-200">
                  New feature
                </span>
                <span className="px-3 py-1 rounded-full flex items-center gap-1">
                  Automated Reminders
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-14">
                Revolutionize Your Local Service Business with VendoX
              </h2>

              {/* Description */}
              <p className="text-lg text-paragraph/80 leading-7 -mt-2">
                Our system provides a centralized platform for storing and
                managing all your customer information, including contact
                details, service history, and more ensuring that you always have
                the latest information at your fingertips.
              </p>

              {/* Social Proof */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="bg-neutral-100 rounded-md p-1.5">
                    <div className="text-neutral-500 text-sm h-full flex items-center justify-center">
                      5000+
                    </div>
                  </div>
                </div>
                <div className="text-sm text-paragraph/60 font-medium mt-4">
                  Trusted By Over 5000+ Local Vendors All Over The Country
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 items-center">
                <Button
                  size="lg"
                  className="bg-primary cursor-pointer hover:bg-primary-400 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Right Content - App Mockup */}
            <div className="relative flex items-end w-full justify-center">
              <Image
                src="/images/revolutionize.png"
                alt="App Mockup"
                width={508}
                height={508}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Revolutionize
