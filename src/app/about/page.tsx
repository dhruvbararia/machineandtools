import type { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Modern Chain Machines - Leading manufacturer since 2013 in Agra, India",
};

export default function About() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">
          About Modern Chain Machines
        </h1> */}
        {/* Add your about content here */}
        <AboutPage />
      </div>
    </div>
  );
}
