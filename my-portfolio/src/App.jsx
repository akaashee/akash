import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Contact from "./assets/contact"
import Skills from "./assets/Skills"
import Project from "./assets/Project"
import About from "./assets/About"
import Hero from "./assets/Hero"
import Navbar from "./assets/Navbar"

const App = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">

      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact/>
    </div>
  )
}

export default App
