import { Button } from "@/components/ui/button"
import { Download, Smartphone } from "lucide-react"
import Link from "next/link"

const GetStartedToday = () => {
  return (
    <section className="md:py-15 py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-orange-50 rounded-lg  p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Get Started Today
              </h2>
              <p className="text-lg text-paragraph/80 leading-relaxed">
                Download{" "}
                <span className="text-orange-600 font-semibold">VendoX</span>{" "}
                now and take your service business to the next level!
              </p>
            </div>

            {/* Right Content - Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Android Download */}
              <Link href="#">
                <Button
                  variant="outline"
                  className="flex items-center cursor-pointer gap-2 px-6 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 hover:border-orange-700 hover:text-orange-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download For Android
                </Button>
              </Link>

              {/* iOS Download */}
              <Link href="#">
                <Button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-400 text-white transition-colors">
                  <Smartphone className="w-4 h-4" />
                  Download For iOS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedToday
