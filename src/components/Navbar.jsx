import React from 'react'
import '../styles/customStyle.css'

// picture
import logo from '../Assets/Logo.svg'

function Navbar() {

    return (
        <div className="z-0">
            {/* Dekstop */}
            <div>
                <header className="hidden md:flex md:flex-row md: items-center md:justify-between">
                    <div className="md:flex md:flex-row items-center">
                        <img  className="mr-4"src={logo} alt=".."/>
                        <span className="mx-4 p-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-2xl text-sm text-white px-2">Hoster is hiring!</span>
                    </div>
                    <div>
                        <ul className="md:flex md:flex-row items-center">
                            <li className="opacity-75 md:mx-4 transition duration-500 ease-in-out hover:font-bold hover:cursor-pointer">Plans</li>
                            <li className="opacity-75 md:mx-4 transition duration-500 ease-in-out hover:font-bold hover:cursor-pointer">Find Domain</li>
                            <li className="opacity-75 md:mx-4 transition duration-500 ease-in-out hover:font-bold hover:cursor-pointer">Why Hoster</li>
                        </ul>
                    </div>
                    <div className="md:flex md:flex-row items-center">
                        <a className="mx-4 transition duration-500 ease-in-out hover:font-bold hover:cursor-pointer" href="#signin">Sign in</a>
                        <a className="customButton mx-4 text-white bg-blue-600 rounded-md px-5 py-3" href="#waitlist">Join Waitlist</a>
                    </div>
                </header>
            </div>

            {/* mobile */}
            <div className="md:hidden flex flex-start items-center">
                <div className="flex flex-row items-center">
                    <img  className="mr-4"src={logo} alt=".."/>
                    <span className="mx-4 p-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-2xl text-sm text-white px-2">Hoster is hiring!</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
