import React from 'react'
import './header.css'
import {BsChevronDoubleDown} from 'react-icons/bs'
import CV from '../../assets/KritikResume.pdf'
export const Header = () => {
  return (
    <>
      <section className="header__container" id='home'>
        <div className="details">
          <h2>Hi,</h2>
          <h1>My name is Kritik Manral</h1>
          <h2>Upcoming Software Engineer</h2>
          <div className="buttons">
            <a href={CV} className='btn-a' download>Download CV</a>
            <a href='#contact' className='btn-a'>Connect</a>
          </div>
        </div>
        <div className="photo">
        </div>
        <a href="#about">
          <BsChevronDoubleDown className='icon-btn down'/> 
        </a>
      </section>
    </>
  )
}
