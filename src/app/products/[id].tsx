"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  CheckCircle,
  Truck,
  Shield,
  Award,
  Phone,
  Mail,
  Download,
  Share2,
  Heart,
  ShoppingCart,
  Zap,
  Settings,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  Wrench,
  BarChart3,
} from "lucide-react";
import { useState, useEffect } from "react";

// This would typically come from your API or database
const getProductData = (id) => {
  const products = {
    "automatic-chain-making-machine": {
      id: "automatic-chain-making-machine",
      name: "Automatic Chain Making Machine ACM-2000",
      category: "Chain Making Machines",
      price: "₹12,50,000",
      originalPrice: "₹15,00,000",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      ],
      description:
        "The ACM-2000 is our flagship automatic chain making machine, designed for high-volume production with unmatched precision and reliability. This state-of-the-art machine incorporates advanced automation technology to deliver consistent quality chains while minimizing manual intervention.",
      features: [
        "Fully automatic feeding system with precision control",
        "Advanced digital control panel with touchscreen interface",
        "High-speed production capability up to 80 chains per minute",
        "Integrated quality monitoring and control system",
        "Automatic chain length cutting and counting",
        "Emergency stop system for operator safety",
        "Low maintenance design with easy access points",
        "Energy-efficient operation with power optimization",
      ],
      specifications: {
        "Production Capacity": "50-80 chains/min",
        "Chain Size Range": "4mm - 16mm diameter",
        "Chain Length": "Customizable (50mm - 2000mm)",
        "Power Consumption": "15 KW (3 Phase)",
        "Air Pressure": "6-8 bar",
        Dimensions: "2500 x 1800 x 1600 mm",
        Weight: "2500 kg",
        "Control System": "PLC with HMI",
        "Material Compatibility": "Stainless Steel, Carbon Steel, Brass",
        Accuracy: "±0.1mm",
        "Operating Temperature": "10°C to 45°C",
        Certification: "CE, ISO 9001:2015",
      },
      technicalDetails: {
        "Motor Type": "Servo Motor with Variable Speed Drive",
        Transmission: "Precision Gear Box with Belt Drive",
        "Cutting System": "Pneumatic Cutting with Hardened Blades",
        "Feeding Mechanism": "Automatic Wire Feeding with Tension Control",
        "Safety Features": "Emergency Stop, Safety Guards, Light Curtains",
        Lubrication: "Automatic Centralized Lubrication System",
      },
      benefits: [
        "Increases production efficiency by 300% compared to manual methods",
        "Reduces labor costs and minimizes human error",
        "Consistent quality output with minimal variation",
        "Quick setup and changeover between different chain sizes",
        "Energy-efficient operation reduces operational costs",
        "Comprehensive safety systems ensure operator protection",
      ],
      applications: [
        "Jewelry Manufacturing",
        "Industrial Chain Production",
        "Automotive Components",
        "Marine Hardware",
        "Construction Hardware",
        "Decorative Chains",
      ],
      warranty: "2 years comprehensive warranty with 24/7 support",
      deliveryTime: "4-6 weeks",
      installation: "Free installation and training included",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      videoUrl: "https://example.com/product-demo-video",
      brochureUrl: "/downloads/acm-2000-brochure.pdf",
      relatedProducts: [
        "semi-automatic-chain-machine",
        "heavy-duty-chain-machine",
        "precision-chain-machine",
      ],
    },
    // Add more products as needed
  };

  return products[id] || null;
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Industries",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Excellent machine quality and outstanding after-sales service. Production efficiency increased by 250%.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Manufacturing",
    location: "Delhi, NCR",
    rating: 5,
    comment:
      "Very reliable machine with consistent output quality. The automatic features save a lot of time and labor.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Amit Patel",
    company: "Patel Chains Ltd",
    location: "Ahmedabad, Gujarat",
    rating: 4,
    comment:
      "Good investment for our business. The machine is user-friendly and maintenance is minimal.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
];

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [quantity, setQuantity] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);

  // In a real app, you'd get the product ID from params
  const productId = params?.id || "automatic-chain-making-machine";
  const product = getProductData(productId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "specifications",
      label: "Specifications",
      icon: <Settings className="w-4 h-4" />,
    },
    { id: "features", label: "Features", icon: <Zap className="w-4 h-4" /> },
    { id: "reviews", label: "Reviews", icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Breadcrumb */}
      <section
        className="py-4"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Home
            </Link>
            <span style={{ color: "var(--color-text-secondary)" }}>/</span>
            <Link
              href="/products"
              className="hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Products
            </Link>
            <span style={{ color: "var(--color-text-secondary)" }}>/</span>
            <span style={{ color: "var(--color-text-primary)" }}>
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setShowImageModal(true)}
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                    <Play
                      className="w-6 h-6"
                      style={{ color: "var(--color-primary-900)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image: any, index: any) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    style={{
                      border:
                        selectedImage === index
                          ? "var(--color-secondary-400)"
                          : "transparent",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: "var(--color-secondary-400)",
                      color: "var(--color-primary-900)",
                    }}
                  >
                    {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">
                      Out of Stock
                    </span>
                  )}
                </div>

                <h1
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-current" : ""
                        }`}
                        style={{ color: "var(--color-secondary-400)" }}
                      />
                    ))}
                    <span
                      className="ml-2 font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {product.rating}
                    </span>
                  </div>
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    ({product.reviews} reviews)
                  </span>
                </div>

                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {product.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span
                      className="text-xl line-through"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Price includes installation and training
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: "var(--color-secondary-400)" }}
                      />
                      <span style={{ color: "var(--color-text-secondary)" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div
                className="grid grid-cols-3 gap-4 p-4 rounded-lg"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div className="text-center">
                  <Truck
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: "var(--color-secondary-400)" }}
                  />
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {product.deliveryTime}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Delivery
                  </div>
                </div>
                <div className="text-center">
                  <Shield
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: "var(--color-secondary-400)" }}
                  />
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    2 Years
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Warranty
                  </div>
                </div>
                <div className="text-center">
                  <Award
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: "var(--color-secondary-400)" }}
                  />
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Certified
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    ISO 9001
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Get Quote
                  </Link>
                  <button
                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                    style={{
                      borderColor: "var(--color-secondary-400)",
                      color: "var(--color-secondary-400)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <a
                    href={product.brochureUrl}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border text-center flex items-center justify-center gap-2"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <Download className="w-5 h-5" />
                    Download Brochure
                  </a>
                  <button
                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Tab Navigation */}
          <div
            className="border-b mb-8"
            style={{ borderColor: "var(--color-border)" }}
          >
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-current"
                      : "border-transparent"
                  }`}
                  style={{
                    color:
                      activeTab === tab.id
                        ? "var(--color-secondary-400)"
                        : "var(--color-text-secondary)",
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Product Overview
                  </h3>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg"
                        style={{ backgroundColor: "var(--color-surface)" }}
                      >
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--color-secondary-400)" }}
                        />
                        <span style={{ color: "var(--color-text-secondary)" }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Applications
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {product.applications.map((application, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg text-center font-medium"
                        style={{
                          backgroundColor: "var(--color-surface)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Technical Specifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <h4
                        className="font-semibold mb-4"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Basic Specifications
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(
                          ([key, value]: any) => (
                            <div key={key} className="flex justify-between">
                              <span
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {key}:
                              </span>
                              <span
                                className="font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <h4
                        className="font-semibold mb-4"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Technical Details
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(product.technicalDetails).map(
                          ([key, value]: any) => (
                            <div key={key} className="flex justify-between">
                              <span
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {key}:
                              </span>
                              <span
                                className="font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Detailed Features
                </h3>
                <div className="grid gap-4">
                  {product.features.map((feature: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <div
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{
                          backgroundColor: "var(--color-secondary-400)",
                        }}
                      >
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: "var(--color-primary-900)" }}
                        />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {feature.split(" ").slice(0, 3).join(" ")}
                        </h4>
                        <p style={{ color: "var(--color-text-secondary)" }}>
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                          style={{ color: "var(--color-secondary-400)" }}
                        />
                      ))}
                    </div>
                    <span
                      className="font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {product.rating} out of 5
                    </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <div className="flex items-start gap-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4
                                className="font-semibold"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                {testimonial.name}
                              </h4>
                              <p
                                className="text-sm"
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {testimonial.company}, {testimonial.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < testimonial.rating ? "fill-current" : ""
                                  }`}
                                  style={{
                                    color: "var(--color-secondary-400)",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          <p style={{ color: "var(--color-text-secondary)" }}>
                            "{testimonial.comment}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "var(--color-text-primary)" }}
          >
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.relatedProducts.slice(0, 3).map((relatedId, index) => (
              <div
                key={relatedId}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div
                  className="rounded-xl shadow-lg overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? "1565793298595-6a879b1d9492"
                          : index === 1
                          ? "1558618666-fcd25c85cd64"
                          : "1581091226825-a6a2a5aee158"
                      }?w=400&h=300&fit=crop`}
                      alt="Related Product"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {index === 0
                        ? "Semi-Automatic Chain Machine"
                        : index === 1
                        ? "Heavy Duty Chain Machine"
                        : "Precision Chain Machine"}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      High-quality manufacturing solution for industrial
                      applications.
                    </p>
                    <Link
                      href={`/products/${relatedId}`}
                      className="inline-flex items-center font-semibold transition-all duration-300 hover:scale-105"
                      style={{ color: "var(--color-secondary-400)" }}
                    >
                      View Product
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ background: "var(--color-hero-bg-gradient)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-inverse)",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--color-text-inverse)", opacity: 0.9 }}
          >
            Get in touch with our experts for a personalized quote and
            consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg shadow-xl"
              style={{
                backgroundColor: "var(--color-secondary-400)",
                color: "var(--color-primary-900)",
              }}
            >
              <Phone className="mr-2 w-5 h-5" />
              Request Quote
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg border-2 backdrop-blur-sm shadow-xl"
              style={{
                borderColor: "var(--color-text-inverse)",
                color: "var(--color-text-inverse)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (prev) =>
                      (prev - 1 + product.images.length) % product.images.length
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() =>
                  setSelectedImage((prev) => (prev + 1) % product.images.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image counter */}
            <div className="text-center text-white mt-4">
              {selectedImage + 1} / {product.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
