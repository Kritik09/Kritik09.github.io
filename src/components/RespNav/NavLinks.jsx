import React from 'react'
import classes from './respnav.module.css'
export const NavLinks = () => {
  return (
    <div className={classes.respnav__links}>
        <div className={classes.respnav__link}>
            <a href="#home" className={classes.respnav__item}><h2>HOME</h2></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#about" className={classes.respnav__item}><h2>ABOUT</h2></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#achievements" className={classes.respnav__item}><h2>ACHIEVEMENTS</h2></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#skills" className={classes.respnav__item}><h2>SKILLS</h2></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#projects" className={classes.respnav__item}><h2>PROJECTS</h2></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#contact" className={classes.respnav__item}><h2>CONTACT</h2></a>
        </div>
    </div>
  )
}
