import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of chain making machines, wire drawing equipment, and jewelry manufacturing tools",
};

export default function Products() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
        {/* Add your products content here */}
      </div>
    </div>
  );
}
