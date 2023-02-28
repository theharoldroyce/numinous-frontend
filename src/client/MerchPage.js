import React from 'react'
import { shirts } from '../Data'


function MerchPage() {
  return (
    <div>
      <div className='bg-[#323232] w-full h-full pb-10'>
        <h1 className='title'>Numinous Official Merch</h1>
        <div className='shopcard'>
          {shirts.map((obj) => (
            <div key={obj.id} className='shopcard2'>
              <img src={obj.src} alt="/" className="rounded-md px-10 py-3" />
              <div className='py-2'>
                <a href={obj.shp} target="_blank" rel="noopener noreferrer">
                  <button className="shopbtn">Buy now!</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MerchPage