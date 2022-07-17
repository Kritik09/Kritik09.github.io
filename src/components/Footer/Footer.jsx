import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin,BsTelegram} from 'react-icons/bs'
export const Footer = () => {
  return (
      <div className="footer__main__container" id='footer'>
          <div className="footer__icons">
            <div className="individual__icon fb"><a href="https://www.facebook.com/Kritik09" target="_blank"> <BsFacebook/></a></div>
            <div className="individual__icon ins"><a href="https://www.instagram.com/kritik__09/" target="_blank"> <BsInstagram/></a></div>
            <div className="individual__icon git"><a href="https://github.com/Kritik09" target="_blank"> <BsGithub/></a></div>
            <div className="individual__icon lin"><a href="https://www.linkedin.com/in/kritik-manral/" target="_blank"> <BsLinkedin/></a></div>
          </div>
          <h2>KRITIK MANRAL</h2>
          <div className="publish">
              <h4>Copyright &copy; 2022 | All Rights Reserved</h4>
              <h4>This Website Is Designed And Developed By Kritik Manral</h4>
          </div>
      </div>
  )
}
