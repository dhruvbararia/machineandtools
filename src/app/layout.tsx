// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3B82F6" },
    { media: "(prefers-color-scheme: dark)", color: "#1E40AF" },
  ],
};

// SEO Metadata
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default:
      "Modern Chain Machines - Leading Chain Making Machine Manufacturer in Agra, India",
    template:
      "%s | Modern Chain Machines - Chain Making Equipment Manufacturer",
  },
  description:
    "Leading manufacturer of chain making and wire drawing machines since 2013 in Agra, India. High-quality gold, silver chain making equipment with worldwide shipping and 24/7 support.",

  // Keywords for SEO
  keywords: [
    "chain making machine",
    "gold chain making machine",
    "silver chain making machine",
    "wire drawing machine",
    "jewelry equipment",
    "chain manufacturing equipment",
    "Agra chain machine manufacturer",
    "Indian chain making machines",
    "automatic chain making machine",
    "chain soldering machine",
    "box chain machine",
    "jewelry making tools",
    "wire processing equipment",
    "chain making machinery India",
  ],

  // Author and company info
  authors: [
    { name: "Modern Chain Machines", url: "https://modernchainmachines.com" },
  ],
  creator: "Modern Chain Machines",
  publisher: "Modern Chain Machines",

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modernchainmachines.com",
    siteName: "Modern Chain Machines",
    title: "Modern Chain Machines - Leading Chain Making Machine Manufacturer",
    description:
      "High-quality chain making and wire drawing machines since 2013. Trusted by 500+ customers worldwide with professional installation and support.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Chain Machines - Chain Making Equipment Manufacturer",
      },
      {
        url: "/images/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Modern Chain Machines Logo",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@modernchainmachines",
    creator: "@modernchainmachines",
    title: "Modern Chain Machines - Leading Chain Making Machine Manufacturer",
    description:
      "High-quality chain making and wire drawing machines since 2013. Professional equipment for jewelry manufacturing.",
    images: ["/images/twitter-image.jpg"],
  },

  // Additional metadata
  category: "Manufacturing",
  classification: "Business",

  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // bing: 'your-bing-verification-code',
  },

  // Canonical URL
  alternates: {
    canonical: "https://modernchainmachines.com",
    languages: {
      "en-US": "https://modernchainmachines.com",
      "hi-IN": "https://modernchainmachines.com/hi",
    },
  },

  // App specific metadata
  applicationName: "Modern Chain Machines",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Apple specific metadata
  appleWebApp: {
    capable: true,
    title: "Modern Chain Machines",
    statusBarStyle: "default",
  },

  // Format detection
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: true,
  },

  // Other metadata
  other: {
    "business:contact_data:street_address": COMPANY_INFO.location,
    "business:contact_data:locality": "Agra",
    "business:contact_data:region": "Uttar Pradesh",
    "business:contact_data:postal_code": "282001",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": COMPANY_INFO.phone,
    "business:contact_data:email": COMPANY_INFO.email,
    "business:contact_data:website": "https://modernchainmachines.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY_INFO.name,
              url: "https://modernchainmachines.com",
              logo: "https://modernchainmachines.com/images/logo.png",
              description:
                "Leading manufacturer of chain making and wire drawing machines since 2013 in Agra, India.",
              foundingDate: COMPANY_INFO.founded,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Agra",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
                streetAddress: COMPANY_INFO.location,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: COMPANY_INFO.phone,
                email: COMPANY_INFO.email,
                contactType: "Customer Service",
                availableLanguage: ["English", "Hindi"],
                areaServed: "Worldwide",
              },
              sameAs: [
                "https://www.facebook.com/modernchainmachines",
                "https://www.linkedin.com/company/modernchainmachines",
                "https://www.twitter.com/modernchainmachines",
                "https://www.instagram.com/modernchainmachines",
                "https://www.youtube.com/modernchainmachines",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Chain Making Machines",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Gold Chain Making Machine",
                      description:
                        "High-precision automatic gold chain manufacturing machine",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Silver Chain Making Machine",
                      description: "Professional silver chain making equipment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wire Drawing Machine",
                      description: "Industrial wire drawing equipment",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://modernchainmachines.com",
              name: COMPANY_INFO.name,
              image: "https://modernchainmachines.com/images/logo.png",
              url: "https://modernchainmachines.com",
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY_INFO.location,
                addressLocality: "Agra",
                addressRegion: "Uttar Pradesh",
                postalCode: "282001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.1767,
                longitude: 78.0081,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "₹₹₹",
              currenciesAccepted: "INR, USD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
            }),
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {/* Skip to main content for accessibility
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a> */}

          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
        {/* Analytics Scripts */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}

        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
