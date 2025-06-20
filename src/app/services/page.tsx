import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional installation, training, maintenance and support services for chain making machines",
};

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
        {/* Add your services content here */}
      </div>
    </div>
  );
}
