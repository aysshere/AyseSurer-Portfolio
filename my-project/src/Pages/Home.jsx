import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <main className='flex flex-col w-full font-inter'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}

export default Home