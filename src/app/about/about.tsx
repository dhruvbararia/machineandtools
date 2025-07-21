"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Globe,
  Trophy,
  CheckCircle,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Factory,
  Wrench,
  Shield,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";

const milestones = [
  {
    year: "2013",
    title: "Company Founded",
    description:
      "Started with a vision to revolutionize chain making technology",
  },
  {
    year: "2015",
    title: "First Export",
    description: "Expanded operations to international markets",
  },
  {
    year: "2018",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management",
  },
  {
    year: "2020",
    title: "500+ Customers",
    description:
      "Reached milestone of serving 500+ satisfied customers globally",
  },
  {
    year: "2023",
    title: "Advanced Technology",
    description: "Launched next-generation automated chain making machines",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality Excellence",
    description:
      "We are committed to delivering superior quality machines that exceed industry standards and customer expectations.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We build lasting relationships through exceptional service.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Innovating World",
    description:
      "Continuous innovation drives us to develop cutting-edge solutions for modern manufacturing challenges.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Globally Reach",
    description:
      "We serve customers worldwide, bringing advanced manufacturing technology to markets across the globe.",
  },
];

const stats = [
  {
    number: "500+",
    label: "Happy Customers",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: "15+",
    label: "Countries Served",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    number: "50+",
    label: "Product Models",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    number: "10+",
    label: "Years Experience",
    icon: <Award className="w-8 h-8" />,
  },
];

const features = [
  "State-of-the-art manufacturing facility",
  "Experienced team of engineers and technicians",
  "Comprehensive quality control processes",
  "24/7 customer support and service",
  "Global shipping and installation services",
  "2-year warranty on all machines",
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance timeline items
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % milestones.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 mx-auto">
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
                About Our Company
                <span
                  className="block mt-2 text-2xl sm:text-3xl lg:text-4xl"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  Leading the Future of Manufacturing
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: "var(--color-text-inverse)",
                  opacity: 0.9,
                }}
              >
                With over a decade of experience, we are pioneers in chain
                making and wire drawing technology, serving customers worldwide
                with innovative manufacturing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 rounded-xl shadow-lg text-center transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="flex justify-center mb-3"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                }}
              >
                Our Story
                <span
                  className="block text-lg sm:text-xl font-normal mt-2"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  Building Excellence Since 2013
                </span>
              </h2>

              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <p>
                  Founded in 2013, our company emerged from a simple yet
                  powerful vision: to revolutionize the chain making and wire
                  drawing industry through innovative technology and unwavering
                  commitment to quality.
                </p>

                <p>
                  What started as a small manufacturing unit has grown into a
                  globally recognized name in industrial machinery. Our journey
                  has been marked by continuous innovation, strategic
                  partnerships, and an unwavering focus on customer
                  satisfaction.
                </p>

                <p>
                  Today, we proudly serve over 500 customers across 15+
                  countries, delivering cutting-edge manufacturing solutions
                  that drive productivity and efficiency in industries
                  worldwide.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-secondary-400)",
                    color: "var(--color-primary-900)",
                  }}
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.alphacoders.com/487/thumb-1920-487138.jpg"
                  alt="Our Manufacturing Facility"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "var(--color-hero-bg-gradient)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
              }}
            >
              Our Journey
              <span
                className="block text-lg sm:text-xl font-normal mt-2"
                style={{ color: "var(--color-secondary-400)" }}
              >
                Milestones That Define Us
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                    activeTimelineItem === index ? "scale-105" : "scale-100"
                  }`}
                >
                  {/* Left Content (odd items) */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:text-right" : "lg:order-2"
                    }`}
                  >
                    <div
                      className="p-6 rounded-xl shadow-lg"
                      style={{
                        backgroundColor:
                          activeTimelineItem === index
                            ? "var(--color-secondary-400)"
                            : "var(--color-surface)",
                        color:
                          activeTimelineItem === index
                            ? "var(--color-primary-900)"
                            : "var(--color-text-primary)",
                        border: `2px solid ${
                          activeTimelineItem === index
                            ? "var(--color-secondary-400)"
                            : "var(--color-border)"
                        }`,
                      }}
                    >
                      <div className="font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <div className="font-semibold text-lg mb-2">
                        {milestone.title}
                      </div>
                      <div className="text-sm opacity-90">
                        {milestone.description}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-4 transition-all duration-300"
                      style={{
                        backgroundColor:
                          activeTimelineItem === index
                            ? "var(--color-secondary-400)"
                            : "var(--color-surface)",
                        borderColor: "var(--color-secondary-400)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              className="p-8 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="p-3 rounded-lg mr-4"
                  style={{ backgroundColor: "var(--color-secondary-400)" }}
                >
                  <Target
                    className="w-8 h-8"
                    style={{ color: "var(--color-primary-900)" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Our Mission
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                To provide world-class chain making and wire drawing machines
                that empower manufacturers to achieve operational excellence,
                enhance productivity, and drive sustainable growth in their
                respective industries.
              </p>
            </div>

            {/* Vision */}
            <div
              className="p-8 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="p-3 rounded-lg mr-4"
                  style={{ backgroundColor: "var(--color-primary-600)" }}
                >
                  <Eye
                    className="w-8 h-8"
                    style={{ color: "var(--color-text-inverse)" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Our Vision
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                To be the global leader in manufacturing technology innovation,
                recognized for our commitment to quality, customer satisfaction,
                and sustainable industrial solutions that shape the future of
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
              }}
            >
              Our Values
              <span
                className="block text-lg sm:text-xl font-normal mt-2"
                style={{ color: "var(--color-secondary-400)" }}
              >
                What Drives Us Forward
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group cursor-pointer"
              >
                <div
                  className="p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="flex justify-center mb-4 p-3 rounded-lg mx-auto w-fit"
                    style={{ backgroundColor: "var(--color-secondary-400)" }}
                  >
                    <div style={{ color: "var(--color-primary-900)" }}>
                      {value.icon}
                    </div>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.alphacoders.com/487/thumb-1920-487138.jpg"
                  alt="Quality Manufacturing Process"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "var(--color-hero-bg-gradient)" }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                }}
              >
                Why Choose Us
                <span
                  className="block text-lg sm:text-xl font-normal mt-2"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  Excellence in Every Detail
                </span>
              </h2>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      style={{ color: "var(--color-secondary-400)" }}
                    />
                    <span style={{ color: "var(--color-text-primary)" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-secondary-400)",
                    color: "var(--color-primary-900)",
                  }}
                >
                  View Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                  style={{
                    borderColor: "var(--color-secondary-400)",
                    color: "var(--color-secondary-400)",
                    backgroundColor: "transparent",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ background: "var(--color-hero-bg-gradient)" }}
      >
        {/* Background Pattern */}
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
            Ready to Transform Your Manufacturing?
          </h2>
          <p
            className="text-lg mb-8"
            style={{
              color: "var(--color-text-inverse)",
              opacity: 0.9,
            }}
          >
            Join hundreds of satisfied customers worldwide who trust our
            machines for their manufacturing needs.
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
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
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
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
