import React from 'react'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Service from '../Services/Services.css';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import {motion, useSpring} from 'framer-motion';
const Services = () => {
  const transition = {duration:1 , type:"spring"}
  return (
    <div className='services' id='Services'>
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I am providing some awesome serivces like that.
        </span>
        <a href={Resume}>
        <button className="button s-button">Download cv</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF!FF94' }}></div>
      </div>
      <div className="cards">
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25%'}}
        transition={transition} style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Photoshop'} />
        </motion.div>
        {/* Second Card  */}
        <motion.div
        initial={{left:"25%"}}
        whileInView={{left:'0rem'}}
        transition={transition} style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html ,Css, JavaScript, React'} />
        </motion.div>
        <motion.div
        initial={{left:"25%"}}
        whileInView={{left:'14rem'}}
        transition={transition} style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'Software'}
            detail={'Microsoft Office, Filmora'} />
        </motion.div>
        <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        <div className="blur s-blur1" style={{background:'rgb(193, 245, 255)'}}></div>
      </div>
    </div>
  )
}

export default Services