import Image from "next/image"

const NumbersTell = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 relative overflow-hidden">
      {/* Bottom Left Vector - More compact on mobile */}
      <div className="absolute -bottom-[40%] sm:-bottom-[30%] lg:-bottom-[80%] -left-[15%] sm:-left-[10%]  lg:-left-[10%] z-10">
        <div className="relative h-48 w-48 lg:h-52 lg:w-52 xl:h-96 xl:w-96">
          <Image
            src="/images/vector-2.png"
            alt="Numbers Tell"
            fill
            className="rotate-270"
          />
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl relative z-20 mx-auto backdrop-blur-3xl py-6 sm:py-8 lg:py-10 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-center justify-between">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1">
              <div className="px-2 w-max py-1 rounded-full bg-white text-gray-700 border border-gray-200 text-xs sm:text-sm">
                Facts About VendoX
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-4xl leading-tight font-semibold text-gray-900">
                Numbers Tell Our Story
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-paragraph/80 leading-5 sm:leading-6 lg:leading-7">
                Our numbers are more than just statistics, they&apos;re the
                proof of our commitment, our progress, and the positive impact
                we&apos;re making.
              </p>
            </div>

            {/* Statistics Section - More compact on mobile */}
            <div className="px-5 flex flex-row gap-4 justify-between sm:justify-center sm:gap-6 lg:gap-12 mt-4 sm:mt-6 lg:mt-0 w-full md:w-max">
              <div className="text-center">
                <div className="text-5xl font-bold text-leneraGradient">
                  4K+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500">10K+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
                  Services Listed
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 left-[20%] w-12 h-12 lg:w-[250px] lg:h-[250px] bg-orange-300/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-10 right-[30%] w-12 h-12 bg-orange-300/40 blur-[120px] rounded-full"></div>

        {/* Top Right Vector - More compact on mobile */}
        <div className="absolute -top-[9%] sm:-top-[10%] lg:-top-[15%] -right-10 lg:right-[1%] z-10">
          <div className="relative h-24 w-24">
            <Image src="/images/vector-1.png" alt="Numbers Tell" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumbersTell
