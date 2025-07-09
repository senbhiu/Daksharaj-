"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart, Eye, ArrowRight } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "Premium Men's Hair System",
      price: 15999,
      originalPrice: 19999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      description: "Natural-looking hair system with premium human hair",
      category: "Men's Hair Systems",
      inStock: true,
    },
    {
      id: 2,
      name: "Luxury Women's Hair Piece",
      price: 18999,
      originalPrice: 22999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      description: "Elegant hair piece for sophisticated women",
      category: "Women's Hair Systems",
      inStock: true,
    },
    {
      id: 3,
      name: "Natural Hair Extensions",
      price: 8999,
      originalPrice: 11999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      description: "Add length and volume with natural extensions",
      category: "Hair Extensions",
      inStock: true,
    },
    {
      id: 4,
      name: "Hair Care Essentials Kit",
      price: 2999,
      originalPrice: 3999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 203,
      badge: "Value Pack",
      description: "Complete care kit for maintaining your hair system",
      category: "Hair Care",
      inStock: true,
    },
    {
      id: 5,
      name: "Celebrity Style Wig",
      price: 32999,
      originalPrice: 39999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 45,
      badge: "Exclusive",
      description: "High-end celebrity-inspired hair system",
      category: "Premium Collection",
      inStock: true,
    },
    {
      id: 6,
      name: "Professional Styling Tools",
      price: 4999,
      originalPrice: 6999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 178,
      badge: "Professional",
      description: "Complete set of professional styling tools",
      category: "Accessories",
      inStock: true,
    },
  ]

  const toggleWishlist = useCallback((productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }, [])

  const handleAddToCart = useCallback(
    (product: any) => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    },
    [addToCart],
  )

  const handleQuickView = useCallback((productId: number) => {
    // Implement quick view modal
    console.log(`Quick view product ${productId}`)
  }, [])

  const handleViewAllProducts = useCallback(() => {
    // Navigate to products page
    console.log("Navigate to all products")
  }, [])

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-[#164253] text-[#ffefd1]"
      case "Premium":
        return "bg-[#8f663b] text-[#ffefd1]"
      case "Popular":
        return "bg-green-600 text-white"
      case "Value Pack":
        return "bg-blue-600 text-white"
      case "Exclusive":
        return "bg-purple-600 text-white"
      case "Professional":
        return "bg-orange-600 text-white"
      default:
        return "bg-[#8f663b] text-[#ffefd1]"
    }
  }

  return (
    <section id="featured-products" className="py-20" style={{ backgroundColor: "#ffefd1" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            className="text-[#ffefd1] px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #164253 0%, #8f663b 100%)" }}
          >
            Featured Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#164253] mb-6">
            Our <span className="text-[#8f663b]">Best Sellers</span>
          </h2>
          <p className="text-xl text-[#8f663b] max-w-3xl mx-auto leading-relaxed">
            Discover our most popular hair systems and products, loved by thousands of satisfied customers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-[#8f663b] bg-white overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge */}
                  <Badge
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold ${getBadgeColor(product.badge)}`}
                  >
                    {product.badge}
                  </Badge>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}

                  {/* Quick Actions Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleWishlist(product.id)
                        }}
                        className={`w-10 h-10 rounded-full transition-all duration-300 ${
                          wishlist.includes(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/90 text-[#164253] hover:bg-red-500 hover:text-white"
                        }`}
                        size="sm"
                      >
                        <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-current" : ""}`} />
                      </Button>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleQuickView(product.id)
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 text-[#164253] hover:bg-white transition-all duration-300"
                        size="sm"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(product)
                        }}
                        className="w-full bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] shadow-lg transform hover:scale-105 transition-all duration-300"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Category */}
                  <p className="text-xs text-[#8f663b] font-medium mb-2">{product.category}</p>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-[#164253] mb-2 group-hover:text-[#8f663b] transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#8f663b] mb-3 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#8f663b] ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#164253]">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] transition-all duration-300 transform hover:scale-105"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 w-4 h-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
