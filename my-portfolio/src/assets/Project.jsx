import React from 'react'

const Project = () => {
  return (
    <div>
      <section id="projects" className="py-32 px-6">
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid  gap-10 max-w-6xl mx-auto place-items-center">
          {["project.png"].map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="glass rounded-xl p-6 hover:-translate-y-2 transition w-[320px] text-center"
            >
              <div className="flex justify-center">
                <img
                  src={`/${img}`}
                  alt="project"
                  className="w-64 h-64 object-cover rounded-lg mb-4"
                />
              </div>

              <h3 className="text-lg font-semibold">
                Project {i + 1}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Modern frontend project built with React & Tailwind.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Project