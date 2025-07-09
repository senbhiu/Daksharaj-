"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Crown, Sparkles, Heart } from "lucide-react"

export default function ProductCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const categories = [
    {
      id: 1,
      title: "Men's Hair Systems",
      description: "Premium quality hair systems designed specifically for men",
      image: "/placeholder.svg?height=300&width=400",
      icon: Users,
      products: "50+ Products",
      priceRange: "₹8,999 - ₹35,999",
      badge: "Popular",
      color: "#164253",
    },
    {
      id: 2,
      title: "Women's Hair Pieces",
      description: "Elegant and natural-looking hair pieces for women",
      image: "/placeholder.svg?height=300&width=400",
      icon: Crown,
      products: "40+ Products",
      priceRange: "₹12,999 - ₹45,999",
      badge: "Premium",
      color: "#8f663b",
    },
    {
      id: 3,
      title: "Hair Extensions",
      description: "Add length and volume with our premium extensions",
      image: "/placeholder.svg?height=300&width=400",
      icon: Sparkles,
      products: "30+ Products",
      priceRange: "₹3,999 - ₹18,999",
      badge: "Trending",
      color: "#164253",
    },
    {
      id: 4,
      title: "Hair Care Products",
      description: "Professional care products for maintaining your hair system",
      image: "/placeholder.svg?height=300&width=400",
      icon: Heart,
      products: "25+ Products",
      priceRange: "₹999 - ₹4,999",
      badge: "Essential",
      color: "#8f663b",
    },
  ]

  const handleCategoryClick = useCallback((categoryId: number) => {
    // Navigate to category page or filter products
    console.log(`Navigate to category ${categoryId}`)
    // You can implement navigation logic here
  }, [])

  const handleViewAllProducts = useCallback(() => {
    // Navigate to all products page
    const productsSection = document.getElementById("featured-products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            className="text-[#ffefd1] px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
          >
            Product Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#164253] mb-6">
            Explore Our <span className="text-[#8f663b]">Premium</span> Collections
          </h2>
          <p className="text-xl text-[#8f663b] max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of hair systems, extensions, and care products designed to meet every need
            and preference.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-[#8f663b] bg-white overflow-hidden"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        hoveredCategory === category.id ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ background: `linear-gradient(to bottom, transparent 0%, ${category.color}80 100%)` }}
                    />

                    {/* Badge */}
                    <Badge
                      className="absolute top-4 left-4 text-[#ffefd1] px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.badge}
                    </Badge>

                    {/* Icon */}
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: category.color }} />
                    </div>

                    {/* Hover Button */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredCategory === category.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Button
                        className="text-[#ffefd1] shadow-lg transform hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: category.color }}
                      >
                        View Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#164253] mb-2 group-hover:text-[#8f663b] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-[#8f663b] text-sm mb-4 line-clamp-2">{category.description}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#164253] font-semibold">{category.products}</span>
                      <span className="text-[#8f663b]">{category.priceRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            onClick={handleViewAllProducts}
            className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
