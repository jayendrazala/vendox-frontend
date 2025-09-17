import Image from "next/image"
import {
  Account,
  History,
  Notification,
  Sell,
  CurrencyCircle
} from "@/components/icons"
import { cn } from "@/lib/utils"

const Features = () => {
  const features = [
    {
      icon: <Account />,
      title: "Customer Management",
      description: "Easily store and manage customer details.",
      left: "lg:ml-[10%] ml-0"
    },
    {
      icon: <History />,
      title: "Service Histories",
      description: "Keep detailed records of all services provided.",
      left: "lg:ml-[20%] ml-0"
    },
    {
      icon: <Notification />,
      title: "Automated Reminders",
      description: "Send SMS reminders to customers for upcoming services.",
      left: "lg:ml-[30%] ml-0"
    },
    {
      icon: <Sell />,
      title: "Customizable Prices",
      description: "Set default prices for services and edit them as needed.",
      left: "lg:ml-[20%] ml-0"
    },
    {
      icon: <CurrencyCircle />,
      title: "Earnings Tracking",
      description:
        "Track how much you earn from each service and view projected earnings.",
      left: "lg:ml-[10%] ml-0"
    }
  ]

  return (
    <section className="md:py-15 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="md:mb-12 mb-6">
          <div className="px-2 w-max py-1 rounded-full bg-white text-gray-700 border border-gray-200">
            Essential Tools For You
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
            Features That Empower Your Business
          </h2>
        </div>

        {/* Main Content */}
        <div className="lg:p-8">
          <div className="grid lg:grid-cols-3 items-center">
            {/* Left Side - Image */}
            <div className="lg:flex justify-center rounded hidden">
              <div className="relative rounded-2xl">
                <Image
                  src="/images/features.png"
                  alt="VendoX Features Graphic"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Side - Feature List */}
            <div className="space-y-2 col-span-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start space-x-4 md:px-4 py-4 px-0  rounded-lg hover:bg-gray-50 transition-colors duration-300",
                    feature.left
                  )}
                >
                  {/* Icon with colored background */}
                  <div className={`rounded-full flex-shrink-0`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-paragraph/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
