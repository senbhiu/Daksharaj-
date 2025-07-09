"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Headphones, ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react"

interface HeroSectionProps {
  onBookingClick?: () => void
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleBookingClick = useCallback(() => {
    if (onBookingClick) {
      onBookingClick()
    } else {
      // Scroll to contact section or show booking modal
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [onBookingClick])

  const handleViewProducts = useCallback(() => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#ffefd1" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8f663b 2px, transparent 2px), radial-gradient(circle at 75% 75%, #164253 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge
              className="text-[#ffefd1] px-4 py-2 text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
            >
              ✨ Premium Hair Solutions Since 2010
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-[#164253]">Transform Your</span>
                <br />
                <span className="text-[#8f663b]">Confidence with</span>
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  DakshRaj Hair Systems
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#8f663b] max-w-lg leading-relaxed">
                Experience the finest quality hair systems, professional services, and personalized solutions that
                restore your natural look and boost your confidence.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#164253] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#ffefd1]" />
                </div>
                <div>
                  <p className="font-semibold text-[#164253]">100% Natural</p>
                  <p className="text-sm text-[#8f663b]">Human Hair</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#8f663b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-[#ffefd1]" />
                </div>
                <div>
                  <p className="font-semibold text-[#164253]">Expert Fitting</p>
                  <p className="text-sm text-[#8f663b]">Professional Service</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#164253] rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[#ffefd1]" />
                </div>
                <div>
                  <p className="font-semibold text-[#164253]">Free Delivery</p>
                  <p className="text-sm text-[#8f663b]">Pan India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#8f663b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-[#ffefd1]" />
                </div>
                <div>
                  <p className="font-semibold text-[#164253]">24/7 Support</p>
                  <p className="text-sm text-[#8f663b]">Always Here</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleBookingClick}
                className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={handleViewProducts}
                variant="outline"
                className="border-2 border-[#8f663b] text-[#8f663b] hover:bg-[#8f663b] hover:text-[#ffefd1] px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent hover:shadow-lg transform hover:scale-105"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Video Section - Below Buttons */}
            <div className="mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-64 md:h-80 object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  poster="/placeholder.svg?height=320&width=600"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/michelle%21_20250706_085636_0001-tGyYSByXuXOiX7tgISbAq7noAkS7AB.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={togglePlay}
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                        size="sm"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>

                      <Button
                        onClick={toggleMute}
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                        size="sm"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                    </div>

                    <div className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      Hair Transformation Demo
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#164253] shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <p className="text-[#8f663b] font-medium">Watch Our Hair Transformation Process</p>
                <p className="text-sm text-[#164253] opacity-70">See the amazing results our clients achieve</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-[#8f663b]/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#164253]">10,000+</p>
                <p className="text-sm text-[#8f663b]">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#164253]">15+</p>
                <p className="text-sm text-[#8f663b]">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#164253]">4.9★</p>
                <p className="text-sm text-[#8f663b]">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="DakshRaj Hair Systems - Premium Quality"
                  className="w-full h-[600px] object-cover"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22, 66, 83, 0.5) 0%, transparent 100%)" }}
                />
              </div>

              {/* Floating Cards */}
              <Card className="absolute -top-6 -left-6 bg-[#ffefd1] border-[#8f663b] shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#164253] rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-[#ffefd1]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#164253]">Premium Quality</p>
                      <p className="text-sm text-[#8f663b]">100% Human Hair</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-6 -right-6 bg-[#ffefd1] border-[#8f663b] shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#8f663b] rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#ffefd1]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#164253]">Lifetime Support</p>
                      <p className="text-sm text-[#8f663b]">Expert Care</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -z-10 top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: "#8f663b" }}
            />
            <div
              className="absolute -z-10 bottom-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: "#164253" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
