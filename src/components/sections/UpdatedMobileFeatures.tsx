// src/components/sections/UpdatedMobileFeatures.tsx - Using correct imports
'use client'

import { Award, Wrench, Users, Shield } from 'lucide-react'
import ResponsiveContainer from '../ui/ResponsiveContainer'
import ResponsiveGrid from '../ui/ResponsiveGrid'
import MobileStack from '../ui/MobileStack'

const features = [
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Premium Quality',
    description: 'Superior materials and precision engineering for lasting performance',
    stat: '99.5% Quality Rate'
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: 'Advanced Technology',
    description: 'State-of-the-art machinery with cutting-edge automation features',
    stat: 'Latest Tech Stack'
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Expert Support',
    description: 'Comprehensive training and ongoing technical assistance',
    stat: '24/7 Support'
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Reliable Service',
    description: 'Trusted by customers worldwide with proven track record',
    stat: '10+ Years Trusted'
  }
]

export default function UpdatedMobileFeatures() {
  return (
    <section className="section-padding bg-gray-50">
      <ResponsiveContainer>
        <MobileStack spacing="lg">
          
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Modern Chain Machines?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We combine advanced technology with superior craftsmanship to deliver 
              the finest chain making equipment in the industry.
            </p>
          </div>
          
          {/* Features Grid */}
          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, desktop: 4 }}
            gap="lg"
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {feature.stat}
                </div>
              </div>
            ))}
          </ResponsiveGrid>
          
        </MobileStack>
      </ResponsiveContainer>
    </section>
  )
}