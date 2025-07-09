"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scissors, Users, Home, Sparkles, Clock, MapPin, ArrowRight, Calendar } from "lucide-react"

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: "Hair System Fitting",
      description: "Professional fitting and customization of your hair system by our expert stylists",
      icon: Scissors,
      price: "₹2,999",
      duration: "2-3 hours",
      location: "At our salon",
      features: ["Custom fitting", "Style consultation", "Maintenance tips", "Follow-up support"],
      image: "/placeholder.svg?height=200&width=300",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Home Service",
      description: "Convenient at-home hair system fitting and maintenance service",
      icon: Home,
      price: "₹4,999",
      duration: "3-4 hours",
      location: "At your location",
      features: ["Home visit", "Complete setup", "Privacy guaranteed", "Flexible timing"],
      image: "/placeholder.svg?height=200&width=300",
      badge: "Convenient",
    },
    {
      id: 3,
      title: "Group Consultation",
      description: "Special consultation sessions for families or groups",
      icon: Users,
      price: "₹1,999/person",
      duration: "1-2 hours",
      location: "At our salon",
      features: ["Group discount", "Family packages", "Bulk consultation", "Special pricing"],
      image: "/placeholder.svg?height=200&width=300",
      badge: "Value",
    },
    {
      id: 4,
      title: "Premium Styling",
      description: "Complete hair styling and makeover service with premium products",
      icon: Sparkles,
      price: "₹5,999",
      duration: "4-5 hours",
      location: "Premium salon",
      features: ["Premium products", "Celebrity styling", "Photo session", "Luxury experience"],
      image: "/placeholder.svg?height=200&width=300",
      badge: "Premium",
    },
  ]

  const handleBookService = useCallback((serviceId: number) => {
    // Implement booking logic
    console.log(`Book service ${serviceId}`)
    // You can open a booking modal or navigate to booking page
  }, [])

  const handleLearnMore = useCallback(
    (serviceId: number) => {
      setSelectedService(selectedService === serviceId ? null : serviceId)
    },
    [selectedService],
  )

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-[#164253] text-[#ffefd1]"
      case "Convenient":
        return "bg-[#8f663b] text-[#ffefd1]"
      case "Value":
        return "bg-green-600 text-white"
      case "Premium":
        return "bg-purple-600 text-white"
      default:
        return "bg-[#8f663b] text-[#ffefd1]"
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            className="text-[#ffefd1] px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
          >
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#164253] mb-6">
            Professional <span className="text-[#8f663b]">Hair Services</span>
          </h2>
          <p className="text-xl text-[#8f663b] max-w-3xl mx-auto leading-relaxed">
            Experience our comprehensive range of professional hair services, from expert fitting to premium styling,
            all delivered with exceptional care and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
                  isSelected ? "border-[#8f663b] shadow-xl" : "border-transparent hover:border-[#8f663b]"
                } bg-white overflow-hidden`}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge */}
                    <Badge
                      className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold ${getBadgeColor(service.badge)}`}
                    >
                      {service.badge}
                    </Badge>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#164253]" />
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {service.price}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#164253] mb-2 group-hover:text-[#8f663b] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#8f663b] text-sm mb-4 line-clamp-2">{service.description}</p>

                    {/* Service Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-[#164253]">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-[#164253]">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{service.location}</span>
                      </div>
                    </div>

                    {/* Expandable Features */}
                    {isSelected && (
                      <div className="mb-4 p-3 bg-[#ffefd1] rounded-lg">
                        <h4 className="font-semibold text-[#164253] mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-sm text-[#8f663b] flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#164253] rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleBookService(service.id)}
                        className="w-full bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] transition-all duration-300 transform hover:scale-105"
                      >
                        <Calendar className="mr-2 w-4 h-4" />
                        Book Now
                      </Button>

                      <Button
                        onClick={() => handleLearnMore(service.id)}
                        variant="outline"
                        className="w-full border-2 border-[#8f663b] text-[#8f663b] hover:bg-[#8f663b] hover:text-[#ffefd1] bg-transparent transition-all duration-300"
                      >
                        {isSelected ? "Show Less" : "Learn More"}
                        <ArrowRight
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${isSelected ? "rotate-90" : ""}`}
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#164253] to-[#8f663b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Service?</h3>
            <p className="text-lg mb-6 opacity-90">
              We offer personalized services tailored to your specific needs. Contact us for a custom quote.
            </p>
            <Button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-[#ffefd1] text-[#164253] hover:bg-white hover:text-[#164253] px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
