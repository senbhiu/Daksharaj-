import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { BookingProvider } from "@/context/booking-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DakshRaj Hair Systems - Premium Hair Solutions",
  description:
    "Transform your confidence with premium hair systems and professional services. 15+ years of excellence, 10,000+ happy customers.",
  keywords: "hair systems, hair replacement, hair pieces, hair extensions, hair care, premium hair solutions",
  authors: [{ name: "DakshRaj Hair Systems" }],
  openGraph: {
    title: "DakshRaj Hair Systems - Premium Hair Solutions",
    description: "Transform your confidence with premium hair systems and professional services.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <BookingProvider>{children}</BookingProvider>
        </CartProvider>
      </body>
    </html>
  )
}
