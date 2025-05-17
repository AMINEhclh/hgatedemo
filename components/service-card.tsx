"use client"

import { Briefcase, LineChart, Target } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Briefcase" | "LineChart" | "Target"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Briefcase":
        return <Briefcase className="h-10 w-10 text-green-600" />
      case "LineChart":
        return <LineChart className="h-10 w-10 text-green-600" />
      case "Target":
        return <Target className="h-10 w-10 text-green-600" />
      default:
        return <Briefcase className="h-10 w-10 text-green-600" />
    }
  }

  return (
    <div className="glass-card rounded-xl p-6 group hover:translate-y-[-5px] transition-all duration-300">
      <div className="mb-4 relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 
        blur-lg group-hover:opacity-30 transition-opacity duration-300"
        ></div>
        <IconComponent />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
