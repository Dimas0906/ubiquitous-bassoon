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
        <div className="md:flex md:flex-row md:items-center md:my-20">
            <div className="left md:w-1/2 md:mr-12">
                <h1 className="md:text-5xl md:font-bold md:leading-tight my-2">Host your website in less than 5 minutes.</h1>
                <p className="opacity-75 md:w-5/6">With hosterr, get your website up and running in on less than 5 minutes with most competitive pricing packages available online.</p>
                <div>
                    <input className="md:px-3 md:py-3 md:my-3 bg-white" type="text" placeholder="Enter e-mail address" />
                    <button className="bg-blue-600 text-white md:px-5 md:py-3 md:rounded-sm md:mx-2">Join Waitlist</button>
                </div>
                <div className="flex md:flex-row md:items-center">
                    <img src={check} alt=".." size="0.75em" />
                    <span className="opacity-75 md:mx-3 md:text-sm">No spam, ever. Unsubscribe anytime.</span>
                </div>
            </div>
            <div className="right md:relative flex md:justify-center md:items-center md:w-1/2">
                <div className="md:absolute md:w-3/5 z-40">
                    <img src={heroImage} alt=".." />
                </div>
                <div className="md:absolute md:w-3/5 z-30">
                    <img className="purple" src={purple} alt=".." />
                </div>
                <div className="md:absolute md:w-3/5 z-20">
                    <img className="pink" src={pink} alt=".." />
                </div>
                <div className="md:absolute md:w-3/5 z-10">
                    <img className="blue" src={blue} alt=".." />
                </div>
            </div>
        </div>
    )
}

export default Intro
