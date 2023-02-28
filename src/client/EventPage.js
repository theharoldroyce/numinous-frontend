import axios from 'axios'
import React,{ useEffect }  from 'react'
import Eventhero from '../components/Eventhero'

function EventPage() {

  useEffect(() => {
    axios.get(`/api/getUpevent`).then(res =>{
      if(res.data.status === 200)
      {
        console.log(res.data.upevent);
      }

    });
  });
  
  return (
    <div className='bg-[#323232] w-full h-full'>
      <h1 className="title">Up comming Events</h1>
      <div className="card py-5 md:py-14 ">
        {/*{upcoming.map(({ id, src, title, date, loc }) => (
          <div key={id} className="card2">
            <div className="px-16 py-2">
              <img src={src} alt="/" className="rounded-md" />
            </div>
            <div className="cardtext">
              <p>{title}</p>
              <p>{date}</p>
              <p>{loc}</p>
            </div>
          </div>
        ))}*/}
      </div>
    </div>
  )
}

export default EventPage