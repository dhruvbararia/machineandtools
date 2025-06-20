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
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">
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
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-blue-900 border-t-transparent rounded-full animate-spin mr-2" />
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
                <h3 className="text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading manufacturer of chain making and wire drawing machines
                  since {COMPANY_INFO.founded}. Trusted by customers worldwide
                  for quality, reliability, and exceptional service.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Our Location</div>
                    <div className="text-gray-300 text-sm">
                      {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Call Us</div>
                    <Link
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Email Us</div>
                    <Link
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Business Hours</div>
                    <div className="text-gray-300 text-sm">
                      <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div>Sat: 9:00 AM - 2:00 PM</div>
                      <div>Sun: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`bg-gray-800 p-3 rounded-full transition-colors ${social.color}`}
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
              <h4 className="font-semibold mb-6 text-white text-lg">
                Quick Links
              </h4>
              <div className="space-y-3">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Our Products */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">
                Our Products
              </h4>
              <div className="space-y-3">
                {productCategories.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-white mb-2">
                  Need Custom Solution?
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  We also manufacture customized machines as per your specific
                  requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Get Custom Quote <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-white">
                  Certifications
                </h5>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                <h5 className="font-semibold text-red-400 mb-2">
                  24/7 Emergency Support
                </h5>
                <p className="text-gray-300 text-sm mb-2">
                  For urgent technical assistance
                </p>
                <Link
                  href="tel:+91-XXXXXXXXXX"
                  className="text-red-400 font-semibold text-sm hover:text-red-300 transition-colors"
                >
                  Emergency Hotline: +91-XXXXXXXXXX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm">
                <p>
                  &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                </p>
                <p className="mt-1">GST: {COMPANY_INFO.gst}</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4">
                <div className="flex items-center bg-gray-800 px-3 py-2 rounded">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-300">
                    Trusted Since 2013
                  </span>
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-2 rounded">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-300">500+ Customers</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/refund-policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Refund Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h5 className="text-white font-semibold mb-2">
                  Manufacturing Excellence
                </h5>
                <p className="text-gray-400 text-sm">
                  Precision engineered machines manufactured in our
                  state-of-the-art facility in Agra, using the finest materials
                  and latest technology to ensure superior quality and
                  performance.
                </p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Global Reach</h5>
                <p className="text-gray-400 text-sm">
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
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 hover:scale-110 transform duration-300"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 transform -rotate-90" />
      </button>
    </footer>
  );
}
