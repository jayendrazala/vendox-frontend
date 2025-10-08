import {
  Users,
  Calendar,
  FileText,
  RefreshCw,
  Wallet,
  MessageCircle
} from "lucide-react"

const WhyChoose = () => {
  const WhyChooseArray = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Customer Management",
      description:
        "Keep all your customer details organized and accessible anytime."
    },
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: "Smart Service Management",
      description:
        "Easily schedule, track, and manage all service requests in one place."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Integrated Invoicing",
      description:
        "Create and track invoices instantly — no need for third-party tools."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-primary" />,
      title: "Automated AMC Plans",
      description:
        "Manage and renew maintenance contracts automatically with reminders."
    },
    {
      icon: <Wallet className="w-10 h-10 text-primary" />,
      title: "Payment Records",
      description:
        "Record and monitor all received and pending payments with ease."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-primary" />,
      title: "Customer Engagement",
      description:
        "Connect with customers through built-in communication and updates."
    }
  ]

  return (
    <section id="why-us" className="md:py-15 py-10 bg-gray-50 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="px-2 w-max py-1 rounded-full bg-white text-gray-700 border border-gray-200">
            What We Are Solving For You
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
            Why Choose VendoX?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WhyChooseArray.map((feature, index) => (
            <div
              key={index}
              className="bg-white hover:bg-white px-6 py-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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
    </section>
  )
}

export default WhyChoose
