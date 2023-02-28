import React from 'react'
import Caution from '../assets/caution.png'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="w-full h-screen flex bg-[#323232] text-[#14FFEC]">
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto justify-items-center items-center'>
                <div className='p-5'>
                    <img src={Caution} alt="/" className='w-40 h-40' />
                </div>
                <div className='p-5'>
                    <p className='text-center text-xl md:text-2xl font-sfbold p2'>404</p>
                    <p className='text-center text-base md:text-xl p-2'>Ooops!</p>
                    <p className='text-base md:text-xl p-2'>Sorry! The page you're looking for cannot be found.</p>
                    <Link to='/'><p className='text-center text-base md:text-xl p-2'>Go Back to Home</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Error