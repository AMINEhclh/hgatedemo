"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="space-y-3" netlify>
        <p className="text-sm font-medium text-gray-700">Subscribe to our newsletter</p>
        <div className="flex relative">
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-6 py-4 rounded-full border-0 bg-white/70 backdrop-blur-sm shadow-inner 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full 
            hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 disabled:opacity-70
            transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Subscribe
                <ChevronRight className="ml-1 h-4 w-4 inline" />
              </>
            )}
          </button>
        </div>
        {isSuccess && (
          <div className="bg-green-50/80 backdrop-blur-sm p-3 rounded-md text-green-600 text-sm flex items-center animate-fade-in">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Thank you for subscribing!
          </div>
        )}
      </form>
    </div>
  )
}
