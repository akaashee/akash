import React from 'react'

const Skills = () => {
  return (
    <div>
      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 relative">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-aos="fade-up"
            >
              Tech <span className="text-blue-500">Stack</span>
            </h2>

            <p
              className="text-gray-400"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              {
                img: "html.jpg",
                name: "HTML5",
                color: "hover:shadow-orange-500/20",
              },
              {
                img: "css.jpg",
                name: "CSS3",
                color: "hover:shadow-blue-500/20",
              },
              {
                img: "javascript.png",
                name: "JavaScript",
                color: "hover:shadow-yellow-500/20",
              },
              {
                img: "tailwind.jpg",
                name: "Tailwind",
                color: "hover:shadow-cyan-500/20",
              },
              {
                img: "react.png",
                name: "React",
                color: "hover:shadow-sky-500/20",
              },
              {
                img: "redux.jpg",
                name: "Redux",
                color: "hover:shadow-purple-500/20",
              },
            ].map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative glass w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 ${skill.color} hover:shadow-2xl hover:bg-white/[0.08]`}
              >
                {/* Skill Icon */}
                <img
                  src={`/${skill.img}`}
                  alt={skill.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Skill Name */}
                <span className="absolute bottom-4 text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills