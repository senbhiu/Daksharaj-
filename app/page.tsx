"use client"

import { useState, useEffect, useCallback } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeModal from "@/components/welcome-modal"
import ProductCategories from "@/components/product-categories"
import FeaturedProducts from "@/components/featured-products"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleCartClick = useCallback(() => {
    setShowCart(true)
  }, [])

  const handleCartClose = useCallback(() => {
    setShowCart(false)
  }, [])

  const handleModalClose = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleBookingClick = useCallback(() => {
    // Handle booking logic here
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Suppress ResizeObserver errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("ResizeObserver")) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffefd1" }}>
      <Header onCartClick={handleCartClick} />
      <HeroSection onBookingClick={handleBookingClick} />
      <ProductCategories />
      <FeaturedProducts />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <Footer />

      {showModal && <WelcomeModal onClose={handleModalClose} />}
      <CartSidebar isOpen={showCart} onClose={handleCartClose} />
    </div>
  )
}
