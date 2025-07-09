"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export interface Service {
  id: number
  name: string
  price: number
  duration: string
  description: string
}

interface Booking {
  id: string
  service: Service
  date: string
  time: string
  customerName: string
  customerPhone: string
  customerAddress: string
  totalPrice: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: Date
}

interface BookingContextType {
  bookings: Booking[]
  addBooking: (booking: Omit<Booking, "id" | "status" | "createdAt">) => void
  updateBookingStatus: (id: string, status: Booking["status"]) => void
  getBookingById: (id: string) => Booking | undefined
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([])

  const addBooking = useCallback((newBooking: Omit<Booking, "id" | "status" | "createdAt">) => {
    const booking: Booking = {
      ...newBooking,
      id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: "pending",
      createdAt: new Date(),
    }
    setBookings((prevBookings) => [...prevBookings, booking])
    return booking.id
  }, [])

  const updateBookingStatus = useCallback((id: string, status: Booking["status"]) => {
    setBookings((prevBookings) => prevBookings.map((booking) => (booking.id === id ? { ...booking, status } : booking)))
  }, [])

  const getBookingById = useCallback(
    (id: string) => {
      return bookings.find((booking) => booking.id === id)
    },
    [bookings],
  )

  const value = {
    bookings,
    addBooking,
    updateBookingStatus,
    getBookingById,
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider")
  }
  return context
}
