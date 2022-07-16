import React from 'react'
import Toggle from '../Toggle/Toggle'
import Boy from '../../img/boy1.png'
import './Navbar.css';
import { Link } from 'react-scroll/modules';

const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <span><img src={Boy} alt="" width="80px"/></span>
                <div className="n-name">Muhammad Hamza </div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyle: "none" }}>
                        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                            <li>Home </li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true} >

                            <li>Services </li>
                        </Link>
                        <Link spy={true} to="Exprience" smooth={true} >

                            <li>Exprience</li>
                        </Link>
                        <Link spy={true} to="Portflio" smooth={true} >

                            <li>Portflio</li>
                        </Link>
                        <Link spy={true} to="Testimonials" smooth={true} >

                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <a href="https://wa.me/message/VL5KVRQR2AFWG1">
                <button className='button n-button' >
                    Contact us
                </button>
                </a>
            </div>
        </div>


    )
}

export default Navbar