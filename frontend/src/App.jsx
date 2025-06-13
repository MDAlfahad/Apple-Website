import Features from "./components/Features"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Modle from "./components/Modle"
import Navbar from "./components/Navbar"
import HowItWorks from "./components/HowItWorks"
import Footer from './components/Footer'
import * as Sentry from '@sentry/react'


const  App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Modle/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default  Sentry.withProfiler(App);