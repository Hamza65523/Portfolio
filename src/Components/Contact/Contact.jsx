import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css'
const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_51mllo8', 'template_iladn09', form.current, 'YF5DiHVAXysn_CAJx')
            .then((result) => {
                console.log(result.text);         
                 setDone(true);       
            }, (error) => {
                console.log(error.text);
            });

    };



    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: 'ABf1ff94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Name' id="user" />
                    <p id='usererror'></p>
                    <input type="email" name="user_email" className='user' placeholder='Email' id="email" />
                    <p id='emailerror'></p>
                    <textarea name='message' className='user' placeholder='Message' id='textarea' />
                    <p id='texterror'></p>
                    <input type="submit" value='Send' className='button' name="" id="" />
                    <span>{done && "Thanks for Conatact Me!"}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purpler)' }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact