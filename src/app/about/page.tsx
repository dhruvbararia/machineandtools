import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Modern Chain Machines - Leading manufacturer since 2013 in Agra, India",
};

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          About Modern Chain Machines
        </h1>
        {/* Add your about content here */}
      </div>
    </div>
  );
}
