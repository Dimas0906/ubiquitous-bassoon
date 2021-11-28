import React from 'react'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import './styles/output.css'

function App() {
  return (
    <div className="App md:mx-24 my-12">
      <Navbar />
      <Intro />
      <Footer />
    </div>
  )
}

export default App
