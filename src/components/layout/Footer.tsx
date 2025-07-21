// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, NAVIGATION_LINKS } from "@/lib/constants";

const productCategories = [
  {
    name: "Gold Chain Making Machine",
    href: "/products/gold-chain-making-machine",
  },
  {
    name: "Silver Chain Making Machine",
    href: "/products/silver-chain-making-machine",
  },
  { name: "Wire Drawing Machine", href: "/products/wire-drawing-machine" },
  {
    name: "Chain Soldering Machine",
    href: "/products/chain-soldering-machine",
  },
  { name: "Box Chain Machine", href: "/products/box-chain-machine" },
  {
    name: "Automatic Anchor Chain Machine",
    href: "/products/automatic-anchor-chain-machine",
  },
];

const services = [
  { name: "Machine Installation", href: "/services#installation" },
  { name: "Training & Support", href: "/services#training" },
  { name: "Maintenance Services", href: "/services#maintenance" },
  { name: "Spare Parts Supply", href: "/services#spare-parts" },
  { name: "Technical Consultation", href: "/services#consultation" },
  { name: "After Sales Service", href: "/services#after-sales" },
];

const quickLinks = [
  { name: "About Company", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Quality Policy", href: "/quality-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    color: "hover:bg-blue-400",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "#",
    color: "hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
    color: "hover:bg-blue-700",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    href: "#",
    color: "hover:bg-red-600",
  },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "CE Marked Products",
  "Export Excellence Award",
  "Quality Assurance Certified",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate newsletter subscription
    setTimeout(() => {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-gray-900)",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Newsletter Section */}
      <div
        className="py-12"
        style={{ background: "var(--color-hero-bg-gradient)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--color-text-inverse)" }}
              >
                Stay Updated
              </h3>
              <p style={{ color: "var(--color-primary-100)" }}>
                Get the latest updates on new products, industry insights, and
                special offers.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                style={{
                  color: "var(--color-text-primary)",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "none",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 0 2px var(--color-primary-300)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50"
                style={{
                  backgroundColor: "var(--color-secondary-400)",
                  color: "var(--color-primary-900)",
                  borderRadius: "var(--radius-lg)",
                  border: "none",
                }}
              >
                {isSubmitting ? (
                  <div
                    className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin mr-2"
                    style={{ borderColor: "var(--color-primary-900)" }}
                  />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  {COMPANY_INFO.name}
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--color-gray-300)" }}
                >
                  Leading manufacturer of chain making and wire drawing machines
                  since {COMPANY_INFO.founded}. Trusted by customers worldwide
                  for quality, reliability, and exceptional service.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: "var(--color-primary-400)" }}
                  />
                  <div>
                    <div
                      className="font-medium"
                      style={{ color: "var(--color-text-inverse)" }}
                    >
                      Our Location
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--color-gray-300)" }}
                    >
                      {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: "var(--color-primary-400)" }}
                  />
                  <div>
                    <div
                      className="font-medium"
                      style={{ color: "var(--color-text-inverse)" }}
                    >
                      Call Us
                    </div>
                    <Link
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm transition-colors"
                      style={{
                        color: "var(--color-gray-300)",
                        textDecoration: "none",
                      }}
                    >
                      {COMPANY_INFO.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: "var(--color-primary-400)" }}
                  />
                  <div>
                    <div
                      className="font-medium"
                      style={{ color: "var(--color-text-inverse)" }}
                    >
                      Email Us
                    </div>
                    <Link
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm transition-colors"
                      style={{
                        color: "var(--color-gray-300)",
                        textDecoration: "none",
                      }}
                    >
                      {COMPANY_INFO.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: "var(--color-primary-400)" }}
                  />
                  <div>
                    <div
                      className="font-medium"
                      style={{ color: "var(--color-text-inverse)" }}
                    >
                      Business Hours
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--color-gray-300)" }}
                    >
                      <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div>Sat: 9:00 AM - 2:00 PM</div>
                      <div>Sun: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4
                  className="font-semibold mb-4"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: "var(--color-gray-800)",
                        borderRadius: "var(--radius-2xl)",
                      }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-semibold mb-6 text-lg"
                style={{ color: "var(--color-text-inverse)" }}
              >
                Quick Links
              </h4>
              <div className="space-y-3">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors text-sm"
                    style={{
                      color: "var(--color-gray-300)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors text-sm"
                    style={{
                      color: "var(--color-gray-300)",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </Link>
                ))} */}
              </div>
            </div>

            {/* Our Products */}
            <div>
              <h4
                className="font-semibold mb-6 text-lg"
                style={{ color: "var(--color-text-inverse)" }}
              >
                Our Products
              </h4>
              <div className="space-y-3">
                {productCategories.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block transition-colors text-sm"
                    style={{
                      color: "var(--color-gray-300)",
                      textDecoration: "none",
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-lg"
                style={{
                  backgroundColor: "var(--color-gray-800)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <h5
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Need Custom Solution?
                </h5>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-gray-300)" }}
                >
                  We also manufacture customized machines as per your specific
                  requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center transition-colors text-sm font-medium"
                  style={{
                    color: "var(--color-primary-400)",
                    textDecoration: "none",
                  }}
                >
                  Get Custom Quote <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4
                className="font-semibold mb-6 text-lg"
                style={{ color: "var(--color-text-inverse)" }}
              >
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block transition-colors text-sm"
                    style={{
                      color: "var(--color-gray-300)",
                      textDecoration: "none",
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h5
                  className="font-semibold mb-4"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Certifications
                </h5>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: "var(--color-primary-400)" }}
                      ></div>
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-gray-300)" }}
                      >
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div
                className="mt-6 p-4 border rounded-lg"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                  borderColor: "rgba(185, 28, 28, 0.3)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <h5
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-error-500)" }}
                >
                  24/7 Emergency Support
                </h5>
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--color-gray-300)" }}
                >
                  For urgent technical assistance
                </p>
                <Link
                  href="tel:+91-XXXXXXXXXX"
                  className="font-semibold text-sm transition-colors"
                  style={{
                    color: "var(--color-error-500)",
                    textDecoration: "none",
                  }}
                >
                  Emergency Hotline: +91-XXXXXXXXXX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="border-t"
        style={{ borderColor: "var(--color-gray-800)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div
                className="text-sm"
                style={{ color: "var(--color-gray-400)" }}
              >
                <p>
                  &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                </p>
                <p className="mt-1">GST: {COMPANY_INFO.gst}</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4">
                <div
                  className="flex items-center px-3 py-2 rounded"
                  style={{ backgroundColor: "var(--color-gray-800)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: "var(--color-success-500)" }}
                  ></div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-gray-300)" }}
                  >
                    Trusted Since 2013
                  </span>
                </div>
                <div
                  className="flex items-center px-3 py-2 rounded"
                  style={{ backgroundColor: "var(--color-gray-800)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: "var(--color-primary-500)" }}
                  ></div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-gray-300)" }}
                  >
                    500+ Customers
                  </span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <Link
                  href="/privacy-policy"
                  className="transition-colors"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="transition-colors"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/refund-policy"
                  className="transition-colors"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Refund Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="transition-colors"
                  style={{
                    color: "var(--color-gray-400)",
                    textDecoration: "none",
                  }}
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className="border-t mt-6 pt-6"
            style={{ borderColor: "var(--color-gray-800)" }}
          >
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h5
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Manufacturing Excellence
                </h5>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-gray-400)" }}
                >
                  Precision engineered machines manufactured in our
                  state-of-the-art facility in Agra, using the finest materials
                  and latest technology to ensure superior quality and
                  performance.
                </p>
              </div>
              <div>
                <h5
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Global Reach
                </h5>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-gray-400)" }}
                >
                  Serving customers across India and international markets
                  including Middle East, Southeast Asia, and Africa with
                  reliable shipping and comprehensive support services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors z-50 hover:scale-110 transform duration-300"
        style={{
          backgroundColor: "var(--color-primary-600)",
          color: "var(--color-text-inverse)",
          borderRadius: "var(--radius-2xl)",
          boxShadow: "var(--shadow-lg)",
          border: "none",
        }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 transform -rotate-90" />
      </button>
    </footer>
  );
}
