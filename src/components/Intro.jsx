import React from 'react'
import '../styles/customStyle.css'

// picture
import heroImage from '../Assets/hero.png';
import check from '../Assets/Checkmark.svg';
import purple from '../Assets/Purple Shape.svg';
import pink from '../Assets/Pink Shape.svg';
import blue from '../Assets/Blue Shape.svg';


function Intro() {
    return (
        <div className="flex flex-col-reverse md:flex-row md:items-center md:my-18">
            <div className="left w-full md:w-1/2 md:mr-12">
                {/* dekstop */}
                <h1 className="hidden md:block md:text-5xl md:font-bold md:leading-tight my-2">Host your website in less than 5 minutes.</h1>

                {/* mobile */}
                <div className="md:hidden flex flex-col">
                    <p className="text-4xl font-bold my-2 whitespace-nowrap">Host Your</p>
                    <p className="text-4xl font-bold my-2 whitespace-nowrap">Website in Less</p>
                    <p className="text-4xl font-bold my-2 whitespace-nowrap">than 5 minutes.</p>
                </div>
                <p className="text-xl w-full mt-3 opacity-75 md:w-5/6">With hosterr, get your website up and running in on less than 5 minutes with most competitive pricing packages available online.</p>
                <div className="flex flex-col md:flex-row md:my-3">
                    <input className="px-3 py-3 rounded-md my-2 md:px-5 md:py-3 md:rounded-sm" type="text" placeholder="Enter e-mail address" />
                    <button className="customButton px-3 py-3 rounded-md my-2 text-white bg-blue-600 md:px-5 md:py-3 md:rounded-md md:mx-3">Join Waitlist</button>
                </div>
                <div className="flex md:flex-row md:items-center">
                    <img src={check} alt=".." size="0.75em" />
                    <span className="opacity-75 mx-3 md:text-sm">No spam, ever. Unsubscribe anytime.</span>
                </div>
            </div>
            <div className="right relative my-56 justify-center items-center flex md:justify-center md:items-center md:w-1/2">
                <div className="absolute w-4/5 md:w-3/5 z-40">
                    <img src={heroImage} alt=".." />
                </div>
                <div className="absolute w-4/5 md:w-3/5 z-30">
                    <img className="purple" src={purple} alt=".." />
                </div>
                <div className="absolute w-4/5 md:w-3/5 z-20">
                    <img className="pink" src={pink} alt=".." />
                </div>
                <div className="absolute w-4/5 md:w-3/5 z-10">
                    <img className="blue" src={blue} alt=".." />
                </div>
            </div>
        </div>
    )
}

export default Intro
