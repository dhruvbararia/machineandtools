// src/components/sections/Hero.tsx - Theme-Aware Version
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center text-white"
      style={{
        background: "var(--color-hero-bg-gradient)",
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div
              className={`space-y-8 text-center lg:text-left ${
                isVisible ? "animate-fadeIn" : "opacity-0"
              }`}
            >
              {/* Company Badge */}
              <div
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <Award className="w-4 h-4 mr-2" />
                <span>Since 2013 • Trusted Worldwide</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Leading Chain Making
                  <span
                    className="block mt-2"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    Machine Manufacturer
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  style={{
                    color: "var(--color-text-inverse)",
                    opacity: 0.9,
                  }}
                >
                  Providing high-quality chain making machines and wire drawing
                  equipment to customers worldwide. Our advanced technology
                  ensures superior performance, reliability, and precision in
                  every machine.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
                  style={{
                    backgroundColor: "var(--color-secondary-400)",
                    color: "var(--color-primary-900)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-300)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-400)";
                  }}
                >
                  <span>Explore Products</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg border-2"
                  style={{
                    borderColor: "var(--color-text-inverse)",
                    color: "var(--color-text-inverse)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-text-inverse)";
                    e.currentTarget.style.color = "var(--color-primary-600)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--color-text-inverse)";
                  }}
                >
                  Get Free Quote
                </Link>
              </div>

              {/* Stats Section */}
              <div
                className="grid grid-cols-3 gap-6 pt-8"
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    500+
                  </div>
                  <div
                    className="text-sm sm:text-base"
                    style={{
                      color: "var(--color-text-inverse)",
                      opacity: 0.8,
                    }}
                  >
                    Happy Customers
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-sm sm:text-base"
                    style={{
                      color: "var(--color-text-inverse)",
                      opacity: 0.8,
                    }}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-sm sm:text-base"
                    style={{
                      color: "var(--color-text-inverse)",
                      opacity: 0.8,
                    }}
                  >
                    Product Models
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div
              className={`text-center lg:text-left ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
            >
              {/* Main Hero Image */}
              <div className="relative max-w-lg mx-auto lg:max-w-none mb-8">
                <div
                  className="absolute inset-0 opacity-20 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary-600), transparent)",
                  }}
                ></div>

                <Image
                  src="https://via.placeholder.com/600x400/1E40AF/FFFFFF?text=Chain+Making+Machine"
                  alt="Modern Chain Making Machine - High Quality Manufacturing Equipment"
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Machine Stats Card */}
              <div
                className="p-6 rounded-lg shadow-xl max-w-sm mx-auto lg:mx-0"
                style={{
                  backgroundColor: "var(--color-secondary-400)",
                  color: "var(--color-primary-900)",
                }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold mb-2">₹50L+</div>
                  <div className="text-sm font-medium">
                    Worth of Machines Sold
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    Across 15+ Countries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges - Separate section below main content */}
          <div
            className="mt-16 pt-8"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div
                className="flex items-center rounded-lg px-4 py-3 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "#22c55e" }}
                ></div>
                <span className="text-sm font-medium text-white">
                  ISO 9001:2015 Certified
                </span>
              </div>

              <div
                className="flex items-center rounded-lg px-4 py-3 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "var(--color-primary-300)" }}
                ></div>
                <span className="text-sm font-medium text-white">
                  24/7 Technical Support
                </span>
              </div>

              <div
                className="flex items-center rounded-lg px-4 py-3 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "var(--color-secondary-300)" }}
                ></div>
                <span className="text-sm font-medium text-white">
                  Global Shipping Available
                </span>
              </div>

              <div
                className="flex items-center rounded-lg px-4 py-3 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "#a855f7" }}
                ></div>
                <span className="text-sm font-medium text-white">
                  2 Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
