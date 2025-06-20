import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Modern Chain Machines for quotes, support, and inquiries",
};

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}
