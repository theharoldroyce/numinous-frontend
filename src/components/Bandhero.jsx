import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook,BsInstagram,BsYoutube,BsSpotify } from "react-icons/bs";
import {items } from '../Data'

const Bandhero = () => {
  return (
    <div className='bg-[#323232] w-full h-full pt-6 pb-10'>
    {items.map(({ id,band,dsc,mem,src,fb,ig,yt,spt}) => (
      <div key={id} className='bandcard'>
        <div className='grid md:grid-cols-2 m-auto gap-7'>
          <div  className='flex flex-col justify-center'>  
            <div  className='text-center px-1'>
              <p className="text-xl font-sfbold text-white px-2">{band}</p>
              <p className='bandsc'>
                {dsc}
              </p>
              <p className="text-lg font-sfmid text-white">Members</p>
              <p className='bandsc'>
                {mem}
              </p>
            </div>             
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-2">
              <img className="m-auto p-2" src={src} alt="/" />
              <div className="p-2">
                <ul className="flex justify-center gap-7">
                  <li>
                    <a href={fb} target="_blank" rel="noopener noreferrer"><BsFacebook className='bandsocial'/></a>
                  </li>
                  <li>
                    <a href={ig} target="_blank" rel="noopener noreferrer"><BsInstagram className='bandsocial'/></a>               
                  </li>
                  <li>
                    <a href={yt} target="_blank" rel="noopener noreferrer"><BsYoutube className='bandsocial'/></a>                    
                  </li>
                  <li>
                    <a href={spt} target="_blank" rel="noopener noreferrer"><BsSpotify className='bandsocial'/></a>                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to='/contactcard'><button className='btnsm'>Book us now!</button></Link>
      </div>
      ))}
    </div>
  );
}

export default Bandhero