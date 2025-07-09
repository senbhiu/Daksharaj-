"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Gift, Star, ArrowRight, Phone } from "lucide-react"

interface WelcomeModalProps {
  onClose: () => void
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (email) {
        // Handle email submission
        console.log("Welcome offer email:", email)
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 2000)
      }
    },
    [email, onClose],
  )

  const handleBookConsultation = useCallback(() => {
    onClose()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [onClose])

  const handleCallNow = useCallback(() => {
    window.open("tel:+919876543210", "_self")
    onClose()
  }, [onClose])

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <Card className="max-w-md w-full bg-white border-2 border-[#8f663b] shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-[#164253] mb-2">Thank You!</h3>
            <p className="text-[#8f663b] mb-4">Your exclusive offer has been sent to your email. Check your inbox!</p>
            <p className="text-sm text-gray-500">This window will close automatically...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full bg-gradient-to-br from-[#ffefd1] to-white border-2 border-[#8f663b] shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#164253] to-[#8f663b] text-white p-6 relative">
            <Button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-full p-0"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="text-center">
              <Gift className="w-12 h-12 mx-auto mb-3" />
              <h2 className="text-2xl font-bold mb-2">Welcome to DakshRaj!</h2>
              <Badge className="bg-[#ffefd1] text-[#164253] px-3 py-1 font-bold">🎉 EXCLUSIVE OFFER</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#164253] mb-3">
                Get <span className="text-[#8f663b]">20% OFF</span> Your First Order!
              </h3>
              <p className="text-[#8f663b] leading-relaxed">
                Transform your confidence with our premium hair systems. Plus, get a FREE consultation worth ₹2,999!
              </p>
            </div>

            {/* Offer Details */}
            <div className="bg-[#ffefd1] rounded-lg p-4 mb-6 border-2 border-[#8f663b]/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#164253]">20%</div>
                  <div className="text-sm text-[#8f663b]">Discount</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#164253]">FREE</div>
                  <div className="text-sm text-[#8f663b]">Consultation</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-[#164253]">100% Natural Human Hair</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-[#164253]">15+ Years of Excellence</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-[#164253]">10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-[#164253]">Free Pan-India Delivery</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for exclusive offer"
                  className="flex-1 px-4 py-3 border-2 border-[#8f663b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164253] text-[#164253]"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Offer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleBookConsultation}
                className="w-full bg-[#8f663b] hover:bg-[#164253] text-[#ffefd1] py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </Button>

              <Button
                onClick={handleCallNow}
                variant="outline"
                className="w-full border-2 border-[#164253] text-[#164253] hover:bg-[#164253] hover:text-[#ffefd1] py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
              >
                <Phone className="mr-2 w-4 h-4" />
                Call Now: +91 98765 43210
              </Button>
            </div>

            {/* Fine Print */}
            <p className="text-xs text-gray-500 text-center mt-4">
              *Offer valid for new customers only. Terms and conditions apply.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
