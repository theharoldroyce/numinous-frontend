import React from 'react'
import Famart from '../assets/fam.jpg'

const Artisthero = () => {
  return (
    <div className="bg-[#323232] w-full h-full">
      <h1 className="title">Meet Our Loudest Artists</h1>
      <div>
        <div className="p-7">
          <img src={Famart} alt="/" className="arthero" />
        </div>
      </div>
    </div>
  );
}

export default Artisthero

