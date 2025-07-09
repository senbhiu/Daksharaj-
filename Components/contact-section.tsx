import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">Ready to book your appointment? Contact us now!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Phone</div>
                  <div className="text-gray-600">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">info@salon.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Service Areas</div>
                  <div className="text-gray-600">Mumbai, Delhi, Bangalore & more</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Working Hours</div>
                  <div className="text-gray-600">24/7 Available</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Booking</h3>
              <p className="text-gray-600 mb-4">
                Call us now for instant booking and get 20% off on your first service!
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Call Now: +91 98765 43210</Button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>Select a service</option>
                  <option>Hair Services</option>
                  <option>Beauty & Makeup</option>
                  <option>Spa & Wellness</option>
                  <option>Nail Art</option>
                  <option>Bridal Package</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-3">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
