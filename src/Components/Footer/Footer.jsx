import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>mhamzaking2020@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/mhamza2012/"><Insta color='white' size='3rem'/></a>
                <a href="https://www.facebook.com/profile.php?id=100007047435311"><Facebook color='white' size='3rem'/></a>
                <a href="https://github.com/Hamza65523"><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer