"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Search, Menu, X, ShoppingCart, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface HeaderProps {
  onCartClick: () => void
}

export default function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { getTotalItems } = useCart()
  const cartCount = getTotalItems()

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 50)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScrollThrottled, { passive: true })
    return () => window.removeEventListener("scroll", handleScrollThrottled)
  }, [handleScroll])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      closeMenu()
    },
    [closeMenu],
  )

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Search functionality")
  }, [])

  const handleUserClick = useCallback(() => {
    // Handle user login/profile
    console.log("User profile clicked")
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#164253] text-white py-2 px-4 text-center text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>✨ Premium Hair Systems & Professional Services ✨</span>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@dakshraj.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Solid #ffefd1 Background */}
      <header
        className="relative shadow-md sticky top-0 z-40 transition-all duration-300"
        style={{ backgroundColor: "#ffefd1" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border-3 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #8f663b 0%, #164253 100%)",
                  borderColor: "#164253",
                }}
              >
                <span className="text-[#ffefd1] font-bold text-2xl">D</span>
              </div>
              <div className="ml-4">
                <div className="text-3xl font-black tracking-wider" style={{ fontFamily: "serif" }}>
                  <span
                    style={{
                      color: "#8f663b",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                      fontWeight: "900",
                    }}
                  >
                    DAKSH
                  </span>
                  <span
                    style={{
                      color: "#164253",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                      fontWeight: "900",
                    }}
                  >
                    RAJ
                  </span>
                </div>
                <p className="text-xs text-[#8f663b] font-semibold tracking-wide">Hair Systems & Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("products")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("men")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                Men
              </button>
              <button
                onClick={() => scrollToSection("women")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                Women
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#164253] hover:text-[#8f663b] transition-colors font-semibold text-lg"
              >
                Contact
              </button>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products & services..."
                  className="pl-10 pr-4 py-2 border-2 border-[#164253] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8f663b] bg-white text-[#164253] placeholder-[#8f663b] w-64"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-[#8f663b]" />
                </button>
              </form>

              <Button
                variant="ghost"
                size="sm"
                className="relative text-[#164253] hover:text-[#8f663b] hover:bg-white transition-colors"
                onClick={onCartClick}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 text-[#ffefd1] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                    style={{ backgroundColor: "#164253" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-[#164253] hover:text-[#8f663b] hover:bg-white transition-colors"
                onClick={handleUserClick}
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-[#164253] hover:text-[#8f663b] hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-[#8f663b]" style={{ backgroundColor: "#ffefd1" }}>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("men")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  Men
                </button>
                <button
                  onClick={() => scrollToSection("women")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  Women
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#164253] hover:text-[#8f663b] transition-colors font-medium px-4 py-2 rounded hover:bg-white text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
