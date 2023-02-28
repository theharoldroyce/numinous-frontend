import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillMail, AiFillPhone, AiFillHome } from "react-icons/ai";
function Foother() {
    return (
        <div className="w-full h-3/5 bg-[#323232]">
            <div className="h-0.5 w-10/12 bg-white mx-auto"></div>
            <div className="ftitle">
                <p>We are Numinous. Spreading fire.</p>
            </div>
            <div className="fcol">
                <div className="fcard">
                    <div>
                        <p className="ficon"><AiFillPhone className='ficontxt ' />+639 919 061 3018</p>
                        <p className='ficon'><AiFillHome className='ficontxt' />Imus,Cavite Philippines</p>
                        <p className="ficon"><AiFillMail className='ficontxt' />numinouseventsph@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-sfbold text-lg text-white">Follow us on our Social Media</p>
                        <div className='flex gap-10 px-8 py-2 text-[#14FFEC] '>
                            <a href='https://www.facebook.com/profile.php?id=100066841567294' target="_blank" rel="noopener noreferrer"><BsFacebook className='fsocial' /></a>
                            <a href='https://www.instagram.com/numinous_philippines/' target="_blank" rel="noopener noreferrer"><BsInstagram className='fsocial' /></a>
                            <a href='https://www.youtube.com/c/NuminousTV' target="_blank" rel="noopener noreferrer"><BsYoutube className='fsocial' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='fsub'>Terms of Use Privacy Policy Contact Us</p>
            <p className='farr'>© 2022 NUMINOUS. All Rights Reserved</p>
        </div>
    )
}

export default Foother