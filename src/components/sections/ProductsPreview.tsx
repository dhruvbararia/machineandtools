// src/components/sections/ProductsPreview.tsx - Fixed Component
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Gold Chain Making Machine",
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    description:
      "High-precision automatic gold chain manufacturing machine with advanced technology.",
    features: ["Automatic operation", "High precision", "Durable construction"],
    category: "Chain Making",
    popular: true,
  },
  {
    id: 2,
    name: "Silver Chain Making Machine",
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    description:
      "Professional silver chain making equipment for various chain types with advanced technology.",
    features: ["Multiple chain types", "Energy efficient", "Compact design"],
    category: "Chain Making",
  },
  {
    id: 3,
    name: "Wire Drawing Machine",
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    description:
      "Industrial wire drawing equipment for preparing chain making materials with advanced technology.",
    features: ["Various wire sizes", "Smooth operation", "High durability"],
    category: "Wire Processing",
  },
];

export default function ProductsPreview() {
  return (
    <section
      className="py-16 lg:py-24 px-[4rem]"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Our Product Range
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Comprehensive collection of chain making and wire drawing machines
            designed for precision and reliability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-lg)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              {true && (
                <div
                  className="text-center py-2 text-sm font-semibold"
                  style={{
                    background: "var(--color-hero-bg-gradient)",
                    color: product.popular
                      ? "var(--color-text-inverse)"
                      : "transparent",
                  }}
                >
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
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "var(--color-primary-600)",
                    color: "var(--color-text-inverse)",
                    borderRadius: "var(--radius-2xl)",
                  }}
                >
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle
                        className="w-4 h-4 mr-2 flex-shrink-0"
                        style={{ color: "var(--color-success-500)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  style={{
                    background: "var(--color-hero-bg-gradient)",
                    color: "var(--color-text-inverse)",
                    textDecoration: "none",
                    borderRadius: "var(--radius-lg)",
                  }}
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
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            style={{
              backgroundColor: "var(--color-primary-600)",
              color: "var(--color-text-inverse)",
              textDecoration: "none",
              borderRadius: "var(--radius-lg)",
            }}
          >
            View All Products <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
