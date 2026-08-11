import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Hardware from './components/Hardware.jsx'
import FrontOfHouse from './components/FrontOfHouse.jsx'
import BackOffice from './components/BackOffice.jsx'
import Contact, { PRODUCT_OPTIONS } from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import OriginRibbon from './components/OriginRibbon.jsx'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')

  function handleProductInterest(product) {
    const match = PRODUCT_OPTIONS.find((option) => option.startsWith(product))
    if (match) setSelectedProduct(match)
  }

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Hardware onProductInterest={handleProductInterest} />
        <FrontOfHouse />
        <BackOffice />
        <Contact selectedProduct={selectedProduct} onProductChange={setSelectedProduct} />
      </main>
      <Footer />
      <OriginRibbon />
    </>
  )
}
