// src/components/sections/ContactCTA.tsx - Fixed Component
import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and personalized quote for your chain making machine requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/contact"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center text-lg"
          >
            Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <div className="flex items-center text-white">
            <Phone className="w-5 h-5 mr-2" />
            <span className="text-lg">Call: +91-XXXXXXXXXX</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">500+</div>
            <div className="text-blue-200">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">24/7</div>
            <div className="text-blue-200">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">100%</div>
            <div className="text-blue-200">Quality Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}