"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (email) {
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email)
        setIsSubscribed(true)
        setEmail("")
        setTimeout(() => setIsSubscribed(false), 3000)
      }
    },
    [email],
  )

  const handleSocialClick = useCallback((platform: string) => {
    // Handle social media links
    console.log(`Navigate to ${platform}`)
  }, [])

  const handleQuickLink = useCallback((section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleCall = useCallback(() => {
    window.open("tel:+919876543210", "_self")
  }, [])

  const handleEmail = useCallback(() => {
    window.open("mailto:info@dakshraj.com", "_self")
  }, [])

  const handleWhatsApp = useCallback(() => {
    window.open("https://wa.me/919876543210", "_blank")
  }, [])

  return (
    <footer id="contact" className="bg-gradient-to-b from-[#164253] to-[#0f2f3a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#ffefd1]"
                style={{
                  background: "linear-gradient(135deg, #8f663b 0%, #164253 100%)",
                }}
              >
                <span className="text-[#ffefd1] font-bold text-xl">D</span>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-black tracking-wider" style={{ fontFamily: "serif" }}>
                  <span style={{ color: "#8f663b" }}>DAKSH</span>
                  <span style={{ color: "#ffefd1" }}>RAJ</span>
                </div>
                <p className="text-xs text-[#8f663b] font-semibold">Hair Systems & Services</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your confidence with our premium hair systems and professional services. Over 15 years of
              excellence in hair restoration and styling.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                onClick={() => handleSocialClick("facebook")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full p-0"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick("instagram")}
                className="bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 rounded-full p-0"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick("twitter")}
                className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full p-0"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick("youtube")}
                className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full p-0"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#ffefd1] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleQuickLink("hero")}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("products")}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300 text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("services")}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("about")}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("contact")}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#ffefd1] mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Hair System Fitting</li>
              <li className="text-gray-300">Home Service</li>
              <li className="text-gray-300">Premium Styling</li>
              <li className="text-gray-300">Hair Extensions</li>
              <li className="text-gray-300">Maintenance & Care</li>
              <li className="text-gray-300">Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#ffefd1] mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8f663b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Hair Street, Beauty Plaza</p>
                  <p className="text-gray-300">Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8f663b] flex-shrink-0" />
                <button
                  onClick={handleCall}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300"
                >
                  +91 98765 43210
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8f663b] flex-shrink-0" />
                <button
                  onClick={handleEmail}
                  className="text-gray-300 hover:text-[#8f663b] transition-colors duration-300"
                >
                  info@dakshraj.com
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#8f663b] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <Card className="bg-gradient-to-r from-[#8f663b] to-[#164253] border-none">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#ffefd1] mb-2">Stay Updated</h3>
                <p className="text-gray-200">Subscribe to our newsletter for the latest updates and exclusive offers</p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-[#ffefd1] focus:outline-none focus:ring-2 focus:ring-[#ffefd1] text-[#164253]"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#ffefd1] text-[#164253] hover:bg-white hover:text-[#164253] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    "Subscribed!"
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 bg-[#0f2f3a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 DakshRaj Hair Systems. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-[#8f663b] transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#8f663b] transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-[#8f663b] transition-colors duration-300">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
