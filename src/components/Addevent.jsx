import React from 'react'

function Addevent () {
  return (
    <section>
    <div className="bg-[#323232] w-full h-full">
      <div className="regcard">
        <main className="regmain">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="regtitle">Add Event</h1>
            <form  onSubmit='' className="regform">

              <div className="col-span-6">
                <label className="reglbl">Event Title</label>
                <input type="text" id="name" name="name" onChange=''value=''  className="regimp" />
                <span className='text-red-600'></span>
              </div>

              <div className="col-span-6">
                <label className="reglbl">Event Location</label>
                <input type="text" id="location" name="location" onChange=''value=''  className="regimp" />
                <span className='text-red-600'></span>
              </div>

              <div className="col-span-6">
                <label className="reglbl">Event Date</label>
                <input type="text" id="dates" name="dates" onChange=''value=''  className="regimp" />
                <span className='text-red-600'></span>
              </div>

              <div className="col-span-6">
                <label className="reglbl">Event Poster</label>
                <input type="file" id="Photo" name="photo" onChange=''value=''  className="regimp" />
                <span className='text-red-600'></span>
              </div>

              <div className="regfrd2">
                <button type="submit" className="regbtn"> Create an Event</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </section>
  )
}

export default Addevent