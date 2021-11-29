import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import './styles/output.css'
import './styles/customStyle.css'
import './styles/loader.css'

// icons
import { BiNotepad, BiQuestionMark, BiListCheck } from 'react-icons/bi';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(true)
    }, 4000)
  }, [])

  return (
    <div>
      {
        loading ?
          <div>
            <div className="overflow-hidden App mx-10 my-5 md:mx-24 md:my-12">
              <Navbar />
              <Intro />
              <Footer />
            </div>

            {/* mobile nav */}
            <div className="md:hidden fixed bottom-0 h-16 bg-blue-600 text-white w-screen z-50">
              <ul className="flex flex-row justify-between items-center py-3 mx-5">
                <li className="flex flex-col justiffy-center items-center">
                  <BiNotepad size="1.5em" />
                  <span>Plans</span>
                </li>
                <li className="flex flex-col justiffy-center items-center">
                  <BiListCheck size="1.5em" />
                  <span>Find Domain</span>
                </li>
                <li className="flex flex-col justiffy-center items-center">
                  <BiQuestionMark size="1.5em" />
                  <span>Why Hoster</span>
                </li>
              </ul>
            </div>
          </div>
          :
          <div className="container-loader">
            <span class="loader"></span>
          </div>
      }
    </div>
  )
}

export default App
