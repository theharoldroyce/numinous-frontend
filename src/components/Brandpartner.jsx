import React, { Component }  from 'react'
import Slider from "react-slick";
import Tribal from '../assets/brandpartner/cr1.png'
import Jbmusic from '../assets/brandpartner/cr2.png'
import Sauc from '../assets/brandpartner/cr3.webp'
import Tanlin from '../assets/brandpartner/cr4.webp'
import Tiger from '../assets/brandpartner/cr5.jpg'


export default class Brandpartner extends Component {
  render() {
    
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const  partener = [
      {
        id: 1,
        src: Tribal,
      },
      {
        id: 2,
        src: Jbmusic,
      },
      {
        id: 3,
        src: Sauc,
      },
      {
        id: 4,
        src: Tanlin,
      },
      {
        id: 5,
        src: Tiger,
      }
    ]
    return (
      <div className='overflow-hidden'>
        <div >
        <Slider {...settings}>
          {partener.map(({id,src}) =>(
             <div key={id} className='justify-items-center px-6'>
               <div className='w-36 gap-3'><img src={src} alt='/' className='h-20'/></div>
             </div>
           ))}
        </Slider>
        </div>
      </div>
    );
  }
}

