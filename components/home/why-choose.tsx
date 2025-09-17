import Image from "next/image"
import { ArrowGrowth, Currency, Sort, AccountTree } from "@/components/icons"

const WhyChoose = () => {
  const features = [
    {
      icon: <ArrowGrowth />,
      title: "Boost Your Business",
      description:
        "Increase repeat customers by keeping track of service histories and sending timely reminders."
    },
    {
      icon: <Currency />,
      title: "Track Your Earnings",
      description:
        "Monitor your income and generate detailed reports to understand your business better."
    },
    {
      icon: <Sort />,
      title: "Stay Organized",
      description:
        "Never miss a service date again with our automated reminders and upcoming service lists."
    },
    {
      icon: <AccountTree />,
      title: "Simplify Your Workflow",
      description:
        "Manage all customer information, service details, and schedules in one easy-to-use app."
    }
  ]

  return (
    <section className="md:py-15 py-10 bg-gray-50 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="px-2 w-max py-1 rounded-full bg-white text-gray-700 border border-gray-200">
            We&apos;re The Right Fit For You
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
            Why Choose VendoX?
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/why-choose.png"
                alt="VendoX App Screenshots"
                width={400}
                height={600}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="hover:bg-white md:px-6 px-0 py-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-paragraph/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
