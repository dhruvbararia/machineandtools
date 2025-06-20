// src/components/sections/MobileOptimizedProducts.tsx
("use client");

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import ResponsiveContainer from "../ui/ResponsiveContainer";
import ResponsiveGrid from "../ui/ResponsiveGrid";
import MobileStack from "../ui/MobileStack";

const products = [
  {
    id: 1,
    name: "Gold Chain Making Machine",
    image:
      "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gold+Chain+Machine",
    description:
      "High-precision automatic gold chain manufacturing machine with advanced technology.",
    features: ["Automatic operation", "High precision", "Durable construction"],
    category: "Chain Making",
    popular: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Silver Chain Making Machine",
    image:
      "https://via.placeholder.com/400x300/2563EB/FFFFFF?text=Silver+Chain+Machine",
    description:
      "Professional silver chain making equipment for various chain types.",
    features: ["Multiple chain types", "Energy efficient", "Compact design"],
    category: "Chain Making",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Wire Drawing Machine",
    image:
      "https://via.placeholder.com/400x300/1D4ED8/FFFFFF?text=Wire+Drawing+Machine",
    description:
      "Industrial wire drawing equipment for preparing chain making materials.",
    features: ["Various wire sizes", "Smooth operation", "High durability"],
    category: "Wire Processing",
    rating: 4.7,
  },
];

export default function MobileOptimizedProducts() {
  return (
    <section className="section-padding">
      <ResponsiveContainer>
        <MobileStack spacing="lg">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Comprehensive collection of chain making and wire drawing machines
              designed for precision and reliability
            </p>
          </div>

          {/* Products Grid */}
          <ResponsiveGrid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
            {products.map((product) => (
              <div
                key={product.id}
                className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 text-sm font-semibold">
                    🏆 Most Popular
                  </div>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </ResponsiveGrid>

          {/* View All CTA */}
          <div className="text-center pt-8">
            <Link
              href="/products"
              className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </MobileStack>
      </ResponsiveContainer>
    </section>
  );
}
