
// src/app/page.tsx - Fixed Home Page
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductsPreview from '@/components/sections/ProductsPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsPreview />
      <ContactCTA />
    </>
  )
}