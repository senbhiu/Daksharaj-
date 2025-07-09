import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Salon Services?</h2>
              <p className="text-gray-600 text-lg">
                We bring professional salon experience to your home with certified beauticians and premium products.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified & experienced professionals",
                "Premium quality products & equipment",
                "Hygienic & sanitized tools",
                "Flexible timing & same-day booking",
                "100% satisfaction guarantee",
                "Affordable pricing with no hidden costs",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Professional salon services"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
