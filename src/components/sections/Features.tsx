// src/components/sections/Features.tsx - Theme-Aware Version
import { Award, Wrench, Users, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Premium Quality",
    description:
      "Superior materials and precision engineering for lasting performance and reliability",
    stats: "99.5% Quality Rate",
  },
  {
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: "Advanced Technology",
    description:
      "State-of-the-art machinery with cutting-edge automation and control features",
    stats: "Latest Tech Stack",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Expert Support",
    description:
      "Comprehensive training and ongoing technical assistance from our skilled team",
    stats: "24/7 Support",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Reliable Service",
    description:
      "Trusted by customers worldwide with proven track record since 2013",
    stats: "10+ Years Trusted",
  },
];

const achievements = [
  "ISO 9001:2015 Certified Manufacturing",
  "500+ Successful Installations Worldwide",
  "CE Marked Products for International Standards",
  "In-house R&D and Quality Testing Lab",
];

export default function Features() {
  return (
    <section
      className="py-16 md:py-20 px-[4rem]"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Why Choose Modern Chain Machines?
          </h2>
          <p
            className="max-w-2xl mx-auto text-base sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We combine advanced technology with superior craftsmanship to
            deliver the finest chain making equipment in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary-600), var(--color-primary-700))",
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed mb-3 text-sm sm:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {feature.description}
              </p>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--color-primary-600)" }}
              >
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div
          className="rounded-2xl shadow-lg p-6 sm:p-8"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="text-center mb-8">
            <h3
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Our Achievements
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Recognized for excellence in manufacturing and customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="rounded-full p-2 mr-4"
                  style={{ backgroundColor: "var(--color-success-50)" }}
                >
                  <CheckCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-success-600)" }}
                  />
                </div>
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
