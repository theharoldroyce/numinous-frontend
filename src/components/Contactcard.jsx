import React from 'react'

const Contactcard = () => {
  return (
    <div className="bg-[#323232] w-full h-full">
        <div className="pt-5 pb-20">
          <p className="title">Contact us</p>
          <div className="aboutcrd ">
            <div className="title pt-2">
              <p>Ready to elevate your event experience?</p>
            </div>
            <p className="py-3 px-8 aboutdsc">
              Let's chat. Send us a note and we will get the conversation
              started with an <span className="text-[#14FFEC] ">NUMINOUS </span>
              team member.
            </p>
            <div className="p-4 lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div className="ccard">
                  <div>
                    <input className="cinput" placeholder="First name" type="text" id="fname" name='Fname'/>
                  </div>
                  <div>
                    <input className="cinput" placeholder="Last name" type="text" id="lname" name='Lname'/>
                  </div>
                </div>

                <div className="ccard">
                  <div>
                    <input className="cinput" placeholder="Email address" type="email" id="emailadd" name='Email'/>
                  </div>
                  <div>
                    <input className="cinput" placeholder="Tel or Phone Number" type="tel" id="phone" name='Number'/>
                  </div>
                </div>

                <div>
                  <input className="cinput" placeholder="Company Name"  type="text" id="cname" name='Cname'/>
                </div>

                <div>
                  <textarea className="cinput" placeholder="Message" rows="4" id="message" name='Massage'></textarea>
                </div>
                <div className="mt-4">
                  <button className="cbtn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contactcard