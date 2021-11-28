import React from 'react'

// picture
import avatar from '../Assets/Help Avatar.svg'; 

function Footer() {
    return (
        <div className="flex md:flex-row md:justify-between md:items-center">
            <div className="left">
                <ul className="md:flex md:flex-row">
                    <li className="opacity-75 md:mr-5 ">Facebook</li>
                    <li className="opacity-75 md:mr-5 ">Instagram</li>
                    <li className="opacity-75 md:mr-5 ">Twitter</li>
                </ul>
            </div>      
            <div className="right flex md:flex-row md:items-center md:justify-center">     
                <img src={avatar} alt=".." />
                <div className="flex md:flex-col md:ml-3">
                    <span>Have any question?</span>
                    <span><strong>Talk to a specialist</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
