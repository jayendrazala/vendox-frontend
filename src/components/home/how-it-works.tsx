import { cn } from "@/lib/utils"
import Image from "next/image"

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Download the App & Set Up Your Services",
      description:
        "Get VendoX available on both IOS and Android. Add your service types and set default prices.",
      highlight: "VendoX"
    },
    {
      number: "2",
      title: "Add Customers & Schedule Services",
      description:
        "Enter customer details and service history. Plan and manage upcoming and due services.",
      highlight: "manage"
    },
    {
      number: "3",
      title: "Track Earnings",
      description: "Monitor your income and generate reports.",
      highlight: "generate"
    }
  ]

  return (
    <div className="relative">
      <section className="md:py-15 py-10 relative z-10  backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="space-y-4">
            <div className="px-2 w-max py-1 rounded-full bg-white text-gray-700 border border-gray-200">
              Your Step-by-Step Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
              How It Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-11">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-6 px-10 py-8 border-l-2 ",
                      index === 0 ? "border-orange-600" : "border-neutral-200"
                    )}
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-paragraph/80 leading-relaxed">
                        {step.description
                          .split(step.highlight)
                          .map((part, i) => (
                            <span key={i}>
                              {part}
                              {i <
                                step.description.split(step.highlight).length -
                                  1 && (
                                <span className="text-red-500 font-medium">
                                  {step.highlight}
                                </span>
                              )}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Phone */}
            <div className="flex justify-center items-center relative">
              <Image
                src="/images/how-it-works.png"
                alt="VendoX How It Works"
                width={464}
                height={508}
                className="relative z-10"
              />

              {/* Blur effect behind phone */}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Blur Bottom Left */}
      <div className="absolute lg:block hidden -bottom-[10%] left-0 z-0">
        <Image
          src="/images/vector-3.svg"
          alt="How It Works"
          height={100}
          width={100}
        />
      </div>
      <div className="absolute lg:block hidden -top-[10%] right-0 z-0">
        <Image
          src="/images/vector-4.svg"
          alt="How It Works"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default HowItWorks
