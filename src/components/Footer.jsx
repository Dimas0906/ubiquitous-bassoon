import React from 'react'

// picture
import avatar from '../Assets/Help Avatar.svg'; 

function Footer() {
    return (
        <div className="flex flex-col mb-16 mt-8 md:mt-0 md:flex-row md:justify-between md:items-center md:mb-0">
            <div className="left mb-5 md:my-0">
                <ul className="flex flex-row">
                    <li className="opacity-75 mr-5 ">Facebook</li>
                    <li className="opacity-75 mr-5 ">Instagram</li>
                    <li className="opacity-75 mr-5 ">Twitter</li>
                </ul>
            </div>      
            <div className="right flex md:flex-row md:items-center md:justify-center">     
                <img src={avatar} alt=".." />
                <div className="flex flex-col ml-3">
                    <span>Have any question?</span>
                    <span><strong>Talk to a specialist</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
