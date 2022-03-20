import React from 'react'
import classes from './respnav.module.css'
import {motion} from 'framer-motion'
import {AiFillHome} from 'react-icons/ai'
import {IoIosPaper,IoMdContact} from 'react-icons/io'
import {GiAchievement} from 'react-icons/gi'
import {GiBowTieRibbon} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
export const NavlinksMobile = (props) => {
  const animatefrom={opacity:0,x:200}
  const animateto={opacity:1,x:0};
  return (
    <div className={classes.mobile__links}>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.05}} className={classes.mobile__link}>
            <a href="#home" className={classes.mobile__item}onClick={()=>props.close()}><h1><AiFillHome/> HOME</h1></a>
        </motion.div>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.10}} className={classes.mobile__link}>
            <a href="#about" className={classes.mobile__item}onClick={()=>props.close()}><h1><IoIosPaper/> ABOUT</h1></a>
        </motion.div>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.15}} className={classes.mobile__link}>
            <a href="#achievements" className={classes.mobile__item}onClick={()=>props.close()}><h1><GiAchievement/> ACHIEVEMENTS</h1></a>
        </motion.div>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.20}} className={classes.mobile__link}>
            <a href="#skills" className={classes.mobile__item}onClick={()=>props.close()}><h1><GiBowTieRibbon/> SKILLS</h1></a>
        </motion.div>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.25}} className={classes.mobile__link}>
            <a href="#projects" className={classes.mobile__item}onClick={()=>props.close()}><h1><FaChalkboardTeacher/> PROJECTS</h1></a>
        </motion.div>
        <motion.div initial={animatefrom} animate={animateto} transition={{delay:0.30}} className={classes.mobile__link}>
            <a href="#contact" className={classes.mobile__item}onClick={()=>props.close()}><h1><IoMdContact/> CONTACT</h1></a>
        </motion.div>
    </div>
  )
}
