import React, { useEffect, useState } from 'react'
import { FaFilter, FaTimes } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { roomsData } from '../data/rooms'

import SearchFilters from '../components/listings/SearchFilters'
import RoomCard from '../components/listings/RoomCard'
import BookingModal from '../components/listings/BookingModal'

const Listings = () => {
  const [searchParams] = useSearchParams()

  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [bookingModal, setBookingModal] = useState({ isOpen: false, room: null })

  // Initial filters
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 30000,
    location: '',
    type: '',
    facilities: [],
    gender: '',
    foodIncluded: null,
  })

  // Load rooms
  useEffect(() => {
    setRooms(roomsData)
    setFilteredRooms(roomsData)
  }, [])

  // Read query param ?q=
  useEffect(() => {
    const q = searchParams.get('q') || ''
    setSearchTerm(q)
  }, [searchParams])

  // Apply filters + search
  useEffect(() => {
    const result = rooms.filter((room) => {
      // Price
      if (room.price < filters.minPrice || room.price > filters.maxPrice) return false

      // Location filter (matches location string)
      if (
        filters.location &&
        !room.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        !room.area.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false
      }

      // Type
      if (filters.type && room.type !== filters.type) return false

      // Gender
      if (filters.gender && room.gender !== filters.gender) return false

      // Food
      if (filters.foodIncluded !== null && room.foodIncluded !== filters.foodIncluded) return false

      // Facilities
      if (filters.facilities.length > 0) {
        const hasAll = filters.facilities.every((f) => room.facilities.includes(f))
        if (!hasAll) return false
      }

      // Search term
      if (searchTerm) {
        const s = searchTerm.toLowerCase()
        return (
          room.title.toLowerCase().includes(s) ||
          room.description.toLowerCase().includes(s) ||
          room.area.toLowerCase().includes(s) ||
          room.location.toLowerCase().includes(s) ||
          room.type.toLowerCase().includes(s)
        )
      }

      return true
    })

    setFilteredRooms(result)
  }, [filters, rooms, searchTerm])

  const handleResetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 30000,
      location: '',
      type: '',
      facilities: [],
      gender: '',
      foodIncluded: null,
    })
    setSearchTerm('')
  }

  const openBookingModal = (room) => setBookingModal({ isOpen: true, room })
  const closeBookingModal = () => setBookingModal({ isOpen: false, room: null })

  return (
    <div className="container mx-auto px-4 py-12" id="listings">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        aria-label="Toggle filters"
      >
        {showMobileFilters ? <FaTimes size={24} /> : <FaFilter size={24} />}
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`md:w-1/4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
          <SearchFilters filters={filters} onFilterChange={setFilters} onReset={handleResetFilters} />
        </div>

        {/* Room Listings */}
        <div className="md:w-3/4">
          {/* Search Input */}
          <div className="mb-6" id="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, area, location, type..."
              className="w-full bg-white rounded-xl px-4 py-3 shadow border border-gray-100 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Available Accommodations ({filteredRooms.length})
            </h2>

            <button
              onClick={handleResetFilters}
              className="text-blue-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>

          {filteredRooms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-8xl mb-6">🏠</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-3">No rooms found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search filters</p>
              <button
                onClick={handleResetFilters}
                className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} onBook={openBookingModal} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={bookingModal.isOpen} onClose={closeBookingModal} room={bookingModal.room} />
    </div>
  )
}

export default Listings
