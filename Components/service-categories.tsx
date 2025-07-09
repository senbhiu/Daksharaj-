import { Button } from "@/components/ui/button"
import { Scissors, Sparkles, Heart, Home, Crown, Palette } from "lucide-react"

const services = [
  {
    title: "Hair Services",
    description: "Professional cuts, styling, coloring & treatments",
    icon: Scissors,
    image: "/placeholder.svg?height=300&width=300",
    price: "Starting ₹500",
    popular: true,
  },
  {
    title: "Beauty & Makeup",
    description: "Bridal makeup, party looks & skincare",
    icon: Sparkles,
    image: "/placeholder.svg?height=300&width=300",
    price: "Starting ₹800",
    popular: false,
  },
  {
    title: "Spa & Wellness",
    description: "Relaxing massage, aromatherapy & body treatments",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=300",
    price: "Starting ₹1200",
    popular: false,
  },
  {
    title: "Nail Art",
    description: "Manicure, pedicure & creative nail designs",
    icon: Palette,
    image: "/placeholder.svg?height=300&width=300",
    price: "Starting ₹300",
    popular: false,
  },
  {
    title: "Bridal Package",
    description: "Complete bridal makeover & pre-wedding services",
    icon: Crown,
    image: "/placeholder.svg?height=300&width=300",
    price: "Starting ₹5000",
    popular: true,
  },
  {
    title: "Home Service",
    description: "All services available at your doorstep",
    icon: Home,
    image: "/placeholder.svg?height=300&width=300",
    price: "No extra charges",
    popular: false,
  },
]

export default function ServiceCategories() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Categories</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional beauty and wellness services delivered to your home with the highest quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                {service.popular && (
                  <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2 text-center">Most Popular</div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-semibold">{service.price}</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
