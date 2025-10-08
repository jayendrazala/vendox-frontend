"use client"
import { Button } from "../ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import GetStartedModal from "../common/get-started-modal"

const Revolutionize = () => {
  const [displayText, setDisplayText] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fullText =
    "RO Technician / AC vendors / Electricians / Car / Bike Service Vendors"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [fullText])

  // Restart animation when component mounts
  useEffect(() => {
    const restartInterval = setInterval(() => {
      setDisplayText("")

      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 80)
    }, 8000)

    return () => clearInterval(restartInterval)
  }, [fullText])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Feature Tags */}

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-14">
                Manage your business from your mobile.
              </h2>

              {/* Description */}
              <p className="text-lg text-paragraph/80 leading-7 -mt-2">
                Manage customers, track projects, process payments, and get
                smart automated reminders — all seamlessly in one powerful app.
              </p>

              {/* Animated Text */}
              <div className="text-lg font-medium text-gray-700 min-h-[2.5rem] flex items-center">
                <div className="relative">
                  <p className="inline-block text-gray-800 font-semibold sm:h-14 h-[84px]">
                    App that will work for{" "}
                    <span className="text-leneraGradient">{displayText}</span>
                  </p>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 items-center">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
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

      <GetStartedModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}

export default Revolutionize
