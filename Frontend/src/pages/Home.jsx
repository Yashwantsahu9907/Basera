import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onSearchChange = (e) => setSearchTerm(e.target.value)

  const onSearchSubmit = () => {
    const q = searchTerm.trim()
    navigate(q ? `/listings?q=${encodeURIComponent(q)}` : '/listings')
  }

  return (
    <HeroSection
      searchTerm={searchTerm}
      onSearchChange={onSearchChange}
      onSearchSubmit={onSearchSubmit}
    />
  )
}

export default Home
