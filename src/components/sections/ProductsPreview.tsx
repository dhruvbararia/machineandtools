// src/components/sections/ProductsPreview.tsx - Fixed Component
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

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
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive collection of chain making and wire drawing machines
            designed for precision and reliability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {product.popular && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 text-sm font-semibold">
                  🏆 Most Popular
                </div>
              )}

              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Products <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
