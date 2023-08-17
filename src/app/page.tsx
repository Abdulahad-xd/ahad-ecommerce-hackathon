import Image from 'next/image'
import styles from './page.module.css'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Events from './sections/event'
import Product from './sections/product'
import Feature from './sections/feature'
import Newsletter from './sections/newsletter'
import Footer from './sections/footer'

export default function Home() {
  return (
    <section className="px-20">
    <Navbar/>
    <Hero />
    
    <Events/>
    <Product/>
    <Feature/>
    <Newsletter/>
    <Footer/>
    </section>
  )
}
