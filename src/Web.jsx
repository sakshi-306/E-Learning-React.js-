import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Companies from './components/Companies'
import Instructors from './components/Instructors'
import Students from './components/Students'
import Contact from './components/Contact'   // ✅ Corrected import
import Footer from './components/Footer'

const Web = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Courses />
      <Companies />
      <Instructors />
      <Students />
      <Contact />
      <Footer />
    </div>
  )
}

export default Web;
