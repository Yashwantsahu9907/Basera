import React from 'react'
import { FaFilter, FaRupeeSign, FaCheck } from 'react-icons/fa'

const SearchFilters = ({ filters, onFilterChange, onReset }) => {
  const facilitiesList = [
    'AC', 'WiFi', 'Food', 'Laundry', 'Parking', 
    'Security', 'GYM', 'TV', 'Geyser', 'Kitchen'
  ]

  const locations = [
    'River View Colony', 'Koni', 'Sipat Road', 'Nehru Chowk', 
    'Birkona', 'City Center', 'College Area', 'Main Road'
  ]

  const roomTypes = ['PG', 'Room', 'Hostel', 'Shared Room']
  const genders = ['Male', 'Female', 'Co-ed']

  const handlePriceChange = (type, value) => {
    const numValue = parseInt(value) || 0
    if (type === 'min') {
      onFilterChange({ ...filters, minPrice: numValue })
    } else {
      onFilterChange({ ...filters, maxPrice: numValue })
    }
  }

  const handleFacilityToggle = (facility) => {
    const updatedFacilities = filters.facilities.includes(facility)
      ? filters.facilities.filter(f => f !== facility)
      : [...filters.facilities, facility]
    onFilterChange({ ...filters, facilities: updatedFacilities })
  }

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 sticky top-24">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaFilter className="mr-3 text-blue-600" />
          Filters
        </h3>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-indigo-600 font-semibold transition-colors duration-200 underline"
        >
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">₹</span>
          <span className="ml-2">Price Range</span>
        </h4>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
            <div className="relative">
              <FaRupeeSign className="absolute left-4 top-4 text-gray-400" />
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full pl-12 p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
            <div className="relative">
              <FaRupeeSign className="absolute left-4 top-4 text-gray-400" />
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full pl-12 p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                placeholder="30000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4">📍 Location</h4>
        <select
          value={filters.location}
          onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Room Type */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4">🏠 Room Type</h4>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        >
          <option value="">All Types</option>
          {roomTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Gender */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4">👥 Gender</h4>
        <select
          value={filters.gender}
          onChange={(e) => onFilterChange({ ...filters, gender: e.target.value })}
          className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        >
          <option value="">All Genders</option>
          {genders.map(gender => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>
      </div>

      {/* Food Included */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4">🍽️ Food Included</h4>
        <div className="flex space-x-3">
          <button
            onClick={() => onFilterChange({ ...filters, foodIncluded: true })}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-200 ${
              filters.foodIncluded === true 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => onFilterChange({ ...filters, foodIncluded: false })}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-200 ${
              filters.foodIncluded === false 
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg transform scale-105' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            No
          </button>
          <button
            onClick={() => onFilterChange({ ...filters, foodIncluded: null })}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-200 ${
              filters.foodIncluded === null 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Any
          </button>
        </div>
      </div>

      {/* Facilities */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-800 mb-4">✨ Facilities</h4>
        <div className="grid grid-cols-2 gap-3">
          {facilitiesList.map(facility => (
            <button
              key={facility}
              onClick={() => handleFacilityToggle(facility)}
              className={`p-3 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 ${
                filters.facilities.includes(facility)
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filters.facilities.includes(facility) && (
                <FaCheck className="mr-2" size={12} />
              )}
              {facility}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default SearchFilters