// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/lib/constants";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

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
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "var(--color-primary-600)",
          color: "var(--color-text-inverse)",
          padding: "0.5rem 4rem",
          fontSize: "0.875rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* <ThemeSwitcher /> */}
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="transition-colors"
                  style={{
                    color: "var(--color-text-inverse)",
                    textDecoration: "none",
                  }}
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors"
                  style={{
                    color: "var(--color-text-inverse)",
                    textDecoration: "none",
                  }}
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
        className={`sticky top-0 z-50 transition-all duration-300`}
        style={{
          backgroundColor: "var(--color-header-bg)",
          boxShadow: isScrolled ? "var(--shadow-xl)" : "var(--shadow-lg)",
          padding: "0.5rem 4rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center py-6">
              <Link
                href="/"
                className="text-2xl font-bold transition-colors"
                style={{
                  color: "var(--color-primary-600)",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={250}
                  height={50}
                  className="max-h-[70px] max-w-[160px] mix-blend-difference object-cover"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex space-x-4">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{
                      backgroundColor:
                        pathname === link.href
                          ? "var(--color-primary-600)"
                          : "transparent",
                      color:
                        pathname === link.href
                          ? "var(--color-text-inverse)"
                          : "var(--color-text-primary)",
                      textDecoration: "none",
                      borderRadius: "var(--radius-md)",
                    }}
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
                className="p-2 rounded-md transition-colors"
                style={{
                  color: "var(--color-text-primary)",
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                }}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  backgroundColor: "var(--color-primary-600)",
                  color: "var(--color-text-inverse)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[120px] bg-black bg-opacity-50 z-40">
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-lg)",
                borderTop: "1px solid var(--color-gray-200)",
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    style={{
                      backgroundColor:
                        pathname === link.href
                          ? "var(--color-primary-600)"
                          : "transparent",
                      color:
                        pathname === link.href
                          ? "var(--color-text-inverse)"
                          : "var(--color-text-primary)",
                      textDecoration: "none",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "var(--color-gray-200)" }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors"
                    style={{
                      backgroundColor: "var(--color-primary-600)",
                      color: "var(--color-text-inverse)",
                      textDecoration: "none",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "var(--color-gray-200)" }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center px-3 py-2">
                      <Phone
                        className="w-4 h-4 mr-2"
                        style={{ color: "var(--color-primary-600)" }}
                      />
                      <Link
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-sm"
                        style={{
                          color: "var(--color-text-secondary)",
                          textDecoration: "none",
                        }}
                      >
                        {COMPANY_INFO.phone}
                      </Link>
                    </div>
                    <div className="flex items-center px-3 py-2">
                      <Mail
                        className="w-4 h-4 mr-2"
                        style={{ color: "var(--color-primary-600)" }}
                      />
                      <Link
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm"
                        style={{
                          color: "var(--color-text-secondary)",
                          textDecoration: "none",
                        }}
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
