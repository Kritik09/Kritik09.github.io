import React,{useState} from 'react'
import classes from './respnav.module.css';
import { NavLinks } from './NavLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { NavlinksMobile } from './NavlinksMobile'

export const RespNav = () => {
  const [flag,setFlag]=useState(false);
  const isClicked=()=>{
      setFlag(!flag);
  }
  const close=()=>setFlag(false)
  return (
      <div className={classes.respnav} id="navbar">
          <div className={classes.respnavlogo}>
              <a href="#" onClick={isClicked}><h1 id={classes.myName}><span>K</span>RITIK</h1></a>
          </div>
          <NavLinks/>
          {flag?<NavlinksMobile close={close}/>:null}      
          <div className={classes.hamburger__icon}>
            {flag?<AiOutlineClose onClick={isClicked}/>:<GiHamburgerMenu onClick={isClicked}/>}
          </div>
      </div>
  )
}
