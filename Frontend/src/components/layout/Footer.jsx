import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Basera</h3>
                <p className="text-gray-400 font-medium">Bilaspur's Best Accommodation Finder</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We help students and professionals in Bilaspur find verified accommodations, rooms, and hostels with transparent pricing and all facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-pink-500 transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Search Rooms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">List Your Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Popular Areas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">River View Colony</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Koni</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Sipat Road</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Nehru Chowk</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Birkona</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">City Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-blue-600 p-2 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                  <FaPhone className="text-white" size={16} />
                </div>
                <span className="text-gray-300 font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-600 p-2 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                  <FaEnvelope className="text-white" size={16} />
                </div>
                <span className="text-gray-300 font-medium">info@basera.com</span>
              </div>
              <div className="flex items-start group">
                <div className="bg-blue-600 p-2 rounded-lg mr-4 mt-1 group-hover:bg-blue-500 transition-colors duration-200">
                  <FaMapMarkerAlt className="text-white" size={16} />
                </div>
                <span className="text-gray-300 font-medium leading-relaxed">
                  123 Main Road,<br />
                  Bilaspur, Chhattisgarh<br />
                  India - 495001
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-bold mb-4 text-white">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-xl text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-r-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 font-medium">&copy; {new Date().getFullYear()} Basera. All rights reserved.</p>
          <p className="mt-3 text-gray-500">Made with ❤️ for students and professionals</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
