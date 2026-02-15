import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaBars } from 'react-icons/fa'

const linkClass = ({ isActive }) =>
  `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
    isActive ? 'text-blue-600' : ''
  }`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
              <FaHome className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Basera
              </h1>
              <p className="text-gray-600 text-sm font-medium">Bilaspur's Best Accommodation Finder</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClass}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/listings" className={linkClass}>
              Listings
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              <FaUser className="inline mr-2" />
              List Your Property
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-xl shadow-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <NavLink onClick={() => setIsMenuOpen(false)} to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </NavLink>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/listings" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Listings
              </NavLink>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </NavLink>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </NavLink>

              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold w-full">
                <FaUser className="inline mr-2" />
                List Your Property
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
