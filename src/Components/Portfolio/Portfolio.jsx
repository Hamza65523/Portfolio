import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Ecommerce1 from '../../img/Ecommerce/Ecommerce1.png';
import Ecommerce2 from '../../img/Ecommerce/Ecommerce2.png';
import Ecommerce3 from '../../img/Ecommerce/Ecommerce3.png';
import Ecommerce4 from '../../img/Ecommerce/Ecommerce4.png';
import Ecommerce5 from '../../img/Ecommerce/Ecommerce5.png';
import Ecommerce6 from '../../img/Ecommerce/Ecommerce6.png';
import Fastfoood1 from '../../img/Fastfood/fastfood1.png';
import Fastfoood2 from '../../img/Fastfood/fastfood12.png';
import Fastfoood3 from '../../img/Fastfood/fastfood123.png';
import Fastfoood4 from '../../img/Fastfood/fastfood1234.png';
import Fastfoood5 from '../../img/Fastfood/fastfood12345.png';
import Fastfoood6 from '../../img/Fastfood/fastfood123456.png';
import Socialmedia1 from '../../img/Socialmedia/1.png';
import Socialmedia2 from '../../img/Socialmedia/2.png';
import Socialmedia3 from '../../img/Socialmedia/3.png';
import Socialmedia4 from '../../img/Socialmedia/4.png';
import Socialmedia5 from '../../img/Socialmedia/5.png';
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className='portfolio' id='Portflio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Ecommerce1} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce6} alt="" />
            </SwiperSlide>
        </Swiper>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Fastfoood1} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fastfoood2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fastfoood3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fastfoood4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fastfoood5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fastfoood6} alt="" />
            </SwiperSlide>
        </Swiper>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Socialmedia1} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={Socialmedia2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Socialmedia3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Socialmedia4} alt="" />
            </SwiperSlide>
        
        </Swiper>
        
    </div>
  )
}

export default Portfolio