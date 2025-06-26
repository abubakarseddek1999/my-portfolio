"use client"

import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Award, ChevronLeft, ChevronRight } from "lucide-react"

const Certificate = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    const handleCloseModalOutside = (event) => {
      const modals = document.querySelectorAll(".modal")
      modals.forEach((modal) => {
        if (event.target === modal) {
          ;(modal).close()
        }
      })
    }

    window.addEventListener("click", handleCloseModalOutside)
    return () => window.removeEventListener("click", handleCloseModalOutside)
  }, [])

  const certificates = [
    {
      id: 1,
      img: "https://i.postimg.cc/N0jjZM7R/certificate-1-1.png",
      courseName: "MERN Stack Development",
      organization: "Programming Hero",
      credentialId: "WEB8-2772",
      skills: "MERN Stack Development",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/gkh4QyYb/Communication-Hacks.jpg",
      courseName: "Communication Hacks",
      organization: "10 Minute School",
      credentialId: "661277056bfdc",
      skills: "Communication Hacks",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/9MdRhfNb/CV-writing.jpg",
      courseName: "CV Writing & Interview",
      organization: "10 Minute School",
      credentialId: "6612e708bf017",
      skills: "CV Writing & Interview",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/fWfgRjG7/Presentation-and-public-speeking.jpg",
      courseName: "Presentation & Public Speaking",
      organization: "10 Minute School",
      credentialId: "65d8929531534",
      skills: "Presentation & Public Speaking",
    },
  ]

  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-2/5 space-y-6">
            <div className="flex items-center mb-2">
              <Award className="w-4 h-4 mr-2 text-amber-500" />
              <span className="text-amber-500 font-medium">Certifications</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Check Out</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">My Certificate</h1>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
              I have done programming courses to increase my skills and also completed communication and presentation
              training. I'm sharing a few here.
            </p>

            <div className="pt-4">
              <button className="px-6 py-3 bg-pink-500 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 group">
                <span>Know More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="lg:w-3/5 w-full">
            <div className="relative">
              {/* Navigation Buttons - Responsive positioning */}
              <div className="hidden sm:block">
                <button
                  ref={prevRef}
                  className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  ref={nextRef}
                  className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="flex sm:hidden justify-center gap-4 mb-4">
                <button
                  ref={prevRef}
                  className="h-10 w-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  ref={nextRef}
                  className="h-10 w-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <Swiper
                modules={[Navigation, Pagination, A11y]}
                onInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = prevRef.current
                  // @ts-ignore
                  swiper.params.navigation.nextEl = nextRef.current
                  swiper.navigation.init()
                  swiper.navigation.update()
                }}
                // pagination={{
                //   clickable: true,
                //   bulletClass: "swiper-pagination-bullet !bg-pink-500 !opacity-50",
                //   bulletActiveClass: "swiper-pagination-bullet-active !bg-pink-500 !opacity-100",
                // }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="w-full certificate-swiper pb-12"
                speed={800}
              >
                {certificates.map((certificate) => (
                  <SwiperSlide key={certificate.id}>
                    <div
                      className="group cursor-pointer"
                      onClick={() => {
                        const modal = document.getElementById(`my_modal_${certificate.id}`) 
                        modal?.showModal()
                      }}
                    >
                      <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg">
                        <img
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={certificate.img || "/placeholder.svg"}
                          alt={certificate.courseName}
                        />
                      </div>

                      <div className="text-center space-y-2">
                        <h3 className="font-semibold text-lg group-hover:text-pink-400 transition-colors duration-300">
                          {certificate.courseName}
                        </h3>
                        <h5 className="text-gray-400 font-medium">{certificate.organization}</h5>
                      </div>
                    </div>

                    {/* Modal */}
                    <dialog id={`my_modal_${certificate.id}`} className="modal">
                      <div className="modal-box w-11/12 max-w-4xl bg-white text-gray-900">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-xl">Certificate Details</h3>
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost hover:bg-gray-100">✕</button>
                          </form>
                        </div>

                        <hr className="mb-6" />

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <span className="font-bold text-gray-700">Course Name:</span>
                                <p className="text-lg mt-1">{certificate.courseName}</p>
                              </div>

                              <div>
                                <span className="font-bold text-gray-700">Issuing Organization:</span>
                                <p className="text-lg mt-1">{certificate.organization}</p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <span className="font-bold text-gray-700">Credential ID:</span>
                                <p className="text-lg mt-1 font-mono bg-gray-100 px-2 py-1 rounded">
                                  {certificate.credentialId}
                                </p>
                              </div>

                              <div>
                                <span className="font-bold text-gray-700">Skills:</span>
                                <p className="text-lg mt-1">{certificate.skills}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="mt-6" />
                      </div>
                    </dialog>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate
