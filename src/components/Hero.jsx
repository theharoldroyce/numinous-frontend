import React from "react";
import Brandpartner from "./Brandpartner";
import Testimonials from "./Testimonials";
import Orca from '../assets/work/orca.webp'
import Woaph from '../assets/work/woaph.webp'
import Woaup from '../assets/work/woaph.webp'
import Vocwaken from '../assets/work/vocwaken.webp'
import CVtour from '../assets/work/cvtour.webp'
import Uprising from '../assets/work/queso.webp'
import Queso from '../assets/work/orca.webp'
import Vocham from '../assets/work/vochammer.webp'
import Team from '../assets/icons/team.png'
import Target from '../assets/icons/target.png'
import Tech from '../assets/icons/tech.png'


const Hero = () => {

  const workcard = [
    {
     src: Orca,
     title: "ORCA Perform at Waken Open Air In Germany 2022",
    },
    {

     src: Woaph,
     title: "W:O:A Metal Battle Philippines 2022",
    },
    {
     src: Woaup,
     title: "W:O:A Metal Battle Philippines Warm Up Show 2022",
    },
    {

     src: Vocwaken,
     title: "Valley of Chrome Live at Waken Open Air Germany 2019",
    },
    {

     src: CVtour,
     title: "Crowns & Vikings Tour 2017 ",
    },
    {

     src: Uprising,
     title: "UPRIISING Wagayway Music Festival 2019",
    },
    {

     src: Queso,
     title: "QUESO Silence Music Festival 2019",
    },
    {

     src: Vocham,
     title: "Valley of Chrome Live at HammerSonic Music Festival 2018",
    },
  ]
  const services = [
    {
      title: 'Virtual Event Production',
      sub: 'With an interactive virtual event experience, your attendees will be able to engage with your speakers, and your brand, in a whole new way.',
     },
    {
      title: 'Hybrid Event Production',
      sub: 'A hybrid event combines the best of virtual & in-person experiences. We can help you explore new ways to bring people together.',
     },
    {
      title: 'In-Person Event Production',
      sub: 'While in-person events have been halted, they will come back. From user conferences to sales kickoffs, executive meetings, and more – we’ve helped clients like you do it all.',
     },
  ]
  const heroo = [
    {
      src:Team,
      title:'A Reliable Team',
      sub:'to support you',
      cont:'We give you a team of dreamers, innovators, problem-solvers, and tech geeks that, together will help you create some pretty epic event experiences. But our support really shines when it comes to execution, because the success of every event really comes down to the details.',
    },
    {
      src:Target,
      title:'A Strategy',
      sub:'that works for you',
      cont:'Your event is an extension of your brand, customer experience, and company culture. We will help you approach your event holistically within the context of your other initiatives. Strategy isn’t an add-on service, it’s the fuel that drives the creative process.',
    },
    {
      src:Tech,
      title:'A Technology',
      sub:'as your secret weapon',
      cont:'Our proprietary technology for your virtual, live, or hybrid event will create captivating experiences for your audiences that purposefully engage, enable rich interactivity, and deliver meaningful content. If you’re looking for more ROI, you’ve found it.',
    },
  ]

  

  return (
    <div className='bg-[#323232] w-full h-full'>
        <h1 className='title pt-14'>Your Experiential Event Production Partner</h1>
        <div>
          <p className='subtitle'>If you handle events for your organization, you face a lot of unknowns—and a lot of pressure. From managing people to coordinating content, to synchronizing lighting, sound, and visuals, putting an engaging event together takes meticulous planning and careful implementation. Without help, this can feel very overwhelming. That’s where NUMINOUS is here to help you.</p>
        </div>

        <h1 className="title">Our Works</h1>
      <div className="card py-5 md:py-14 ">
        {workcard.map((obj,index) => (
          <div  key={index} className="card2">
            <div className="px-16 py-2">
              <img src={obj.src} alt="/" className="rounded-md" />
            </div>
            <div className="cardtext">
              <p>{obj.title}</p>
            </div>
          </div>
        ))}
      </div>

        <h1 className='title'>Here Are A Few Ways We Can Work Together</h1>
        <div className='card3 py-14'>
           {services.map((obj,index) =>(
            <div key={index} className='card3sub'>
              <p className='ptitle'>{obj.title}</p>
              <p className='psub'>{obj.sub}</p>
            </div>
          ))}
        </div>
        <h1 className='title'>Our Brand Partners</h1>
        <div className="py-10">
          <Brandpartner/>
        </div>
        <h1 className='title'>Testimonials</h1>
        <div className="py-10">
         <Testimonials/>
        </div>
        <div className='cardd3 py-14'>
           {heroo.map((obj,index) =>(
            <div key={index} className='card3sub'>
              <div className='m-auto py-3 h-16 w-16'>
                 <img src={obj.src} alt='/' />
              </div>
              <p className='pt'>{obj.title}</p>
              <p className='p'>{obj.sub}</p>
              <p className='pcont'>{obj.cont}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Hero