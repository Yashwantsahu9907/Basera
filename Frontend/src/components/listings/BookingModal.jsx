import React, { useState } from 'react'
import { FaTimes, FaCalendar, FaUser, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa'

const BookingModal = ({ isOpen, onClose, room }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    duration: '1',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the booking request to your backend
    console.log('Booking request:', { room, bookingDetails })
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setBookingDetails({
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        duration: '1',
        message: ''
      })
      setIsSubmitted(false)
      onClose()
    }, 3000)
  }

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Book {room.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <FaCheck size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Booking Request Sent!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We have received your booking request for <span className="font-semibold text-blue-600">{room.title}</span>.<br />
                The owner will contact you shortly at <span className="font-semibold">{bookingDetails.phone}</span>.
              </p>
            </div>
          ) : (
            <>
              {/* Room Info */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8 border border-blue-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <img
                      src={room.photos[0]}
                      alt={room.title}
                      className="w-full md:w-48 h-32 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Available
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {room.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Price:</span>
                        <span className="font-bold ml-2 text-blue-600">₹{room.price.toLocaleString()}/month</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Deposit:</span>
                        <span className="font-bold ml-2 text-gray-800">₹{room.depositAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Location:</span>
                        <span className="ml-2 text-gray-800">{room.area}, {room.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Contact:</span>
                        <span className="ml-2 text-gray-800">{room.contactNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <FaUser className="inline mr-2 text-blue-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <FaPhone className="inline mr-2 text-blue-500" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <FaEnvelope className="inline mr-2 text-blue-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <FaCalendar className="inline mr-2 text-blue-500" />
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={bookingDetails.checkInDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Duration (Months) *
                    </label>
                    <select
                      name="duration"
                      value={bookingDetails.duration}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium bg-white"
                    >
                      <option value="1">1 Month</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={bookingDetails.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-medium"
                    rows="4"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="mb-8">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I agree to the terms and conditions and understand that a booking confirmation is subject to availability and owner approval.
                    </span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 font-semibold transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  >
                    Request Booking
                  </button>
                </div>
              </form>

              {/* Important Notes */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">⚠️</span>
                  Important Notes:
                </h4>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    This is a booking request, not a confirmed booking
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    The owner will contact you within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    Deposit amount is refundable as per owner's policy
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    Visit the property before finalizing the booking
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingModal