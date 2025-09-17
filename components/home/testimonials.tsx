"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

const testimonialsData = [
  {
    id: 1,
    name: "Priya",
    profession: "Home Cleaning Service",
    rating: 4,
    testimonial:
      "I love the reminders feature. It ensures I never miss a service date and keeps my customers happy.",
    avatar: "P"
  },
  {
    id: 2,
    name: "Ramesh",
    profession: "AC Repair Technician",
    rating: 4.5,
    testimonial:
      "Using VendoX has transformed the way I manage my customers and services. It's so easy to use!",
    avatar: "R"
  },
  {
    id: 3,
    name: "Pravin",
    profession: "Computer Technician",
    rating: 5,
    testimonial:
      "It's perfect for someone like me who isn't a techy. Now I can focus on my work, not the paperwork!",
    avatar: "P"
  },
  {
    id: 3,
    name: "Pravin",
    profession: "Computer Technician",
    rating: 4.5,
    testimonial:
      "It's perfect for someone like me who isn't a techy. Now I can focus on my work, not the paperwork!",
    avatar: "P"
  }
]

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [perPage, setPerPage] = useState(3) // Default to desktop

  useEffect(() => {
    if (!api) return

    // Determine items per page based on screen size
    const updatePerPage = () => {
      const isMobile = window.innerWidth < 768 // md breakpoint
      const newPerPage = isMobile ? 1 : 3
      setPerPage(newPerPage)

      const pageCount = Math.ceil(testimonialsData.length / newPerPage)
      setTotalSlides(pageCount)
    }

    updatePerPage()
    window.addEventListener("resize", updatePerPage)

    const updateSlide = () => {
      const itemIndex = api.selectedScrollSnap()
      const pageIndex = Math.floor(itemIndex / perPage)
      setCurrentSlide(pageIndex)
    }

    updateSlide()
    api.on("select", updateSlide)

    return () => {
      window.removeEventListener("resize", updatePerPage)
    }
  }, [api, perPage])

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-orange-600 text-orange-600" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-orange-600 text-orange-600" />
          </div>
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <section className="md:py-15 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="px-2 py-1 rounded-full bg-white text-gray-700 border border-gray-200">
            Our Vendor Community Speaks
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
            Testimonials from Satisfied Vendors
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <div className="bg-white rounded-lg p-6 h-full border border-neutral-200">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg ">
                        {testimonial.name}
                      </h3>
                      <p className="text-paragraph/80 text-sm mt-1">
                        {testimonial.profession}
                      </p>
                      <div className="flex items-center mt-2">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}

                  {/* Testimonial */}
                  <blockquote className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-orange-600" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index * perPage)} // jump to first item of that page
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
