import React from 'react'
import Hero from '../componenets/Contact/Hero.js'
import ContactForm from '../componenets/Contact/ContactForm'
import Footer from '../componenets/shared/Footer'
import TopBarStart from '../componenets/shared/topbar_start'

function Contact() {
  return (
    <div>
      <TopBarStart />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
