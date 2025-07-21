// src/components/sections/Hero.tsx - Full Screen Hero Slider
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    id: 1,
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    title: "Leading Chain Making",
    subtitle: "Machine Manufacturer",
    description:
      "Providing high-quality chain making machines and wire drawing equipment to customers worldwide. Our advanced technology ensures superior performance, reliability, and precision in every machine.",
    ctaPrimary: "Explore Products",
    ctaSecondary: "Get Free Quote",
  },
  {
    id: 2,
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    title: "Advanced Wire Drawing",
    subtitle: "Technology Solutions",
    description:
      "State-of-the-art wire drawing equipment designed for maximum output and consistent quality control. Experience unmatched precision in industrial manufacturing.",
    ctaPrimary: "View Equipment",
    ctaSecondary: "Request Demo",
  },
  {
    id: 3,
    image: "https://images.alphacoders.com/487/thumb-1920-487138.jpg",
    title: "Complete Manufacturing",
    subtitle: "Solutions Worldwide",
    description:
      "Comprehensive range of manufacturing equipment tailored to meet diverse industrial requirements globally. Trusted by 500+ customers across 15+ countries.",
    ctaPrimary: "Our Solutions",
    ctaSecondary: "Contact Us",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Image Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={`${slide.title} - Manufacturing Equipment`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />

            {/* Dark Overlay for better text readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)",
              }}
            />

            {/* Theme-based gradient overlay */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: "var(--color-hero-bg-gradient)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-20 h-full w-[80%] m-auto flex items-center text-white px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* Left Content - Main Text */}
            <div
              className={`space-y-5 text-center lg:text-left ${
                isVisible ? "animate-fadeIn" : "opacity-0"
              }`}
            >
              {/* Company Badge */}
              <div
                className={`inline-flex items-center rounded-full px-3 py-2 text-xs font-medium backdrop-blur-sm transition-all duration-700 ${
                  isTransitioning
                    ? "opacity-60 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "var(--color-text-inverse)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Award className="w-3 h-3 mr-2" />
                <span>Since 2013 • Trusted Worldwide</span>
              </div>

              {/* Dynamic Main Heading */}
              <div
                className={`transition-all duration-700 ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-8"
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                <h1
                  className="!text-xl !text-white font-bold leading-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {currentSlideData.title}
                  <span
                    className="block mt-1"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    {currentSlideData.subtitle}
                  </span>
                </h1>

                {/* Dynamic Description */}
                <p
                  className="!text-xs sm:text-base leading-relaxed max-w-2xl"
                  style={{
                    color: "var(--color-text-inverse)",
                    opacity: 0.9,
                  }}
                >
                  {currentSlideData.description}
                </p>
              </div>

              {/* Dynamic CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start transition-all duration-700 delay-200 ${
                  isTransitioning
                    ? "opacity-0 transform translate-y-8"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-xl"
                  style={{
                    backgroundColor: "var(--color-secondary-400)",
                    color: "var(--color-primary-900)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-300)";
                    e.currentTarget.style.transform =
                      "scale(1.05) translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-400)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span>{currentSlideData.ctaPrimary}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm border-2 backdrop-blur-sm shadow-xl"
                  style={{
                    borderColor: "var(--color-text-inverse)",
                    color: "var(--color-text-inverse)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-text-inverse)";
                    e.currentTarget.style.color = "var(--color-primary-600)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "var(--color-text-inverse)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {currentSlideData.ctaSecondary}
                </Link>
              </div>

              {/* Stats Section */}
              <div
                className={`grid grid-cols-3 gap-4 pt-6 transition-all duration-700 delay-300 ${
                  isTransitioning
                    ? "opacity-0 transform translate-y-8"
                    : "opacity-100 transform translate-y-0"
                }`}
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="text-center lg:text-left">
                  <div
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    500+
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{
                      color: "var(--color-text-inverse)",
                      opacity: 0.8,
                    }}
                  >
                    Happy Customers
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{
                      color: "var(--color-text-inverse)",
                      opacity: 0.8,
                    }}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-xs font-medium"
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

            {/* Right Content - Trust Badges & Additional Info */}
            <div
              className={`text-center lg:text-right space-y-5 ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
            >
              {/* Featured Stats Card */}
              <div
                className={`p-5 rounded-xl shadow-xl max-w-sm mx-auto lg:ml-auto backdrop-blur-sm transition-all duration-700 delay-400 ${
                  isTransitioning
                    ? "opacity-60 transform translate-y-8 scale-95"
                    : "opacity-100 transform translate-y-0 scale-100"
                }`}
                style={{
                  backgroundColor: "var(--color-secondary-400)",
                  color: "var(--color-primary-900)",
                }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold mb-1">₹50L+</div>
                  <div className="text-xs font-semibold mb-1">
                    Worth of Machines Sold
                  </div>
                  <div className="text-xs opacity-80">
                    Across 15+ Countries Worldwide
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto lg:ml-auto">
                <div
                  className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-1"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span className="text-xs font-medium text-white text-center">
                    ISO 9001:2015 Certified
                  </span>
                </div>

                <div
                  className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-1"
                    style={{ backgroundColor: "var(--color-primary-300)" }}
                  />
                  <span className="text-xs font-medium text-white text-center">
                    24/7 Technical Support
                  </span>
                </div>

                <div
                  className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-1"
                    style={{ backgroundColor: "var(--color-secondary-300)" }}
                  />
                  <span className="text-xs font-medium text-white text-center">
                    Global Shipping Available
                  </span>
                </div>

                <div
                  className="flex flex-col items-center p-2 rounded-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-1"
                    style={{ backgroundColor: "#a855f7" }}
                  />
                  <span className="text-xs font-medium text-white text-center">
                    2 Year Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            backdropFilter: "blur(10px)",
          }}
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            backdropFilter: "blur(10px)",
          }}
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 pointer-events-auto">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group p-1"
              disabled={isTransitioning}
            >
              <div
                className="w-10 h-1.5 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor:
                    index === currentSlide
                      ? "var(--color-secondary-400)"
                      : "rgba(255, 255, 255, 0.4)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 transition-all duration-6000 ease-linear"
          style={{
            backgroundColor: "var(--color-secondary-400)",
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-30 animate-bounce hidden lg:block">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm"
          style={{
            borderColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{
              backgroundColor: "var(--color-secondary-400)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
