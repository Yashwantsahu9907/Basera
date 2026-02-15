import React from 'react'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = ({ onSearchChange, searchTerm, onSearchSubmit }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Find Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Perfect</span> Stay
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-light leading-relaxed">
            Discover verified accommodations in Bilaspur with photos, amenities, and direct contact details
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="p-8">
              <div className="flex items-center bg-gray-50 rounded-xl px-6 py-4 mb-6 shadow-inner">
                <FaSearch className="text-gray-400 mr-3 text-xl" />
                <input
                  type="text"
                  placeholder="Search by location, area, or room type..."
                  className="w-full bg-transparent outline-none text-gray-800 text-lg placeholder-gray-500"
                  value={searchTerm}
                  onChange={onSearchChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200">
                    <option>All Areas</option>
                    <option>River View Colony</option>
                    <option>Koni</option>
                    <option>Sipat Road</option>
                    <option>Nehru Chowk</option>
                    <option>Birkona</option>
                    <option>City Center</option>
                    <option>College Area</option>
                  </select>
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200">
                    <option>Any Budget</option>
                    <option>₹3,000 - ₹5,000</option>
                    <option>₹5,000 - ₹8,000</option>
                    <option>₹8,000 - ₹12,000</option>
                    <option>₹12,000+</option>
                  </select>
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200">
                    <option>All Types</option>
                    <option>PG</option>
                    <option>Room</option>
                    <option>Hostel</option>
                    <option>Shared Room</option>
                  </select>
                </div>
              </div>
              
              <button onClick={onSearchSubmit} className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg">
                <FaSearch className="inline mr-3" />
                Search Rooms
              </button>
            </div>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200 font-medium">Bilaspur Listings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 font-medium">Local Areas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 font-medium">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200 font-medium">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero