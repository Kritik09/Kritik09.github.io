import React from 'react'
import classes from './respnav.module.css'
export const NavLinks = () => {
  return (
    <div className={classes.respnav__links}>
        <div className={classes.respnav__link}>
            <a href="#home" className={classes.respnav__item}><h1>HOME</h1></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#about" className={classes.respnav__item}><h1>ABOUT</h1></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#achievements" className={classes.respnav__item}><h1>ACHIEVEMENTS</h1></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#skills" className={classes.respnav__item}><h1>SKILLS</h1></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#projects" className={classes.respnav__item}><h1>PROJECTS</h1></a>
        </div>
        <div className={classes.respnav__link}>
            <a href="#contact" className={classes.respnav__item}><h1>CONTACT</h1></a>
        </div>
    </div>
  )
}
