"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface ContactFormProps {
  recipientEmail: string
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return

    setIsSubmitting(true)
    setError("")

    try {
      // In a real implementation, you would send this to your backend
      // For demo purposes, we'll simulate a successful submission
      console.log(`Sending email to ${recipientEmail}`)
      console.log(`From: ${name} (${email})`)
      console.log(`Message: ${message}`)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      setEmail("")
      setName("")
      setMessage("")

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error("Error sending message:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" netlify> 
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="username"
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-6 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm shadow-inner 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="userEmail"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-6 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm shadow-inner 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            rows={4}
            className="w-full px-6 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm shadow-inner 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
            required
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-4 rounded-xl 
          hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70
          flex items-center justify-center transform hover:translate-y-[-2px] active:translate-y-0"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <ChevronRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>

      {isSuccess && (
        <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-xl text-green-600 text-sm flex items-center animate-fade-in">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="bg-red-50/80 backdrop-blur-sm p-4 rounded-xl text-red-600 text-sm flex items-center animate-fade-in">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}

      <div className="text-xs text-gray-500 mt-2">
        Your message will be sent to: <span className="font-medium">{recipientEmail}</span>
      </div>
    </form>
  )
}
