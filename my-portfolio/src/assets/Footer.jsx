import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-20 text-center py-10 text-gray-500">
        
        <div className="flex justify-center gap-6 mb-4">
          
          <a
            href="https://www.linkedin.com/in/akash-ajay-m-p-51b285367"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/akaashee_"
          >
            Instagram
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © 2026 Akash. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
