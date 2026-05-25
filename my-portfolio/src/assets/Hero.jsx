import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          className="order-2 lg:order-1 text-left"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 uppercase tracking-widest">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>

            Available for Freelance
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            Designing the <br />

            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Future of Web
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
            I’m <span className="text-white font-medium">Akash Ajay M P</span>, a Frontend
            Architect. I translate complex ideas into seamless, high-performance
            digital experiences that people love.
          </p>

          <div className="flex flex-wrap gap-5">

            <a href="#contact">
              <button className="relative group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">

                <span className="relative z-10">
                  Start a Project
                </span>

                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </a>


          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-white/5">

            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
              Follow Me
            </span>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/akaashee_"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-pink-500/50 hover:text-pink-400 transition-all"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-ajay-m-p-51b285367"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-gray-400/50 hover:text-gray-300 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          data-aos="zoom-in"
        >
          <div className="relative group">

            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">

              <img
                src="/mee.jpeg"
                alt="Akash"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-8 bottom-12 p-4 glass-effect rounded-2xl border border-white/10 shadow-xl hidden md:block animate-bounce-slow">

              <p className="text-2xl font-bold">
                React
              </p>

              <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">
                Expertise
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero