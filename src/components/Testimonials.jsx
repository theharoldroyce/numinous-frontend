import React, { Component }  from 'react'
import Slider from "react-slick";

export default class Testimonials extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    const testimonials = [
        {
         id: 1,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
        {
         id: 2,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
        {
         id: 3,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
        {
         id: 4,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
        {
         id: 5,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
        {
         id: 6,
         title: 'Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit ametmod tempor incididunt ut labore et dolore magna aliqua.',
         sub: 'Jhon Doe',
        },
    ]
    return (
      <div className='overflow-hidden'>
      <div>
        <Slider {...settings}>
        {testimonials.map((obj) =>(
            <div key={obj.id} className='w-5/12 px-11 md:px-40 lg:px-72'>
               <div className='items-center text-center text-white text-md'>
                  <p>{obj.title}</p>
                  <p>{obj.sub}</p>
                </div>
            </div>
           ))}
        </Slider>
      </div>
      </div>
    );
  }
}