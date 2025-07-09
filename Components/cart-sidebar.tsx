"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart()

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Proceed to checkout")
    onClose()
  }

  const handleContinueShopping = () => {
    onClose()
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#ffefd1] shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#164253] to-[#8f663b] text-[#ffefd1] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              {getTotalItems() > 0 && (
                <span className="bg-[#ffefd1] text-[#164253] px-2 py-1 rounded-full text-sm font-bold">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <Button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 text-[#ffefd1] w-10 h-10 rounded-full"
              size="sm"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-[#8f663b] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-[#164253] mb-2">Your cart is empty</h3>
                <p className="text-[#8f663b] mb-6">Add some products to get started!</p>
                <Button onClick={handleContinueShopping} className="bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1]">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border-2 border-[#8f663b]/20 hover:border-[#8f663b] transition-colors duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg border-2 border-[#8f663b]/20"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-[#164253] text-sm mb-1">{item.name}</h4>
                          <p className="text-[#8f663b] text-sm font-semibold">₹{item.price.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">
                            Total: ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="bg-[#8f663b] hover:bg-[#164253] text-[#ffefd1] w-8 h-8 rounded-full"
                              size="sm"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-[#164253] font-bold w-8 text-center">{item.quantity}</span>
                            <Button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="bg-[#8f663b] hover:bg-[#164253] text-[#ffefd1] w-8 h-8 rounded-full"
                              size="sm"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full"
                            size="sm"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#8f663b]/20 p-6 bg-white">
              <div className="space-y-4">
                {/* Order Summary */}
                <div className="bg-[#ffefd1] p-4 rounded-lg border-2 border-[#8f663b]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#164253] font-medium">Subtotal:</span>
                    <span className="text-[#164253] font-bold">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#8f663b] text-sm">Delivery:</span>
                    <span className="text-green-600 text-sm font-semibold">FREE</span>
                  </div>
                  <div className="border-t border-[#8f663b]/20 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#164253] font-bold text-lg">Total:</span>
                      <span className="text-[#164253] font-bold text-lg">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-[#164253] hover:bg-[#8f663b] text-[#ffefd1] py-3 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    onClick={handleContinueShopping}
                    variant="outline"
                    className="w-full border-2 border-[#8f663b] text-[#8f663b] hover:bg-[#8f663b] hover:text-[#ffefd1] bg-transparent py-3 rounded-xl transition-all duration-300"
                  >
                    Continue Shopping
                  </Button>

                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent py-2 rounded-xl transition-all duration-300"
                  >
                    <Trash2 className="mr-2 w-4 h-4" />
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
