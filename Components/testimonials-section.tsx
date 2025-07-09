"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 35,
      location: "Mumbai",
      rating: 5,
      text: "DakshRaj completely transformed my confidence! The hair system looks so natural that even my close friends couldn't tell. The service was exceptional and the team was very professional.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Premium Hair System",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=200",
        after: "/placeholder.svg?height=200&width=200",
      },
      videoTestimonial: "/placeholder-video.mp4",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 28,
      location: "Delhi",
      rating: 5,
      text: "I was hesitant at first, but the consultation process was so thorough and reassuring. The results exceeded my expectations. I feel like a new person!",
      image: "/placeholder.svg?height=80&width=80",
      service: "Women's Hair Piece",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=200",
        after: "/placeholder.svg?height=200&width=200",
      },
      videoTestimonial: "/placeholder-video.mp4",
    },
    {
      id: 3,
      name: "Amit Patel",
      age: 42,
      location: "Bangalore",
      rating: 5,
      text: "The home service was incredibly convenient. The stylist was professional and made me feel comfortable throughout the process. Highly recommended!",
      image: "/placeholder.svg?height=80&width=80",
      service: "Home Service",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=200",
        after: "/placeholder.svg?height=200&width=200",
      },
      videoTestimonial: "/placeholder-video.mp4",
    },
    {
      id: 4,
      name: "Sunita Gupta",
      age: 38,
      location: "Chennai",
      rating: 5,
      text: "The quality is outstanding and the customer service is top-notch. They guided me through every step and the final result is amazing. Worth every penny!",
      image: "/placeholder.svg?height=80&width=80",
      service: "Premium Styling",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=200",
        after: "/placeholder.svg?height=200&width=200",
      },
      videoTestimonial: "/placeholder-video.mp4",
    },
    {
      id: 5,
      name: "Vikram Singh",
      age: 31,
      location: "Pune",
      rating: 5,
      text: "I've tried other places before, but DakshRaj is in a league of its own. The attention to detail and the natural look achieved is remarkable.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Hair System Fitting",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=200",
        after: "/placeholder.svg?height=200&width=200",
      },
      videoTestimonial: "/placeholder-video.mp4",
    },
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const handleVideoPlay = useCallback(
    (testimonialId: number) => {
      setPlayingVideo(playingVideo === testimonialId ? null : testimonialId)
    },
    [playingVideo],
  )

  const handleBookConsultation = useCallback(() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            className="text-[#ffefd1] px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
          >
            Customer Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#164253] mb-6">
            What Our <span className="text-[#8f663b]">Customers Say</span>
          </h2>
          <p className="text-xl text-[#8f663b] max-w-3xl mx-auto leading-relaxed">
            Real stories from real customers who have transformed their lives with DakshRaj hair systems and services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-[#ffefd1] to-white border-2 border-[#8f663b]/20 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#8f663b] mb-4" />
                    <p className="text-lg md:text-xl text-[#164253] leading-relaxed mb-6 italic">
                      "{currentTestimonialData.text}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-[#8f663b] font-semibold">5.0</span>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center mb-6">
                    <img
                      src={currentTestimonialData.image || "/placeholder.svg"}
                      alt={currentTestimonialData.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#8f663b]"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-[#164253]">{currentTestimonialData.name}</h4>
                      <p className="text-[#8f663b]">
                        Age {currentTestimonialData.age}, {currentTestimonialData.location}
                      </p>
                      <p className="text-sm text-[#164253] font-medium">{currentTestimonialData.service}</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={prevTestimonial}
                        className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] w-10 h-10 rounded-full p-0"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={nextTestimonial}
                        className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] w-10 h-10 rounded-full p-0"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="flex items-center space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? "bg-[#164253]" : "bg-[#8f663b]/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Before/After or Video */}
                <div className="relative bg-[#164253] p-8 lg:p-12 flex items-center justify-center">
                  {playingVideo === currentTestimonialData.id ? (
                    <div className="relative w-full max-w-md">
                      <video
                        controls
                        autoPlay
                        className="w-full rounded-lg shadow-xl"
                        poster="/placeholder.svg?height=300&width=400"
                      >
                        <source src={currentTestimonialData.videoTestimonial} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="relative">
                      {/* Before/After Images */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <img
                            src={currentTestimonialData.beforeAfter.before || "/placeholder.svg"}
                            alt="Before"
                            className="w-full h-32 object-cover rounded-lg shadow-lg"
                          />
                          <p className="text-[#ffefd1] text-sm mt-2 font-semibold">Before</p>
                        </div>
                        <div className="text-center">
                          <img
                            src={currentTestimonialData.beforeAfter.after || "/placeholder.svg"}
                            alt="After"
                            className="w-full h-32 object-cover rounded-lg shadow-lg"
                          />
                          <p className="text-[#ffefd1] text-sm mt-2 font-semibold">After</p>
                        </div>
                      </div>

                      {/* Video Play Button */}
                      <div className="text-center">
                        <Button
                          onClick={() => handleVideoPlay(currentTestimonialData.id)}
                          className="bg-[#8f663b] hover:bg-[#ffefd1] hover:text-[#164253] text-[#ffefd1] px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Watch Video Testimonial
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                index === currentTestimonial
                  ? "border-[#8f663b] shadow-lg"
                  : "border-transparent hover:border-[#8f663b]"
              } bg-white`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#8f663b]"
                  />
                  <div>
                    <h4 className="font-bold text-[#164253]">{testimonial.name}</h4>
                    <p className="text-sm text-[#8f663b]">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-[#164253] text-sm line-clamp-3">"{testimonial.text}"</p>

                <div className="mt-4 pt-4 border-t border-[#8f663b]/20">
                  <p className="text-xs text-[#8f663b] font-medium">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#164253] to-[#8f663b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Experience the same transformation and confidence boost that thousands of our customers have enjoyed. Book
              your free consultation today!
            </p>
            <Button
              onClick={handleBookConsultation}
              className="bg-[#ffefd1] text-[#164253] hover:bg-white hover:text-[#164253] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
