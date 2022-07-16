import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Floating from '../../Components/FloatingDiv/Floating'
import Glassesimoji from '../../img/glassesimoji.png';
import { motion } from 'framer-motion';
const Intro = () => {

  const transition = { dutation: 2, type: 'spring' }

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Muhammad Hamza</span>
          <span>I am a professional Web Developer.</span>
        </div>
        <a href="https://www.facebook.com/profile.php?id=100007047435311">
        <button className="button i-button">Hire me</button>
        </a>
        <div className="i-icons">
        <a href="https://github.com/Hamza65523"><img src={Github} alt="" /></a>
        <a href="https://www.instagram.com/mhamza2012/"><img src={Instagram} alt="" /></a>
        <a href="https://www.linkedin.com/in/hamza-ali-a4123a187"><img src={LinkedIn} alt="" /></a>
          
          
        </div>
      </div>
      <div className="i-right">
        <div className="imgs">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="boy-circle"><img src={boy} alt="" /></div>
        <motion.img
          className='floating-img'
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition} src={Glassesimoji} alt="" />
        {/* <motion.div
          className='floating-div'
          initial={{ top: '-2%', left: '14rem' }}
          whileInView={{ left: "17rem" }}
          transition={transition} style={{ top: '-4%', left: '14rem' }}>
          <Floating image={Crown} txt1='Web' txt2='Developer' />
        </motion.div> */}
        <motion.div
          className='floating-div'
          initial={{ left: "8rem", top: "13.5rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition} style={{ top: '14.4rem', left: '6rem' }}>
          <Floating image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 ,210, 255)" }}></div>
        <div className="blur sp" style={{ background: "#C1F5FF", top: '25rem', width: '21rem', height: '11rem', left: '25rem' }}>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro