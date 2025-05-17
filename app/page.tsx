"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Mail,
  Linkedin,
  ChevronRight,
  Briefcase,
  LineChart,
  Target,
  Shield,
  Zap,
  Globe,
  X,
  Users,
  TrendingUp,
  DollarSign,
  BarChart,
} from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import ContactForm from "@/components/contact-form"
import InvestmentChart from "@/components/investment-chart"
import CountUp from "@/components/count-up"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  // Track scroll position for header transparency and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)

      // Determine which section is currently in view
      const sectionIds = ["hero", "about", "stats", "services", "chart", "why-us", "contact"]
      const currentSection = sectionIds.find((id) => {
        const section = sectionsRef.current[id]
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      closeMobileMenu()
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-green-50 overflow-x-hidden">
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollPosition > 50 ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-300">
              HGATE LTD.
            </span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 ${
                activeSection === "about" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className={`transition-colors duration-300 ${
                activeSection === "stats" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              Stats
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-300 ${
                activeSection === "services" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("chart")}
              className={`transition-colors duration-300 ${
                activeSection === "chart" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className={`transition-colors duration-300 ${
                activeSection === "why-us" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-300 ${
                activeSection === "contact" ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"
              }`}
            >
              Contact
            </button>
          </nav>
          <button
            className="md:hidden text-gray-600 focus:outline-none z-50 w-10 h-10 flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-green-600" />
            ) : (
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PCWfdjb3a0GmF0eWPEp1MgaVj5NV8l.png"
                alt="Menu"
                className="h-6 w-6"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-10 p-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              Stats
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("chart")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              Performance
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl font-medium text-gray-800 hover:text-green-600 transition-colors transform hover:scale-105"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionsRef.current["hero"] = el)}
          className="min-h-[90vh] py-16 md:py-20 relative flex items-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-[20%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-green-300/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-emerald-300/20 rounded-full blur-3xl animate-float-medium"></div>
            <div className="absolute top-20 left-[25%] w-2 h-2 bg-green-400 rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-32 right-[35%] w-2 h-2 bg-emerald-400 rounded-full animate-ping-slow animation-delay-2000"></div>
            <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-green-300 rounded-full animate-ping-slow animation-delay-3000"></div>

            {/* Stock market pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
              <svg viewBox="0 0 1440 320" className="w-full h-full">
                <path
                  fill="currentColor"
                  fillOpacity="1"
                  d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 md:space-y-10 max-w-xl">
                <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-800 text-sm font-medium shadow-sm animate-fade-in-up">
                  Sustainable Investment Solutions
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-300">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                    Investment
                  </span>{" "}
                  and <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                    Business
                  </span>{" "}
                  Management
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-md animate-fade-in-up animation-delay-600">
                  Sustainable solutions for your business growth and investment needs with an eco-conscious approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-full 
                    hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center
                    transform hover:translate-y-[-2px] active:translate-y-0"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-green-200 
                    text-green-700 hover:bg-green-50 transition-all duration-300
                    transform hover:translate-y-[-2px] active:translate-y-0"
                  >
                    Learn More
                  </button>
                </div>
                <div className="animate-fade-in-up animation-delay-1200">
                  <NewsletterForm />
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-md aspect-square animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-xl transform transition-transform hover:rotate-1 hover:scale-[1.01] duration-700">
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-b from-green-500 to-emerald-600"></div>
                    <Image
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Investment Growth"
                      width={400}
                      height={400}
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 
                  rounded-full opacity-30 blur-xl animate-pulse-subtle"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center text-green-600 focus:outline-none group"
              aria-label="Scroll down"
            >
              <span className="text-sm font-medium mb-2 group-hover:text-green-700 transition-colors">Scroll Down</span>
              <div className="w-8 h-12 border-2 border-green-500 rounded-full flex justify-center p-1 group-hover:border-green-700 transition-colors">
                <div className="w-1.5 h-3 bg-green-500 rounded-full animate-scroll-down group-hover:bg-green-700 transition-colors"></div>
              </div>
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" ref={(el) => (sectionsRef.current["about"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-[15%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-green-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              About Us
            </h2>
            <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-10 rounded-3xl transform hover:scale-[1.02]">
              <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
                At HGATE LTD, we believe in sustainable growth and responsible investment. Our mission is to provide
                innovative business solutions that not only maximize returns but also minimize environmental impact.
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Founded on principles of integrity and forward-thinking, we help businesses and individuals navigate the
                complex world of investments with an eco-conscious approach that ensures long-term sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" ref={(el) => (sectionsRef.current["stats"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 right-[15%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-green-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              Our Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={2500} duration={2.5} />+
                </h3>
                <p className="text-gray-600 text-lg">Satisfied Clients</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={18} duration={2} suffix="%" />
                </h3>
                <p className="text-gray-600 text-lg">Average Annual Return</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  $<CountUp end={250} duration={2.5} />M
                </h3>
                <p className="text-gray-600 text-lg">Assets Under Management</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={12} duration={2} />+
                </h3>
                <p className="text-gray-600 text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={(el) => (sectionsRef.current["services"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-1/3 right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-emerald-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              <div className="group">
                <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 md:p-10 text-center hover:-translate-y-4 h-full">
                  <div className="mb-8 flex justify-center relative">
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl transform group-hover:scale-[1.2] transition-transform duration-700"></div>
                    <Briefcase className="h-16 w-16 text-green-600 relative z-10 transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    Wealth Management
                  </h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Comprehensive wealth management solutions tailored to your financial goals with sustainable
                    investment options.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 md:p-10 text-center hover:-translate-y-4 h-full">
                  <div className="mb-8 flex justify-center relative">
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl transform group-hover:scale-[1.2] transition-transform duration-700"></div>
                    <LineChart className="h-16 w-16 text-green-600 relative z-10 transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    Business Consulting
                  </h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Strategic business consulting to optimize operations, reduce waste, and improve overall efficiency.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 md:p-10 text-center hover:-translate-y-4 h-full">
                  <div className="mb-8 flex justify-center relative">
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl transform group-hover:scale-[1.2] transition-transform duration-700"></div>
                    <Target className="h-16 w-16 text-green-600 relative z-10 transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    Strategy Planning
                  </h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Long-term strategy planning that balances growth objectives with environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section id="chart" ref={(el) => (sectionsRef.current["chart"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-[20%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] bg-emerald-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              Investment Performance
            </h2>

            <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-6 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Growth vs. Market Average</h3>
                <p className="text-gray-600">
                  See how our investment strategies have consistently outperformed the market average over the past 5
                  years.
                </p>
              </div>

              <div className="h-[400px] w-full">
                <InvestmentChart />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50/50 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                  <h4 className="text-lg font-medium text-green-800 mb-2">Total Investment</h4>
                  <p className="text-3xl font-bold text-green-700">$250M</p>
                  <p className="text-sm text-green-600 mt-1">Across all portfolios</p>
                </div>

                <div className="bg-green-50/50 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                  <h4 className="text-lg font-medium text-green-800 mb-2">Average Return</h4>
                  <p className="text-3xl font-bold text-green-700">18.2%</p>
                  <p className="text-sm text-green-600 mt-1">Annual compound growth</p>
                </div>

                <div className="bg-green-50/50 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                  <h4 className="text-lg font-medium text-green-800 mb-2">Outperformance</h4>
                  <p className="text-3xl font-bold text-green-700">+7.5%</p>
                  <p className="text-sm text-green-600 mt-1">Above market average</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" ref={(el) => (sectionsRef.current["why-us"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 left-[20%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] bg-green-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Trust & Reliability</h3>
                <p className="text-gray-600 text-lg">
                  Built on a foundation of transparency and integrity, earning our clients' trust with every
                  interaction.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600 text-lg">
                  Constantly evolving our approaches and solutions to stay ahead in a rapidly changing business
                  landscape.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2 transform">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Eco-Conscious</h3>
                <p className="text-gray-600 text-lg">
                  Committed to environmentally responsible practices in all our operations and investment
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={(el) => (sectionsRef.current["contact"] = el)} className="py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-1/4 right-[15%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] bg-emerald-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-green-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 text-center">
              Contact Us
            </h2>
            <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-10 rounded-3xl">
              <ContactForm recipientEmail="med18aminehouidi@gmail.com" />

              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="mailto:contact@hgate.tn"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm 
                  shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 text-green-600
                  transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm 
                  shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 text-green-600
                  transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-10 mt-auto relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-green-200">© {new Date().getFullYear()} hgate.tn - All rights reserved</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-green-200 hover:text-white transition-colors">
                Legal Notice
              </a>
              <a href="#" className="text-sm text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-green-200 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
