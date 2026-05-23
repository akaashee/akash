import React from 'react'

function Contact() {
  return (
    <div>
      {/* CONTACT */}
<section id="contact" className="py-32 px-6 relative overflow-hidden">
  {/* Optional: Subtle background glow for premium feel */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] -z-10" />

  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-aos="fade-up">
        Let’s Work <span className="text-blue-500">Together</span>
      </h2>
      <p className="text-gray-400 max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="100">
        Have a project in mind? Reach out and let's build something extraordinary.
      </p>
    </div>

    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      data-aos="fade-up"
      className="glass-effect max-w-xl mx-auto p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl flex flex-col gap-6 shadow-2xl"
    >
      {/* Web3Forms Configuration */}
      <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />
      {/* Redirect to a custom page or stay on same page */}
      <input type="hidden" name="from_name" value="Portfolio Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">Name</label>
          <input 
            required
            className="p-4 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:bg-white/10" 
            placeholder="John Doe" 
            name="name" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">Email</label>
          <input 
            required
            type="email"
            className="p-4 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:bg-white/10" 
            placeholder="john@example.com" 
            name="email" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 ml-1">Message</label>
        <textarea 
          required
          className="p-4 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:bg-white/10 h-40 resize-none" 
          placeholder="Tell me about your project..." 
          name="message"
        ></textarea>
      </div>

      <button className="group relative bg-blue-600 text-white font-semibold py-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">
        <span className="relative z-10">Send Message</span>
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </button>
    </form>
  </div>
</section>

<footer className="border-t border-white/5 mt-20 text-center py-10 text-gray-500">
  <div className="flex justify-center gap-6 mb-4">
    {/* Add your social links here */}
    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
    <a href="#" className="hover:text-white transition-colors">GitHub</a>
    <a href="#" className="hover:text-white transition-colors">Twitter</a>
  </div>
  <p className="text-xs uppercase tracking-widest">
    © 2026 Akash <span className="mx-2">|</span> Built with Passion
  </p>
</footer>
    </div>
  )
}

export default Contact
