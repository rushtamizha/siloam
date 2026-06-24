import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}

export default page