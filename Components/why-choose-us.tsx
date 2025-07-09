"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Headphones, Truck, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState<number>(1)

  const features = [
    {
      id: 1,
      title: "Premium Quality Guarantee",
      description:
        "We use only the finest human hair and materials, ensuring natural look and long-lasting durability.",
      icon: Shield,
      color: "#164253",
      stats: "100% Human Hair",
      details: [
        "Ethically sourced premium human hair",
        "Rigorous quality control process",
        "Natural texture and color matching",
        "Long-lasting durability guarantee",
      ],
    },
    {
      id: 2,
      title: "15+ Years of Excellence",
      description: "Over a decade of experience in hair systems and styling, serving thousands of satisfied customers.",
      icon: Award,
      color: "#8f663b",
      stats: "15+ Years Experience",
      details: [
        "Established industry expertise",
        "Continuous innovation and improvement",
        "Proven track record of success",
        "Industry-leading techniques",
      ],
    },
    {
      id: 3,
      title: "10,000+ Happy Customers",
      description: "Join our community of satisfied customers who have transformed their confidence with our services.",
      icon: Users,
      color: "#164253",
      stats: "10,000+ Customers",
      details: [
        "Diverse customer base across India",
        "High customer satisfaction rate",
        "Repeat customer loyalty",
        "Word-of-mouth recommendations",
      ],
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to help you with any questions or concerns.",
      icon: Headphones,
      color: "#8f663b",
      stats: "24/7 Support",
      details: [
        "Round-the-clock customer service",
        "Expert technical assistance",
        "Quick response times",
        "Multiple communication channels",
      ],
    },
    {
      id: 5,
      title: "Free Pan-India Delivery",
      description: "Enjoy complimentary delivery across India with secure packaging and tracking.",
      icon: Truck,
      color: "#164253",
      stats: "Free Delivery",
      details: [
        "No delivery charges anywhere in India",
        "Secure and discreet packaging",
        "Real-time order tracking",
        "Express delivery options available",
      ],
    },
    {
      id: 6,
      title: "4.9/5 Customer Rating",
      description: "Consistently high ratings from our customers reflect our commitment to excellence.",
      icon: Star,
      color: "#8f663b",
      stats: "4.9★ Rating",
      details: [
        "Consistently high customer ratings",
        "Positive reviews and testimonials",
        "Quality service recognition",
        "Customer satisfaction guarantee",
      ],
    },
  ]

  const handleFeatureClick = useCallback((featureId: number) => {
    setActiveFeature(featureId)
  }, [])

  const handleGetStarted = useCallback(() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#ffefd1" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            className="text-[#ffefd1] px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
          >
            Why Choose DakshRaj
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#164253] mb-6">
            Why We're the <span className="text-[#8f663b]">Best Choice</span>
          </h2>
          <p className="text-xl text-[#8f663b] max-w-3xl mx-auto leading-relaxed">
            Discover what makes DakshRaj the preferred choice for thousands of customers seeking premium hair systems
            and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const IconComponent = feature.icon
            const isActive = activeFeature === feature.id

            return (
              <Card
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
                  isActive ? "border-[#8f663b] shadow-xl scale-105" : "border-transparent hover:border-[#8f663b]"
                } bg-white overflow-hidden`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardContent className="p-6">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <Badge
                      className="text-[#ffefd1] px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.stats}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#164253] mb-3 group-hover:text-[#8f663b] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8f663b] text-sm mb-4 leading-relaxed">{feature.description}</p>

                  {/* Expandable Details */}
                  {isActive && (
                    <div className="mt-4 p-4 bg-[#ffefd1] rounded-lg border-l-4" style={{ borderColor: feature.color }}>
                      <h4 className="font-semibold text-[#164253] mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, index) => (
                          <li key={index} className="text-sm text-[#8f663b] flex items-start">
                            <CheckCircle
                              className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                              style={{ color: feature.color }}
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Click indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-[#8f663b] opacity-70">
                      {isActive ? "Click to collapse" : "Click to learn more"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#164253] to-[#8f663b] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Look?</h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have chosen DakshRaj for their hair transformation journey.
              Experience the difference of premium quality and exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGetStarted}
                className="bg-[#ffefd1] text-[#164253] hover:bg-white hover:text-[#164253] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => {
                  const servicesSection = document.getElementById("services")
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                variant="outline"
                className="border-2 border-[#ffefd1] text-[#ffefd1] hover:bg-[#ffefd1] hover:text-[#164253] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                View Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold">10,000+</p>
                  <p className="text-sm opacity-80">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9★</p>
                  <p className="text-sm opacity-80">Customer Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm opacity-80">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
