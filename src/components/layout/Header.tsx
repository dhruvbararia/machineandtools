// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/lib/constants";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-blue-200 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-blue-200 transition-colors"
                >
                  {COMPANY_INFO.email}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <span>GST: {COMPANY_INFO.gst}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {COMPANY_INFO.name}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex space-x-4">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-gray-100"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[120px] bg-black bg-opacity-50 z-40">
            <div className="bg-white shadow-lg border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex items-center px-3 py-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <Link
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-gray-600 text-sm"
                      >
                        {COMPANY_INFO.phone}
                      </Link>
                    </div>
                    <div className="flex items-center px-3 py-2">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      <Link
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-gray-600 text-sm"
                      >
                        {COMPANY_INFO.email}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
