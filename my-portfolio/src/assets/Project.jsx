import React from 'react'

const Project = () => {
  return (
    <div>
      <section id="projects" className="py-32 px-6">
        
        {/* HEADING */}
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto place-items-center">
          
          {[
            {
              img: "project.png",
              title: "Project 1",
              desc: "Modern frontend project built with React & Tailwind.",
            },

            {
              img: "akash.png",
              title: "Portfolio Design",
              desc: "Modern glowing portfolio logo design with premium UI style.",
            },
          ].map((project, i) => (
            
            <div
              key={i}
              data-aos="zoom-in"
              className="glass rounded-xl p-6 hover:-translate-y-2 transition duration-500 w-[320px] text-center group bg-white/[0.03] border border-white/10"
            >
              
              {/* IMAGE */}
              <div className="flex justify-center overflow-hidden rounded-lg">
                
                <img
                  src={`/${project.img}`}
                  alt={project.title}
                  className="w-full h-64 object-contain rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105 bg-black p-2"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Project