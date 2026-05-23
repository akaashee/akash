import React from 'react'

const About = () => {
  return (
    <div className="bg-black text-white"> {/* Ensuring background is dark for premium contrast */}
      
      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 text-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] -z-0" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight" data-aos="fade-up">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I’m a passionate <span className="text-white font-medium">Frontend Developer</span> focused on building clean,
            high-performance user interfaces. I enjoy turning ideas into
            beautiful, functional digital experiences.
          </p>
        </div>
      </section>

     
    </div>
  )
}

export default About