import React from 'react'
import './contact.css'
import {BsWhatsapp,BsTelegram} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
export const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_qxqr4yr', 'template_jyhakfn', form.current, 'y2G0744xeXfBfaPFl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
      <section id="contact">
        <div className="contact__main__container">
          <h1>Let's Talk</h1>
          <div className="contact__container">
            <div className="contact__social__links">
              <div className="icon__area">
                <BsWhatsapp className='contact__icons'/>
                <h4>WhatsApp</h4>
                <a href="https://api.whatsapp.com/send?phone=+918755130890" target='_blank'>Send Message!</a>
              </div>
              <div className="icon__area">
                <HiMail className='contact__icons'/>
                <h4>E-Mail</h4>
                <a href="mailto:kritikmanral1@gmail.com" target='_blank'>Send E-Mail!</a>
              </div>
              <div className="icon__area">
                <BsTelegram className='contact__icons'/>
                <h4>Telegram</h4>
                <a href="https://msng.link/o/?Kritik_09=tg" target='_blank'>Send Message!</a>
              </div>
            </div>
            <div className="message__area">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='butn'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}
