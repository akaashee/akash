import React from 'react'

const About = () => {
  return (
    <div className="bg-black text-white">
      
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-32 px-6 text-center relative overflow-hidden"
      >
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] -z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
            data-aos="fade-up"
          >
            About <span className="text-blue-500">Me</span>
          </h2>

          {/* Profile Image */}
          <div
            className="flex justify-center mb-10"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="relative group">
              
              {/* Glow */}
              <div className="absolute -inset-2 bg-blue-500/20 blur-2xl rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500" />

              {/* Image */}
              <img
                src="/mee.jpeg"
                alt="Akash"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover grayscale group-hover:grayscale-0 border-4 border-white/10 shadow-2xl transition-all duration-700"
              />
            </div>
          </div>

          {/* Role */}
          <h3
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Frontend <span className="text-blue-500">Developer!</span>
          </h3>

          {/* Description */}
          <p
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I’m a creative and detail-oriented Frontend Developer with a
            strong foundation in HTML, CSS, JavaScript, React, and Redux.
            I enjoy transforming ideas into beautiful, high-performance
            web experiences with clean UI and smooth user interaction.
          </p>

          {/* Button */}
          <div
            className="mt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="#home">
              <button className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10">
                Read More
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About