import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-black tracking-tighter text-white z-[110]">
          AKASH<span className="text-blue-400">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map(item => (
            <li key={item} className="hover:text-white transition-colors cursor-pointer">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* MENU ICON */}
        <button
          className="relative z-[110] md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : 'w-4 self-end'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
        </button>

        {/* 1. THE BLUR LAYER (Background Only) */}
        <div 
          className={`fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-500 md:hidden ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* 2. THE DRAWER (With Shadow Effect) */}
        <div className={`fixed top-0 right-0 h-screen w-72 bg-[#111] z-[105] transform transition-transform duration-500 ease-in-out md:hidden
          ${open ? 'translate-x-0 shadow-[-20px_0px_60px_rgba(0,0,0,0.9)]' : 'translate-x-full shadow-none'}
        `}>
          <ul className="flex flex-col gap-6 p-10 pt-32">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;  