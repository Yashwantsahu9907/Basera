import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaBed, FaRupeeSign, FaStar, FaCheck, FaFemale, FaMale, FaUsers, FaRegHeart, FaHeart } from 'react-icons/fa'

const RoomCard = ({ room, onBook }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const getGenderIcon = () => {
    switch (room.gender) {
      case 'Male': return <FaMale className="text-blue-500" />
      case 'Female': return <FaFemale className="text-pink-500" />
      case 'Co-ed': return <FaUsers className="text-green-500" />
      default: return null
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 group">
      {/* Favorite button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-400 text-lg group-hover:text-red-400 transition-colors duration-300" />
        )}
      </button>

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.photos[0]}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              room.available 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-red-500 text-white shadow-lg'
            }`}>
              {room.available ? 'Available Now' : 'Booked'}
            </span>
            <div className="flex items-center bg-black/60 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-lg">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="font-bold">{room.rating}</span>
            </div>
          </div>
          
          {/* Price badge */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 inline-block shadow-lg">
            <div className="flex items-center text-gray-800">
              <FaRupeeSign className="text-lg" />
              <span className="text-2xl font-bold ml-1">{room.price.toLocaleString()}</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Gender */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">{room.title}</h3>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            {getGenderIcon()}
            <span className="ml-2 text-sm font-medium text-gray-700">{room.gender}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="mr-3 text-blue-500" />
          <span className="font-medium">{room.area}, {room.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-2">{room.description}</p>

        {/* Deposit and Food Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-5">
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Deposit:</span> ₹{room.depositAmount.toLocaleString()}
          </div>
          <div className="flex items-center">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              room.foodIncluded 
                ? 'bg-green-100 text-green-700' 
                : 'bg-orange-100 text-orange-700'
            }`}>
              {room.foodIncluded ? '🍽️ Food Included' : '🍽️ Food Extra'}
            </span>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-3">Top Facilities:</div>
          <div className="flex flex-wrap gap-2">
            {room.facilities.slice(0, 4).map(facility => (
              <span
                key={facility}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs px-3 py-2 rounded-full flex items-center font-medium border border-blue-200"
              >
                <FaCheck className="mr-1" size={10} />
                {facility}
              </span>
            ))}
            {room.facilities.length > 4 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-2 rounded-full font-medium">
                +{room.facilities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => onBook(room)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center"
          >
            <FaBed className="mr-2" />
            Book Now
          </button>
          <a
            href={`tel:${room.contactNumber}`}
            className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <FaPhone className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default RoomCard