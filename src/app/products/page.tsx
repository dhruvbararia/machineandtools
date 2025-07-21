"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Factory,
  Wrench,
  Shield,
  Clock,
  Star,
  Eye,
  Settings,
  Zap,
  Award,
  CheckCircle,
  Filter,
  Search,
  Grid,
  List,
} from "lucide-react";
import { useState, useEffect } from "react";

const productCategories = [
  {
    id: "all",
    name: "All Products",
    count: 12,
  },
  {
    id: "chain-making",
    name: "Chain Making Machines",
    count: 6,
  },
  {
    id: "wire-drawing",
    name: "Wire Drawing Machines",
    count: 4,
  },
  {
    id: "accessories",
    name: "Accessories & Parts",
    count: 2,
  },
];

const products = [
  {
    id: "automatic-chain-making-machine",
    name: "Automatic Chain Making Machine ACM-2000",
    category: "chain-making",
    price: "₹12,50,000",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    description:
      "High-speed automatic chain making machine with advanced control system for precision manufacturing.",
    features: [
      "Automatic feeding system",
      "Digital control panel",
      "High-speed production",
      "Quality monitoring",
    ],
    specifications: {
      "Production Capacity": "50-80 chains/min",
      "Chain Size Range": "4mm - 16mm",
      "Power Consumption": "15 KW",
      Dimensions: "2500 x 1800 x 1600 mm",
    },
    rating: 4.8,
    reviews: 24,
    inStock: true,
    featured: true,
  },
  {
    id: "semi-automatic-chain-machine",
    name: "Semi-Automatic Chain Machine SCM-1500",
    category: "chain-making",
    price: "₹8,75,000",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    description:
      "Versatile semi-automatic chain making machine ideal for medium-scale production requirements.",
    features: [
      "Manual feeding",
      "Semi-automatic operation",
      "Cost-effective",
      "Easy maintenance",
    ],
    specifications: {
      "Production Capacity": "30-50 chains/min",
      "Chain Size Range": "3mm - 12mm",
      "Power Consumption": "10 KW",
      Dimensions: "2200 x 1600 x 1400 mm",
    },
    rating: 4.6,
    reviews: 18,
    inStock: true,
    featured: false,
  },
  {
    id: "heavy-duty-chain-machine",
    name: "Heavy Duty Chain Machine HDM-3000",
    category: "chain-making",
    price: "₹18,50,000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description:
      "Industrial-grade heavy duty chain making machine for large-scale manufacturing operations.",
    features: [
      "Heavy-duty construction",
      "Large chain capacity",
      "Industrial automation",
      "Remote monitoring",
    ],
    specifications: {
      "Production Capacity": "80-120 chains/min",
      "Chain Size Range": "8mm - 25mm",
      "Power Consumption": "25 KW",
      Dimensions: "3000 x 2200 x 1800 mm",
    },
    rating: 4.9,
    reviews: 31,
    inStock: true,
    featured: true,
  },
  {
    id: "precision-chain-machine",
    name: "Precision Chain Machine PCM-1200",
    category: "chain-making",
    price: "₹9,25,000",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    description:
      "High-precision chain making machine designed for specialty and decorative chain production.",
    features: [
      "Precision manufacturing",
      "Specialty chains",
      "Fine tolerances",
      "Quality assurance",
    ],
    specifications: {
      "Production Capacity": "25-40 chains/min",
      "Chain Size Range": "2mm - 8mm",
      "Power Consumption": "8 KW",
      Dimensions: "2000 x 1400 x 1300 mm",
    },
    rating: 4.7,
    reviews: 15,
    inStock: true,
    featured: false,
  },
  {
    id: "multi-wire-drawing-machine",
    name: "Multi Wire Drawing Machine MWD-800",
    category: "wire-drawing",
    price: "₹15,75,000",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    description:
      "Advanced multi-wire drawing machine for simultaneous processing of multiple wires.",
    features: [
      "Multi-wire processing",
      "Variable speed control",
      "Automatic tension control",
      "Safety systems",
    ],
    specifications: {
      "Wire Capacity": "8 wires simultaneously",
      "Wire Diameter": "0.5mm - 6mm",
      "Drawing Speed": "800 m/min",
      "Power Consumption": "20 KW",
    },
    rating: 4.8,
    reviews: 22,
    inStock: true,
    featured: true,
  },
  {
    id: "single-wire-drawing-machine",
    name: "Single Wire Drawing Machine SWD-600",
    category: "wire-drawing",
    price: "₹7,50,000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description:
      "Efficient single wire drawing machine for precise wire diameter reduction and finishing.",
    features: [
      "Single wire processing",
      "Precision control",
      "Compact design",
      "Energy efficient",
    ],
    specifications: {
      "Wire Capacity": "Single wire",
      "Wire Diameter": "0.3mm - 8mm",
      "Drawing Speed": "600 m/min",
      "Power Consumption": "12 KW",
    },
    rating: 4.5,
    reviews: 16,
    inStock: true,
    featured: false,
  },
  {
    id: "fine-wire-drawing-machine",
    name: "Fine Wire Drawing Machine FWD-400",
    category: "wire-drawing",
    price: "₹6,25,000",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    description:
      "Specialized machine for drawing ultra-fine wires with exceptional precision and surface finish.",
    features: [
      "Ultra-fine wire processing",
      "Superior surface finish",
      "Precise diameter control",
      "Low maintenance",
    ],
    specifications: {
      "Wire Capacity": "Single wire",
      "Wire Diameter": "0.1mm - 2mm",
      "Drawing Speed": "400 m/min",
      "Power Consumption": "8 KW",
    },
    rating: 4.6,
    reviews: 12,
    inStock: false,
    featured: false,
  },
  {
    id: "industrial-wire-drawing-machine",
    name: "Industrial Wire Drawing Machine IWD-1000",
    category: "wire-drawing",
    price: "₹22,50,000",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    description:
      "Heavy-duty industrial wire drawing machine for high-volume production environments.",
    features: [
      "Industrial-grade construction",
      "High-volume production",
      "Advanced automation",
      "Remote diagnostics",
    ],
    specifications: {
      "Wire Capacity": "12 wires simultaneously",
      "Wire Diameter": "1mm - 12mm",
      "Drawing Speed": "1000 m/min",
      "Power Consumption": "35 KW",
    },
    rating: 4.9,
    reviews: 28,
    inStock: true,
    featured: true,
  },
  {
    id: "chain-cutting-tools",
    name: "Professional Chain Cutting Tools Set",
    category: "accessories",
    price: "₹25,000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description:
      "Complete set of professional-grade chain cutting and finishing tools for precision work.",
    features: [
      "Complete tool set",
      "Professional grade",
      "Precision cutting",
      "Durable construction",
    ],
    specifications: {
      "Tools Included": "15 pieces",
      "Cutting Capacity": "2mm - 20mm chains",
      Material: "Hardened steel",
      Weight: "8 kg",
    },
    rating: 4.4,
    reviews: 8,
    inStock: true,
    featured: false,
  },
  {
    id: "machine-maintenance-kit",
    name: "Machine Maintenance Kit MMK-Pro",
    category: "accessories",
    price: "₹15,000",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    description:
      "Comprehensive maintenance kit including all essential tools and spare parts for machine upkeep.",
    features: [
      "Complete maintenance kit",
      "Essential spare parts",
      "Quality tools",
      "Extended machine life",
    ],
    specifications: {
      "Kit Contents": "25+ items",
      Compatibility: "All machine models",
      "Storage Case": "Professional toolbox",
      Warranty: "1 year",
    },
    rating: 4.3,
    reviews: 6,
    inStock: true,
    featured: false,
  },
];

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (sortBy) {
      case "featured":
        return b.featured - a.featured;
      case "price-low":
        return (
          parseInt(a.price.replace(/[₹,]/g, "")) -
          parseInt(b.price.replace(/[₹,]/g, ""))
        );
      case "price-high":
        return (
          parseInt(b.price.replace(/[₹,]/g, "")) -
          parseInt(a.price.replace(/[₹,]/g, ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 text-white overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-inverse)",
                }}
              >
                Our Products
                <span
                  className="block mt-2 text-2xl sm:text-3xl lg:text-4xl"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  Advanced Manufacturing Solutions
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--color-text-inverse)", opacity: 0.9 }}
              >
                Discover our comprehensive range of chain making and wire
                drawing machines, designed to meet diverse manufacturing needs
                with precision and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section
        className="py-8 sticky top-0 z-30"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                style={{ color: "var(--color-text-secondary)" }}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id ? "scale-105" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.id
                        ? "var(--color-secondary-400)"
                        : "var(--color-background)",
                    color:
                      selectedCategory === category.id
                        ? "var(--color-primary-900)"
                        : "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
              >
                <option value="featured">Featured</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div
                className="flex border rounded-lg"
                style={{ borderColor: "var(--color-border)" }}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid" ? "bg-opacity-100" : "bg-opacity-0"
                  }`}
                  style={{
                    backgroundColor:
                      viewMode === "grid"
                        ? "var(--color-secondary-400)"
                        : "transparent",
                    color:
                      viewMode === "grid"
                        ? "var(--color-primary-900)"
                        : "var(--color-text-primary)",
                  }}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list" ? "bg-opacity-100" : "bg-opacity-0"
                  }`}
                  style={{
                    backgroundColor:
                      viewMode === "list"
                        ? "var(--color-secondary-400)"
                        : "transparent",
                    color:
                      viewMode === "list"
                        ? "var(--color-primary-900)"
                        : "var(--color-text-primary)",
                  }}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                No products found
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  } ${viewMode === "list" ? "flex gap-6" : ""}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`rounded-2xl shadow-lg overflow-hidden h-full flex ${
                      viewMode === "list" ? "flex-row" : "flex-col"
                    }`}
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-64 flex-shrink-0" : ""
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                          viewMode === "list" ? "h-full" : "h-48"
                        }`}
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.featured && (
                          <span
                            className="px-2 py-1 text-xs font-semibold rounded-lg"
                            style={{
                              backgroundColor: "var(--color-secondary-400)",
                              color: "var(--color-primary-900)",
                            }}
                          >
                            Featured
                          </span>
                        )}
                        {!product.inStock && (
                          <span
                            className="px-2 py-1 text-xs font-semibold rounded-lg"
                            style={{
                              backgroundColor: "rgba(239, 68, 68, 0.9)",
                              color: "white",
                            }}
                          >
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Quick View Button */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <Link
                          href={`/products/${product.id}`}
                          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                          style={{
                            backgroundColor: "var(--color-secondary-400)",
                            color: "var(--color-primary-900)",
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3
                          className="text-lg font-semibold line-clamp-2"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 ml-2">
                          <Star
                            className="w-4 h-4 fill-current"
                            style={{ color: "var(--color-secondary-400)" }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {product.rating}
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-sm mb-4 line-clamp-3"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {product.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features
                            .slice(0, viewMode === "list" ? 4 : 2)
                            .map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs rounded-full"
                                style={{
                                  backgroundColor: "var(--color-background)",
                                  color: "var(--color-text-secondary)",
                                  border: "1px solid var(--color-border)",
                                }}
                              >
                                {feature}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span
                            className="text-2xl font-bold"
                            style={{ color: "var(--color-secondary-400)" }}
                          >
                            {product.price}
                          </span>
                          <div
                            className="text-xs"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            ({product.reviews} reviews)
                          </div>
                        </div>

                        <Link
                          href={`/products/${product.id}`}
                          className="inline-flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "var(--color-secondary-400)",
                            color: "var(--color-primary-900)",
                          }}
                        >
                          View Product
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            Need Help Choosing the Right Machine?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--color-text-inverse)", opacity: 0.9 }}
          >
            Our experts are here to help you find the perfect manufacturing
            solution for your specific needs.
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
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg border-2 backdrop-blur-sm shadow-xl"
              style={{
                borderColor: "var(--color-text-inverse)",
                color: "var(--color-text-inverse)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
