import React from 'react'
import { Progress } from './Progress'
import './skills.css'
import coreData from './core.json'
import devData from './development.json'
import softwareData from './software.json'
import lang from './lang.json'
export const Skills = () => {
  return (
      <section id="skills">
          <div className="skills__main__container">
              <div className="skills__title">
                  <h1>My Skills</h1>
              </div>
              <div className="skills__para">
                  <p>Learn to hide your need and show your skill. ~ Jim Rohn.</p>
              </div>
              <div className="skills__container">
                  <div className="skills__inner__container">
                      <h2>Core</h2>
                      {coreData.map((x,id)=>{
                          return(
                              <div key={id}>
                              <Progress skillName={x.name} wid={x.wid}/>
                              </div>
                          )
                      })}
                  </div>
                  <div className="skills__inner__container">
                      <h2>Languages Known</h2>
                      {lang.map((x,id)=>{
                          return(
                              <div key={id}>
                              <Progress skillName={x.name} wid={x.wid}/>
                              </div>
                          )
                      })}
                  </div>
                  <div className="skills__inner__container">
                      <h2>Development and FrameWorks</h2>
                      {devData.map((x,id)=>{
                          return(
                              <div key={id}>
                              <Progress skillName={x.name} wid={x.wid}/>
                              </div>
                          )
                        })}
                  </div>
                  <div className="skills__inner__container">
                      <h2>Softwares</h2>
                      {softwareData.map((x,id)=>{
                          return(
                              <div key={id}>
                              <Progress skillName={x.name} wid={x.wid}/>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
      </section>
  )
}
