import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          For inquiries or support, email us at <a href="mailto:hello@basera.local" className="text-blue-600">hello@basera.local</a>
        </p>

        <form className="space-y-4 max-w-xl">
          <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Your name" />
          <input className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Email" />
          <textarea className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="Message" rows={6} />
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
