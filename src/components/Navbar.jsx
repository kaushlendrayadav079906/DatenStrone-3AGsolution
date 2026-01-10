import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo-removebg-preview.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="w-full sticky top-0 z-20 bg-white">
        <nav className="mx-auto max-w-6xl mt-4 flex items-center justify-between px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded" />
            <span className="font-semibold text-gray-800 text-lg">
              DatenStrone<br className="sm:hidden" /> 3AGsolution
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="rounded-full px-6 py-3 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white shadow ring-1 ring-white/20 border border-indigo-800/60 flex items-center gap-6 text-base">
              <a href="#about">About</a>
              <a href="#mvp">MVP Development</a>
              <Link to="/application">Application Development</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/application"
              className="inline-block rounded-full bg-white text-indigo-900 text-base font-semibold px-6 py-2 shadow border border-indigo-200"
            >
              Start Your Project
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl font-bold"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <a className="menu-item" href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="menu-item" href="#mvp" onClick={() => setOpen(false)}>MVP Development</a>
        <Link className="menu-item" to="/application" onClick={() => setOpen(false)}>
          Application Development
        </Link>
        <Link className="menu-item" to="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Styles & Media Query */}
      <style>
        {`
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 75%;
          height: 100vh;
          background: #ffffff;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          font-size: 1.15rem;
          font-weight: 600;
          transition: left 0.3s ease;
          z-index: 50;
          box-shadow: 4px 0 20px rgba(0,0,0,0.2);
        }

        .mobile-menu.open {
          left: 0;
        }

        .close-btn {
          align-self: flex-end;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .menu-item {
          background: linear-gradient(135deg, #4338ca, #6366f1);
          color: white;
          padding: 0.9rem 1.2rem;
          border-radius: 0.75rem;
          text-align: left;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .menu-item:hover {
          background: linear-gradient(135deg, #3730a3, #4f46e5);
          transform: translateX(4px);
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
        `}
      </style>
    </>
  )
}
